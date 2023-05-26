import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import PageBanner from "@/components/Common/PageBanner";

const AlIkhsanAMTWelcome = () => {
  return (
    <>
      <Head>
        <title>Welcome to Alikhsan AMT 2023 | Ariadne</title>
        <meta name="description" content="Ariadne" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NextSeo canonical="https://www.ariadne.inc/optin/alIkhsan_amt" />

      <PageBanner pageTitle="Thank you for opting-in" />
    </>
  );
};

export default AlIkhsanAMTWelcome;
