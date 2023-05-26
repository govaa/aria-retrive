import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Warning from "@/components/Common/Warning";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/technology/ariadne-engagement"])),
      },
    };
  }

const AriadneEngagement = () => {

    const { t } = useTranslation("pages/technology/ariadne-engagement");

    return (
        <>
        
            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/technology/ariadne-engagement' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />
 
            <div className="services-details-area ptb-80 overflow-hidden quarter-circle" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>{t("page-title")}</h3>

                                <p>{t("text-1")}</p>

                                <p>{t("text-2")}</p>

                                <p>{t("text-3")}</p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/engagement.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/phonereview.jpg" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <p>{t("text-4")}</p>

                                <div className="services-details-accordion">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-5")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-6")}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-7")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-8")}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-9")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-10")}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="services-area-two pt-80 pb-50">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-ciel">
                                <h3>
                                    <a className="text-light fs-5">{t("text-11")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-velvet">
                                <h3>
                                    <a className="text-light fs-5">{t("text-12")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-orca">
                                <h3>
                                    <a className="text-light fs-5">{t("text-13")}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                
                <div className="container">
                    <div className="row justify-content-center">
                    <h2 className="row justify-content-center pt-80 pb-4">{t("text-14")}</h2>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/step1.png" alt="image" />
                                </div>
                                <h3>
                                        <a>{t("text-15")}</a>
                                </h3>
                                <p>{t("text-16")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/step2.png" alt="image" />
                                </div>
                                <h3>
                                        <a>{t("text-17")}</a>
                                </h3>
                                <p>{t("text-18")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/step3.jpg" alt="image" />
                                </div>
                                <h3>
                                        <a>{t("text-19")}</a>
                                </h3>
                                <p>{t("text-20")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
            <Warning />

            <Footer />
        </>
    )
}

export default AriadneEngagement;