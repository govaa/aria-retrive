import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import PageBanner from "@/components/Common/PageBanner";

const PumaSg1Welcome = () => {
  return (
    <>
      <Head>
        <title>Captive Portal | Ariadne</title>
        <meta name="description" content="Ariadne" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NextSeo canonical="https://www.ariadne.inc/captiveportaldaseinstein" />

      <PageBanner pageTitle="Thank you for opting-in" />

    </>
  );
};

export default PumaSg1Welcome;
