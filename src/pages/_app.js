import "public/css/bootstrap.min.css";
import "animate.css";
import "public/css/boxicons.min.css";
import "public/css/flaticon.css";
import "public/css/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "nprogress/nprogress.css";
// ** Loader Import
import NProgress from "nprogress";
// import { appWithTranslation } from "next-i18next";
import { Router } from "next/router";

// Global Style
import "public/css/style.css";
import "public/css/responsive.css";
import "public/css/rtl.css";

// Multicolor if you want this color comment out
// import '@/public/css/colors/brink-pink-style.css'
// import '@/public/css/colors/pink-style.css'
// import '@/public/css/colors/purple-style.css'

import Layout from "@/components/_App/Layout";
import { Provider } from "react-redux";
import { useStore } from "../store";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import Script from "next/script";
import TagManager from "react-gtm-module";
import CookieConsent from "react-cookie-consent";
import { appWithTranslation } from "next-i18next";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

function App({
  Component,

  pageProps,
}) {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-TLNNDCF",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9225882475496989"
        crossOrigin="anonymous"
      ></script>

      <Head>
        <title>
          People Counting | Footfall Counter | Conversion Rate for Retail |
          Ariadne
        </title>
        <meta name="description" content="Ariadne" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <DefaultSeo defaultTitle="Ariadne" />

      <Script
        id="gtm-link"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=AW-955804861"
      />

      <Script strategy="lazyOnload" id="Google Tag Manager">
        {`window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-955804861');`}
      </Script>

      {!pageProps.useCustomCookieModal && (
        <CookieConsent
          debug={true}
          location="bottom"
          style={{ background: "#000", fontSize: "14px" }}
          buttonStyle={{
            color: "#fff",
            background: "#5a287f",
            fontSize: "14px",
          }}
          expires={365}
        >
          This site uses cookies to improve your experience and analyze traffic.
          By continuing to use this website, you agree to the use of cookies.
          Please find more information on our{" "}
          <a href="/privacy-policy" className="text-danger">
            <u>Privacy Policy</u>
          </a>{" "}
          page.
        </CookieConsent>
      )}

      <Provider store={store}>
        <Layout />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default appWithTranslation(App);