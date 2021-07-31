export default function WHMCSLink({
  pid,
  currency,
  term,
  promo,
  label,
  className,
}) {
  currency = currency == "USD" ? 1 : 2;
  return (
    <a
      href={`https://billing.blesshost.com/cart.php?a=add&pid=${
        pid ?? 91
      }&currency=${currency ?? 1}&promocode=${promo ?? ""}`}
      className={className}
    >
      {label}
    </a>
  );
}
