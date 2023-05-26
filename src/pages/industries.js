import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Industries from '@/components/Common/Industries';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/industries"])),
      },
    };
  }

 
const IndustriesPage = () => {

    const { t } = useTranslation("pages/industries");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/industries' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <Industries />
 
            <Footer />
        </>
    )
}

export default IndustriesPage;