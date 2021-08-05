export default function WHMCSLink({
  pid,
  currency,
  term,
  promo,
  label,
  className,
  raw,
}) {
  currency = currency == "USD" ? 1 : 2;

  let link = "#";

  if (pid > 0) {
    link = `https://billing.blesshost.com/cart.php?a=add&pid=${
      pid ?? 91
    }&currency=${currency ?? 1}&promocode=${promo ?? ""}`;
  } else {
    label = "Included";
  }

  return !raw ? (
    <a href={link} className={className}>
      {label}
    </a>
  ) : (
    link
  );
}
