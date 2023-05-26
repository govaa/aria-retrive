import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import PageBanner from "@/components/Common/PageBanner";

const Mall360Welcome = () => {
  return (
    <>
      <Head>
        <title>Welcome to 360 Mall | Ariadne</title>
        <meta name="description" content="Ariadne" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NextSeo canonical="https://www.ariadne.inc/optin/360mall" />

      <PageBanner pageTitle="Thank you for opting-in" />
    </>
  );
};

export default Mall360Welcome;
