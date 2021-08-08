import { loadStripe } from "@stripe/stripe-js";

//Format number for Stripe
export function formatAmountForStripe(amount, currency) {
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

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
