import { useRouter } from "next/router";
import { useCart } from "../contexts/CartContext";

import useSWR from "swr";

async function fetchGetJSON(url) {
  try {
    const data = await fetch(url).then((res) => res.json());
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

const ResultPage = () => {
  const { dispatch } = useCart();
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  if (data?.payment_intent?.status === "succeeded") {
    dispatch({ type: "clearcart" });
  }

  return (
    <>
      <div className="page-container">
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2>
      </div>
    </>
  );
};

export default ResultPage;
