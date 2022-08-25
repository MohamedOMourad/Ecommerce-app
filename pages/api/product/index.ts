import type { NextApiRequest, NextApiResponse } from 'next'
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
            sheetsToExtract: ['Products'],
        },
        function (err: any, data: any) {
            res.status(200).json({ data })
        }
    )
}

export default Handler;