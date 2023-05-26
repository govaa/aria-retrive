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
        ...(await serverSideTranslations(locale, ["pages/privacy-policy"])),
      },
    };
  }
 
const PrivacyPolicy = () => {

    const { t } = useTranslation("pages/privacy-policy");

    return (
        <>
            
            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/privacy-policy' />

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

                    <p>{t("text-9")}<br />{t("text-49")}<br />{t("text-10")}<br />{t("text-11")}<br /></p>
                    
                    <h5>{t("text-12")}</h5>

                    <p>{t("text-13")}<br /></p>
                    
                    <h5>{t("text-14")}</h5>

                    <p>{t("text-15")}</p>
                                        
                    <h5>{t("text-16")}</h5>

                    <p>{t("text-17")}</p>
                                        
                    <h5>{t("text-18")}</h5>

                    <p>{t("text-19")}<br />{t("text-50")}<br />{t("text-51")}<br />{t("text-52")}<br /></p>
                                        
                    <h5>{t("text-20")}</h5>

                    <p>{t("text-21")}<br />{t("text-42")}<br />{t("text-43")}<br />{t("text-44")}<br />{t("text-45")}<br />{t("text-46")}<br />{t("text-47")}<br />{t("text-48")}<br /></p>
                                                            
                    <h5>{t("text-22")}</h5>

                    <h6>{t("text-23")}</h6>

                    <p>{t("text-24")}</p>

                    <h6>{t("text-25")}</h6>

                    <p>{t("text-26")}<br />{t("text-27")}<br /></p>
                                                            
                    <h5>{t("text-28")}</h5>

                    <p>{t("text-29")}<br /></p>
                                                            
                    <h5>{t("text-30")}</h5>

                    <p>{t("text-31")}<br />{t("text-32")}<br />{t("text-33")}<br /></p>
                                                            
                    <h5>{t("text-34")}</h5>

                    <p>{t("text-35")}<br /></p>
                                                            
                    <h5>{t("text-36")}</h5>

                    <p>{t("text-37")}<br /></p>
                    
                    <h5>{t("text-38")}</h5>

                    <p>{t("text-39")}<br /></p>
                                        
                    <h5>{t("text-40")}</h5>

                    <p>{t("text-41")}<br /></p>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default PrivacyPolicy;