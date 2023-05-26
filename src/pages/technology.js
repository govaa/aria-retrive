import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/technology"])),
      },
    };
  }
 

const Technology = () => {

    const { t } = useTranslation("pages/technology");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/technology' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <div className="services-area-two pt-80 pb-50 bg-ffffff quarter-circle" style={{position: 'relative'}}>
                <div className="container pb-50">
                    <div className="section-title">
                        <h2>{t("text-1")}</h2>
                        <div className="bar"></div>
                        <p>{t("text-2")}</p>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/ariadne-analytics.png" alt="Ariadne Analytics"/>
                                </div>
                                <h3>
                                    <Link href="/technology/ariadne-analytics">
                                        <a><u>{t("text-3")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-4")}</p>
                                <Link href="/technology/ariadne-analytics">
								<a className="read-more-btn"><u>{t("text-5")}</u></a>
							    </Link>	
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/ariadne-navigation.png" alt="Ariadne Navigation"/>
                                </div> 
                                <h3>
                                    <Link href="/technology/ariadne-navigation">
                                        <a><u>{t("text-6")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-7")}</p>
                                <Link href="/technology/ariadne-navigation">
								<a className="read-more-btn"><u>{t("text-8")}</u></a>
							    </Link>	
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                <img src="/images/icons/ariadne-engagement.png" alt="Ariadne Engagement"/>
                                </div>
                                <h3>
                                    <Link href="/technology/ariadne-engagement">
                                        <a><u>{t("text-9")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-10")}</p>
                                <Link href="/technology/ariadne-engagement">
								<a className="read-more-btn"><u>{t("text-11")}</u></a>
							    </Link>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Technology;