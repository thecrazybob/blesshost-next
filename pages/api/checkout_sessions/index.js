import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {});

function formatAmountForStripe(amount, currency) {
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const amount = req.body.amount;
    const currency = req.body.currency;
    try {
      // Validate the amount that was passed from the client.
      // Create Checkout Sessions from body params.
      const params = {
        mode: "setup",
        payment_method_types: ["card"],
        success_url: `${req.headers.origin}/payment-result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
