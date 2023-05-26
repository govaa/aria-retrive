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
        ...(await serverSideTranslations(locale, ["pages/data-lifecycle"])),
      },
    };
  }
   
 
const DataLifecycle = () => {

    const { t } = useTranslation("pages/data-lifecycle");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/data-lifecycle' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <div className="main-text-area ptb-80">
                <div className="container">

                    <p>{t("text-1")}</p>

                    <h5>{t("text-2")}</h5>

                    <p>{t("text-3")}</p>
                    
                    <h5>{t("text-4")}</h5>

                    <p>{t("text-5")}</p>

                    <h5>{t("text-6")}</h5>

                    <p>{t("text-7")}</p>

                    <h5>{t("text-8")}</h5>

                    <p>{t("text-9")}</p>
                    
                    <h5>{t("text-10")}</h5>

                    <p>{t("text-11")}<br /></p>
                    
                    <h5>{t("text-12")}</h5>

                    <p>{t("text-13")}</p>
                                        
                    <h5>{t("text-14")}</h5>

                    <p>{t("text-15")}</p>
                                        
                    <h5>{t("text-16")}</h5>

                    <p>{t("text-17")}</p>
                                        
                    <h5>{t("text-18")}</h5>

                    <p>{t("text-19")}</p>
                                                            
                    <h5>{t("text-20")}</h5>

                    <p>{t("text-21")}</p>

                    <h5>{t("text-22")}</h5>

                    <p>{t("text-23")}</p>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default DataLifecycle;