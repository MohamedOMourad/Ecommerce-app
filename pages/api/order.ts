import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { items, ...order } = req.body
    console.log(order)
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
    const Order = doc.sheetsByTitle['Order'];
    await Order.addRow({ ...order });

}