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
  const link = `https://billing.blesshost.com/cart.php?a=add&pid=${
    pid ?? 91
  }&currency=${currency ?? 1}&promocode=${promo ?? ""}`;

  return !raw ? (
    <a href={link} className={className}>
      {label}
    </a>
  ) : (
    link
  );
}
