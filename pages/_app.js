import "tailwindcss/tailwind.css";
import "../assets/global.css";
import mailgo from "mailgo";
import { useEffect } from "react";
import { CurrencyContextProvider } from "./../contexts/CurrencyContext";
import { CartContextProvider } from "../contexts/CartContext";
import { CartOpenContextProvider } from "../contexts/CartOpenContext";
import Script from "next/script";
import { hotjar } from "react-hotjar";

import Layout from "../pages/_layout";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3095234, 6);
    mailgo();
  }, []);

  return (
    <CurrencyContextProvider>
      <CartOpenContextProvider>
        <CartContextProvider>
          <Layout>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=GTM-KSS7RD"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GTM-KSS7RD');
            `}
            </Script>

            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </CartOpenContextProvider>
    </CurrencyContextProvider>
  );
}
