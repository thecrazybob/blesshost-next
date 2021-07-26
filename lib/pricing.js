import useSwr from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function priceString(
  id,
  term,
  monthlyPricing = false,
  plans = [],
  currency,
  billingInterval,
  pid
) {
  const { data, error } = useSwr("/api/hello", fetcher);
  const { product: products } = data || {};
  console.log(products);

  // The parameter 'monthlyPricing' represents the amount when the term is greater than a month e.g. $200 / 12 = $16.67

  // Use the parameter if available else use value stored in state
  term = term ?? billingInterval;

  // Find the price array
  const price = plans[id]?.prices?.find(
    (price) => price.interval === term && price.currency === currency?.name
  );

  // Amount represents the numeric value
  let amount = 0;

  if (term == "year" && monthlyPricing == true) {
    amount = price?.unit_amount / 12;
  } else {
    amount = price?.unit_amount;
  }

  // Return formatted value
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price?.currency || "usd",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default priceString;
