import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import FeedbackStyleTwo from "@/components/Common/FeedbackStyleTwo";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/about"])),
      },
    };
  }
 

const About = () => {

    const { t } = useTranslation("pages/about");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/about' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <div className="about-area ptb-80 bg-ffffff quarter-circle" style={{position: 'relative'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-one.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>{t("text-1")}</h2>
                                    <div className="bar"></div>
                                </div>

                                <p>{t("text-2")}</p>

                                <p>{t("text-3")}</p>

                                <p>{t("text-4")}</p><br/>


                            </div>
                        </div>

                        
                        <p>{t("text-5")}</p>
                        <p>{t("text-6")}</p>
                        <p>{t("text-7")}</p>
                        <p>{t("text-8")}</p>
                        <p>{t("text-9")}</p>

                        <p>{t("text-10")}</p>

                        <p>{t("text-11")}</p>

                        <p><strong>{t("text-12")}</strong></p>

                        <p>{t("text-13")}</p>

                        <p><strong>{t("text-14")}</strong></p>

                    </div>

                    <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>{t("text-15")}</h3>
                                    <p>{t("text-16")}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>{t("text-17")}</h3>
                                    <p>{t("text-18")}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>{t("text-19")}</h3>
                                    <p>{t("text-20")}</p>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center pt-5">
                                <h2 className="mb-5">{t("text-21")}</h2>
                            <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-ciel">
                                    <img src="/images/icons/precisionaccuracy.svg" alt="Precision & Accuracy" width="60%" style={{filter: "invert(100%)"}} />
                                </div>
                                <h3>
                                        <a>{t("text-22")}</a>
                                </h3>
                                <p>{t("text-23")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-velvet">
                                    <img src="/images/icons/scientificintegrity.svg" alt="Scientific Integrity" width="60%" style={{filter: "invert(100%)"}}/>
                                </div>
                                <h3>
                                        <a>{t("text-24")}</a>
                                </h3>
                                <p>{t("text-25")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-orca">
                                    <img src="/images/icons/pragmatism.svg" alt="Pragmatism" width="60%" style={{filter: "invert(100%)"}}/>
                                </div>
                                <h3>
                                        <a>{t("text-26")}</a>
                                </h3>
                                <p>{t("text-27")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-applegreen">
                                    <img src="/images/icons/costconsciousness.svg" alt="Cost Consciousness" width="60%" style={{filter: "invert(100%)"}}/>
                                </div>
                                <h3>
                                        <a>{t("text-28")}</a>
                                </h3>
                                <p>{t("text-29")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-clockwork">
                                    <img src="/images/icons/respect.svg" alt="Respect"  width="60%" style={{filter: "invert(100%)"}}/>
                                </div>
                                <h3>
                                        <a>{t("text-30")}</a>
                                </h3>
                                <p>{t("text-31")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-raspberry">
                                    <img src="/images/icons/accountability.svg" alt="Accountability" width="60%" style={{filter: "invert(100%)"}}/>
                                </div>
                                <h3>
                                        <a>{t("text-32")}</a>
                                </h3>
                                <p>{t("text-33")}</p>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Team />

            <FeedbackStyleTwo />

            <FunFactsArea />
            
            <Footer />
        </>
    )
}

export default About;