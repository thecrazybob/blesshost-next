import 'tailwindcss/tailwind.css'
import '../assets/global.css'
import mailgo from "mailgo";
import { useEffect } from "react";

import Layout from '../pages/_layout'
export default function App({ Component, pageProps }) {

    useEffect(() => {
        mailgo();
    }, []);

    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
