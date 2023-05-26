import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/industries/cities"])),
      },
    };
  }

 
const Cities = () => {
    
    const { t } = useTranslation("pages/industries/cities");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/industries/cities' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <div className="services-area-two pt-80 pb-50 bg-ffffff quarter-circle" style={{position: 'relative'}}>
                <div className="container">
                    <div className="section-title">
                        <h2>{t("text-1")}</h2>
                        <div className="bar"></div>
                        <p>{t("text-2")}</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/shopping-streets.png" alt="Shopping Streets"/>
                                </div>
                                <h3>
                                        <a>{t("text-3")}</a>
                                </h3>
                                <p>{t("text-4")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/service-buildings.png" alt="Service Buildings"/>
                                </div>
                                <h3>
                                        <a>{t("text-5")}</a>
                                </h3>
                                <p>{t("text-6")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/public-advertising.png" alt="Public Advertising"/>
                                </div>
                                <h3>
                                        <a>{t("text-7")}</a>
                                </h3>
                                <p>{t("text-8")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/identify-personas.png" alt="Identify Personas"/>
                                </div>
                                <h3>
                                        <a>{t("text-9")}</a>
                                </h3>
                                <p>{t("text-10")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/rent-prices.png" alt="Rent Prices"/>
                                </div>
                                <h3>
                                        <a>{t("text-11")}</a>
                                </h3>
                                <p>{t("text-12")}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Cities;