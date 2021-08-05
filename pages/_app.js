import "tailwindcss/tailwind.css";
import "../assets/global.css";
import mailgo from "mailgo";
import { useEffect } from "react";
import { CurrencyContextProvider } from "./../contexts/CurrencyContext";
import { CartContextProvider } from "../contexts/CartContext";

import Layout from "../pages/_layout";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    mailgo();
  }, []);

  return (
    <CurrencyContextProvider>
        <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </CartContextProvider>
    </CurrencyContextProvider>
  );
}
