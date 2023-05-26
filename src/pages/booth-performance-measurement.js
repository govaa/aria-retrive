import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import EmailBoothNumber from '@/components/Contact/EmailBoothNumber';
import BlogVideo from '@/components/Common/BlogVideo'; 
import * as Icon from 'react-feather';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/booth-performance-measurement"])),
      },
    };
  }
   
 
const BoothPerformanceMeasurement = () => {

    const { t } = useTranslation("pages/booth-performance-measurement");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Free Booth Performance Measurement' />
                <meta property="og:title" content="Ariadne" />
                <meta property="og:description" content="Join Us in EuroShop 2023!" />
                <meta property="og:image" content="https://www.ariadne.inc/images/blog-image/nrf.png"/>
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/booth-performance-measurement' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} /> 

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/exhibition visual.png" alt="Booth Performance Measurement" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>

                                        </ul>
                                    </div>
 
                                    <h1>{t("text-1")}</h1> 

                                    <p className="lead text-dark">{t("text-2")}</p>
                                    <p className="lead text-dark">{t("text-3")}<strong className="text-danger">{t("text-4")}</strong>?</p>
                                    <p className="lead text-dark">{t("text-5")}</p>
                                    <p className="lead text-dark">{t("text-6")}<strong className="text-danger">{t("text-7")}</strong>{t("text-8")}</p>

                                    <p className="pt-3 lead text-dark">{t("text-9")}<strong className="text-danger">{t("text-10")}</strong>{t("text-11")}</p>

                                    <EmailBoothNumber />

                                    <h3>{t("text-12")}</h3>
                                    
                                    <blockquote>
                                    <h4>{t("text-13")}</h4>

                                    <ul className="features-list">
                                    <li><Icon.Check />{t("text-14")}<strong><u>{t("text-15")}</u></strong>{t("text-16")}</li>
                                    <li><Icon.Check />{t("text-17")}<strong><u>{t("text-18")}</u></strong>{t("text-19")}</li>                                    
                                    <li><Icon.Check />{t("text-20")}</li>
                                    <li><Icon.Check />{t("text-21")}</li>
                                    <li><Icon.Check />{t("text-22")}</li>
                                    <li><Icon.Check />{t("text-23")}</li>
                                    <li><Icon.Check />{t("text-24")}</li>
                                    </ul>

                                    </blockquote>

                                    <h3 id="form">{t("text-25")}</h3>
                                    
                                    <blockquote>
                               
                                    <ul className="features-list">
                                    <li><Icon.Check />{t("text-26")}</li>
                                    <li><Icon.Check />{t("text-27")}</li>
                                    <li><Icon.Check />{t("text-28")}<strong><u>{t("text-29")}</u></strong>{t("text-30")}<strong><u>{t("text-31")}</u></strong>?</li>
                                    <li><Icon.Check />{t("text-32")}<strong><u>{t("text-33")}</u></strong>{t("text-34")}<strong><u>{t("text-35")}</u></strong>?</li>
                                    <li><Icon.Check />{t("text-36")}<strong><u>{t("text-37")}</u></strong>?</li>
                                    <li><Icon.Check />{t("text-38")}</li>
                                    </ul>

                                    </blockquote>

                                    {/* <h3>Downloads</h3>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EYGEmHaUdIdOsugp2jYigc8Bni0ipGdou5hNu5XgRK_qEg?e=RrcELl"><Icon.Download /> Expo Real First Day</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EeygzCID1j1ArGpkFGUPMKwBOWPc25kTCiO8kKAh1L0W_Q?e=e9gRac"><Icon.Download /> Expo Real Final Report</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EcGBPjKkjWZCq579ntk3YBUBBYJgzpV5HixfZDRbIwe-ug?e=inSVgt"><Icon.Download /> Smart City Expo World Congress Report</a></p> */}

                                    <p className="pt-3 lead text-dark">{t("text-39")}<strong className="text-danger">{t("text-40")}</strong>{t("text-41")}<a href="/prepare-for-exhibitions"><u className="text-danger">{t("text-42")}</u></a>{t("text-43")}<a href="/prepare-for-exhibitions"><u className="text-danger">{t("text-44")}</u></a>!</p>
                                    
                                    <p className="pt-3 lead text-dark">{t("text-45")}<a href="/blog/nrf-retails-big-show-2023-visitors/"><u className="text-danger">{t("text-46")}</u></a>!</p>

                                    <p className="pt-3 lead text-dark">{t("text-47")}<strong className="text-danger">{t("text-48")}</strong>{t("text-49")}</p>

                                    <EmailBoothNumber />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlogVideo />
            <Footer />
        </>
    )
}

export default BoothPerformanceMeasurement;