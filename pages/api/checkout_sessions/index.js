import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { products } = req.body;

    try {
      // Validate the amount that was passed from the client.
      // Create Checkout Sessions from body params.
      const params = {
        mode: "payment",
        payment_intent_data: {
          setup_future_usage: "off_session",
        },
        payment_method_types: ["card"],
        line_items: products,
        success_url: `${req.headers.origin}/payment-result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      console.log(err);
      // res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
