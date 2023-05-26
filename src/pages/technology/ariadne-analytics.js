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
        ...(await serverSideTranslations(locale, ["pages/technology/ariadne-analytics"])),
      },
    };
  }
 
const AriadneAnalytics = () => {

    const { t } = useTranslation("pages/technology/ariadne-analytics");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/technology/ariadne-analytics' />
            
            <Navbar />

            <PageBanner pageTitle={t("page-title")} // style= {{backgroundImage: `url(${Banner})`}}// 
            />

            <div className="agency-services-area ptb-80 pb-50 bg-ffffff semi-circle overflow-hidden">
                <div className="container quarter-circle">
                    <div className="row justify-content-center">
                        <h2 className="row justify-content-center pb-50">{t("text-1")}</h2>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/total.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-2")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/floor1.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-3")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/floor2.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-4")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <h2 className="row justify-content-center ptb-80">{t("text-5")}</h2>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/numberofpeople.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-6")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/numberofpeoplebyarea.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-7")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/averagehourlynumberofarrivals.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-8")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <h2 className="row justify-content-center ptb-80">{t("text-9")}</h2>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/dwelltime.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-10")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/dwelltimebyarea.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-11")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/hourlydwelltime.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-12")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <h2 className="row justify-content-center ptb-80">{t("text-13")}</h2>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/customersbytimespent.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-14")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/alerts.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-15")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/numberofpeoplebyareasvisited.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-16")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <h2 className="row justify-content-center ptb-80">{t("text-17")}</h2>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/heatmap2d.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-18")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/heatmap3d.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-19")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <h2 className="row justify-content-center ptb-80">{t("text-20")}</h2>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/productsuccess2d.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-21")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/productsuccess3d.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-22")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                                         
                        <h2 className="row justify-content-center ptb-80">{t("text-23")}</h2>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/transition1.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-23")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/transition2.png" alt="image" />

                                <div className="content">
                                    <h3>
                                        <span>{t("text-24")}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                                              
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src="/images/shape2.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.png" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.png" alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src="/images/shape4.png" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.png" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.png" alt="shape" />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AriadneAnalytics;