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
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/technology/ariadne-navigation"])),
      },
    };
  }
 
const AriadneNavigation = () => {

    const { t } = useTranslation("pages/technology/ariadne-navigation");

    return (
        <>
        
            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/technology/ariadne-navigation' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />
 
            <div className="services-details-area ptb-80 overflow-hidden quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>{t("text-1")}</h3>

                                <p>{t("text-2")}</p>

                                <p>{t("text-3")}</p>

                                <p>{t("text-4")}</p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/navigation.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/navigatearea.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <p>{t("text-5")}</p>

                                <div className="services-details-accordion">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-6")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-7")}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-8")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-9")}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-10")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-11")}
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
                        <div className="col-lg-4 col-sm-6 ">
                            <div className="bg-ciel single-services-box">
                                <h3>
                                    <a className="text-light fs-5">{t("text-12")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-velvet">
                                <h3>
                                    <a className="text-light fs-5">{t("text-13")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-orca">
                                <h3>
                                    <a className="text-light fs-5">{t("text-14")}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AriadneNavigation;