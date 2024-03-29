import data from "./products-data.preval";

const fetcher = (url) => fetch(url).then((r) => r.json());

function priceString({
  pid,
  term,
  currency,
  monthlyPricing = false,
  customPricingArray,
  raw = false,
}) {
  const { product: products } = data || {};

  if (pid != "-1" && pid != "-2") {
    // The parameter 'monthlyPricing' represents the amount when the term is greater than a month e.g. $200 / 12 = $16.67

    // Find the product
    const product = products?.find((product) => product.pid == pid);

    // Find the price
    const price = customPricingArray
      ? customPricingArray?.[currency.name]
      : product?.pricing[currency.name][term];

    // Amount represents the numeric value
    let amount = 0;

    // Calculate monthly pricing if monthlyPricing is enabled
    if (term == "annually" && monthlyPricing == true) {
      amount = price / 12;
    } else {
      amount = price;
    }

    let maxDecimal = currency.name == "USD" ? 2 : 0;

    // 2 AED Offer Override
    if (pid == "91" && (term == "monthly") & (currency.name == "AED")) {
      amount = "2";
    }

    //raw = unformatted value
    if (raw) {
      return amount;
    }

    // Return formatted value
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.name || "usd",
      minimumFractionDigits: 0,
      maximumFractionDigits: maxDecimal,
    }).format(amount);
  } else if (pid == "-1") {
    return "Contact for pricing";
  } else {
    return "Free";
  }
}

export default priceString;
