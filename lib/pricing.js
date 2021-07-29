import useSwr from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function priceString(pid, term, currency, monthlyPricing = false) {
  const { data } = useSwr("/api/whmcs", fetcher);
  const { product: products } = data || {};

  if (pid != "-1") {
    // The parameter 'monthlyPricing' represents the amount when the term is greater than a month e.g. $200 / 12 = $16.67

    // Find the product
    const product = products?.find((product) => product.pid == pid);

    // Find the price
    const price = product?.pricing[currency.name][term];

    // Amount represents the numeric value
    let amount = 0;

    // Calculate monthly pricing if monthlyPricing is enabled
    if (term == "annually" && monthlyPricing == true) {
      amount = price / 12;
    } else {
      amount = price;
    }

    // Return formatted value
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.name || "usd",
      minimumFractionDigits: 0,
    }).format(amount);
  } else {
    return "Contact for pricing";
  }
}

export default priceString;
