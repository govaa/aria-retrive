import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/imprint"])),
      },
    };
  }
 
const TermCondition = () => {

    const { t } = useTranslation("pages/imprint");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/imprint' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <div className="main-text-area ptb-80">
                <div className="container">
                    <h3>{t("text-1")}</h3>

                    <h5>{t("text-2")}</h5>

                    <p>{t("text-3")}<br />{t("text-4")}<br />{t("text-5")}<br /></p>

                    <h5>{t("text-6")}</h5>

                    <p>Georgios Pipelidis<br />Nikolaos Tsiamitros<br /></p>
                    
                    <h5>{t("text-7")}</h5>

                    <p>{t("text-8")}<br />{t("text-9")}<br />{t("text-10")}<br /></p>

                    <h5>{t("text-11")}</h5>

                    <p>{t("text-12")}<br />{t("text-13")}<br />{t("text-14")}<br /></p>

                    <h5>{t("text-15")}</h5>

                    <p>{t("text-16")}<br /></p>
                    
                    <h5>{t("text-17")}</h5>

                    <p>{t("text-18")}<br />{t("text-19")}<br /></p>
                    
                    <h5>{t("text-20")}</h5>

                    <p>{t("text-21")}<br />{t("text-22")}<br />{t("text-23")}<br /></p>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default TermCondition;