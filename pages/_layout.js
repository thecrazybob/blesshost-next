import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Script from "next/script";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Website Design & Hosting in Abu Dhabi and Dubai!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />

        <link rel="alternate" hrefLang="en" href="https://www.blesshost.com" />
        <link rel="alternate" hrefLang="ar" href="https://ae.blesshost.com" />
        <link rel="alternate" hrefLang="ru" href="https://ru.blesshost.com" />
        <link rel="alternate" hrefLang="zh" href="https://zh.blesshost.com" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#3e83f8" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#3e83f8"></meta>

        <meta name="description" content="Make a website in Dubai" />
      </Head>

      <Header></Header>

      {children}

      <Footer></Footer>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />
        <FloatingWhatsApp
            phoneNumber="971544423111"
            accountName="BlessHost"
            onClick={() => {}}
            onSubmit={() => {}}
            onClose={() => {}}
            onLoopDone={() => {}}
            onNotification={() => {}}
            avatar="https://www.blesshost.com/img/media-kit/4a.png"
            statusMessage="Typically replies within 1 hour"
            chatMessage="Hello there! How can we help you?"
            placeholder="Type a message.."
            messageDelay={2}
            darkMode={false}
            allowClickAway={false}
            allowEsc={false}
            className="floating-whatsapp"
            buttonClassName="floating-whatsapp-button"
            style={{}}
            buttonStyle={{}}
            chatboxHeight={320}
            chatboxClassName="floating-whatsapp-chatbox"
            chatboxStyle={{}}
            notification={false}
            notificationDelay={60}
            notificationSound={false}
            notificationSoundSrc=""
            notificationLoop={0}
            notificationStyle={{}}
            notificationClassName=""
            strategy="lazyOnload"
        />
    </>
  );
}
