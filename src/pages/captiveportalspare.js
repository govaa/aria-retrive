// import React from 'react';
// import Navbar from "@/components/_App/Navbar";
// import Footer from "@/components/_App/Footer";
// import PageBanner from '@/components/Common/PageBanner';
// import GoogleAdsense from '@/components/Common/GoogleAdsense'
// import Head from "next/head";
// import { NextSeo } from "next-seo";

// const CaptivePortal = () => {
//     return (
//         <>

//             <Head>
//                 <title>
//                 Captive Portal | Ariadne
//                 </title>
//                 <meta name='description' content='Ariadne' />
//                 <link rel='icon' href='/favicon.png' />
//             </Head>
//             <NextSeo canonical='https://www.ariadne.inc/industries/retail-stores' />

//             <Navbar />

//             <PageBanner pageTitle="Captive Portal" />

//             <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
//                 <div className="container">
//                     <GoogleAdsense />
//                 </div>
//             </div>

//             <Footer />
//         </>
//     )
// }

// export default CaptivePortal;

import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
// import GoogleAdsense from "@/components/Common/GoogleAdsense";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default class Ad extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <>
        <Head>
          <title>Captive Portal | Ariadne</title>
          <meta name='description' content='Ariadne' />
          <link rel='icon' href='/favicon.png' />
        </Head>
        <NextSeo canonical='https://www.ariadne.inc/industries/retail-stores' />

        <Navbar />

        <PageBanner pageTitle='Captive Portal' />

        <div className='ad'>
          <ins
            className='adsbygoogle'
            style={{ display: "block" }}
            data-ad-client='ca-pub-9225882475496989'
            data-ad-slot='6600412537'
            data-ad-format='auto'
            data-full-width-responsive='true'
          ></ins>
        </div>

        {/* <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <GoogleAdsense />
            </div>
        </div> */}

        <Footer />
      </>
    );
  }
}
