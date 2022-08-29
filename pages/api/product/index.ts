import type { NextApiRequest, NextApiResponse } from 'next'
import { Image, Product } from '../../../types/index'
import { extractSheets } from 'spreadsheet-to-json'



function Handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    extractSheets(
        {
            // your google spreadsheet key
            spreadsheetKey: process.env.SHEET_ID,
            // your google oauth2 credentials or API_KEY
            credentials: require('../../../secrets.json'),
            // optional: names of the sheets you want to extract
            sheetsToExtract: ['Product',
                'Image'],
        },
        function (err: any, data: any) {
            // const images = .map(((image: string) => image));
            const products = data.Product.map((product: Product) => {
                const images = data.Image.filter((image: Image) => image.productId === product.id);
                return { ...product, images }
            })
            return res.status(200).json(products)
        }
    )
}

export default Handler;