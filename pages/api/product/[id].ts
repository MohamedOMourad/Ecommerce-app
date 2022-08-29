import type { NextApiRequest, NextApiResponse } from 'next'
import { extractSheets } from 'spreadsheet-to-json'
import { GoogleSheet, Image, Product } from 'types'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    console.log({id})
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
            // console.log(data)
            const images = data.Image.filter((image: Image) => image.productId === id)
            const product = data.Product.find((product: Product) => {
                return product.id === id!
            })

            return res.status(200).json({ ...product, images })
        }
    )
}


































































// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { extractSheets } from 'spreadsheet-to-json'



// function Handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     const credentials = JSON.parse(
//         Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS!, 'base64').toString()
//     )

//     extractSheets(
//         {
//             // your google spreadsheet key
//             spreadsheetKey: process.env.SHEET_ID,
//             // your google oauth2 credentials or API_KEY
//             credentials,
//             // optional: names of the sheets you want to extract
//             sheetsToExtract: ['Products'],
//         },
//         function (err: any, data: any) {
//             res.status(200).json({ data })
//         }
//     )
// }

// export default Handler;























// import type { NextApiRequest, NextApiResponse } from 'next'
// import { google, sheets_v4 } from 'googleapis';
// import { extractSheets } from "spreadsheet-to-json"
// import { GaxiosResponse } from 'googleapis-common';


// optional custom format cell function
// const formatCell = (sheetTitle: any, columnTitle: any, value: any) => value.toUpperCase();

// extractSheets(
//     {
//         // your google spreadhsheet key
//         spreadsheetKey: process.env.SHEET_ID,
//         // your google oauth2 credentials or API_KEY
//         credentials: require("secrets.json"),
//         // optional: names of the sheets you want to extract
//         sheetsToExtract: ["Sheet1"],
//         // optional: custom function to parse the cells
//         formatCell: formatCell
//     },
//     function (err: any, data: any) {
//         console.log("Customers: ", data.Sheet1);
//     }
// );


// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     const { id } = req.query;

//     const auth = new google.auth.GoogleAuth({
//         keyFile: "secrets.json",
//         scopes: "https://www.googleapis.com/auth/spreadsheets",
//     });

//     // Create client instance for auth
//     const client = await auth.getClient();

//     // Instance of Google Sheets API
//     const googleSheets = google.sheets({ version: "v4", auth: client });

//     const spreadsheetId = process.env.SHEET_ID;

//     // Get metadata about spreadsheet
//     const metaData = await googleSheets.spreadsheets.get({
//         auth,
//         spreadsheetId,
//     });

//     const range = `Sheet1!A${id}:C${id}`;
//     // Read rows from spreadsheet
//     const rows = await googleSheets.spreadsheets.values.get({
//         auth,
//         spreadsheetId,
//         range
//     });
//     const data = rows.data.values
//     res.status(200).send({ data })
// }




















































// export async function getServerSideProps({ query }: { query: any }) {

//     const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

//     const sheets = google.sheets({ version: 'v4', auth });

//     const { id } = query;
//     const range = `Sheet1!A${id}:C${id}`;

//     const response = await sheets.spreadsheets.values.get({
//         spreadsheetId: process.env.SHEET_ID,
//         range,
//     });

//     const [title, content] = response.data.values![0];
//     console.log(title, content)

//     return {
//         props: {
//             title,
//             content
//         }
//     }
// }

//   