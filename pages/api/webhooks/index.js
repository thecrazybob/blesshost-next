import { buffer } from "micro";
import Cors from "micro-cors";
import Stripe from "stripe";
import whmcsCreateClient from "../../../lib/createclient";
import whmcsGetClient from "../../../lib/getclient";
import whmcsAddOrder from "../../../lib/addorder";

let clientid;
let orderpids = [];
let billingcycles = [];
let user = {
  firstname: "",
  lastname: "",
  email: "",
  country: "",
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

const webhookHandler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        webhookSecret
      );
    } catch (err) {
      // On error, log and return the error message.
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event.
    console.log("✅ Success:", event.id);
    // Cast event data to Stripe object.
    if (event.type === "checkout.session.completed") {
      const orders = event.data.object.metadata;

      const res = await whmcsCreateClient(
        user.firstname,
        user.lastname,
        user.email,
        user.country
      );
      if (res.result === "success") {
        clientid = res.clientid;
      } else {
        const res = await whmcsGetClient(user.email);
        if (res.result == "success") {
          clientid = res.clients.client[0].id;
        }
      }

      for (const [key, value] of Object.entries(orders)) {
        orderpids.push(key);
        billingcycles.push(value);
      }

      let result = await whmcsAddOrder(clientid, orderpids, billingcycles);
    } else if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object;
      console.log(`💰 PaymentIntent status: ${paymentIntent.status}`);
      console.log(paymentIntent.charges.data[0].billing_details);
      let fullname = [];
      fullname = paymentIntent.charges.data[0].billing_details.name.split(" ");
      user.firstname = fullname[0];
      user.lastname = fullname[1];
      user.email = paymentIntent.charges.data[0].billing_details.email;
      user.country =
        paymentIntent.charges.data[0].billing_details.address.country;
    } else if (event.type === "payment_intent.payment_failed") {
      const paymentIntent = event.data.object;
      console.log(
        `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
      );
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default cors(webhookHandler);
