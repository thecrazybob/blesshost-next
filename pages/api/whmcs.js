// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getProducts from "../../lib/products";

export default async function whmcsAPI(req, res) {
//   if (req.body.token !== process.env.API_ROUTE_SECRET) {
//     return res.status(401).json({
//       error: {
//         code: "invalid_token",
//         message: "Invalid Token",
//       },
//     });
//   } else {
    const products = await getProducts();

    return res.status(200).json(products);
//   }
}
