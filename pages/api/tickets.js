// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getClosedTicketsCount from "../../lib/tickets-closed-count";

export default async function ticketsAPI(req, res) {
  //   if (req.body.token !== process.env.API_ROUTE_SECRET) {
  //     return res.status(401).json({
  //       error: {
  //         code: "invalid_token",
  //         message: "Invalid Token",
  //       },
  //     });
  //   } else {
  const products = await getClosedTicketsCount();

  return res.status(200).json(products);
  //   }
}
