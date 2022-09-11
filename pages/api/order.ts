import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { extractSheets } from 'spreadsheet-to-json';
import { CartItem, Product } from 'types';
import { uuid } from 'uuidv4'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { cartItems, ...order } = req.body
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

    const credentials = JSON.parse(
        Buffer.from(process.env.secret!, 'base64').toString()
    )

    await doc.useServiceAccountAuth(
        {
            private_key: credentials.private_key,
            client_email: credentials.client_email!,
        })

    await doc.loadInfo();

    const orderSheet = doc.sheetsByTitle['Order'];
    const orderId = uuid()
    await orderSheet.addRow({ ...order, id: orderId });

    const data = await extractSheets(
        {
            spreadsheetKey: process.env.SHEET_ID,
            credentials: require('../../secrets.json'),
            sheetsToExtract: ['Product'],
        },
        function (err: any, data: any) {
            return data
        }
    )

    const products = data.Product;
    const orderDetailsSheet = doc.sheetsByTitle['OrderDetails'];

    for (let i = 0; i < cartItems.length; i++) {
        const availProduct: Product = await products.find(
            (product: Product) => product.id === cartItems[i].id
        )
        if (!availProduct) {
            res.status(400).send('Product not found!');
        }
        console.log(availProduct)
        await orderDetailsSheet.addRow({ orderId, productId: availProduct.id, quantity: cartItems[i].quantity })
    }

}