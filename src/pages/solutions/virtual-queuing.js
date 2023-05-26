import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Partner from "@/components/Common/Partner";
import PageBanner from '@/components/Common/PageBanner';
import ContactForm from "@/components/Contact/ContactForm"
import Industries from '@/components/Common/Industries';
import * as Icon from 'react-feather';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";

 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/solutions/virtual-queuing"])),
      },
    };
  }
 
const VirtualQueuing = () => {

    const { t } = useTranslation("pages/solutions/virtual-queuing");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/solutions/virtual-queuing' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />
 
            <div className="services-details-area ptb-80 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                
                            <h3>{t("text-1")}</h3>

                            <p><strong>{t("text-2")}</strong></p>

                            <p>{t("text-3")}</p>

                            <p>{t("text-4")}</p>

                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/virtualqueuing.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                                width="450px"
                            />
                        </div>
                        <div className="row justify-content-center">
                    <h2 className="row justify-content-center pt-80 pb-4">{t("text-5")}</h2>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-details-image/virtualqueuingstep1.png" alt="image" />
                                </div>
                                <h3>
                                        <a>{t("text-6")}</a>
                                </h3>
                                <p>{t("text-7")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-details-image/virtualqueuingstep2.png" alt="image" />
                                </div>
                                <h3>
                                        <a>{t("text-8")}</a>
                                </h3>
                                <p>{t("text-9")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-details-image/virtualqueuingstep3.png" alt="image" />
                                </div>
                                <h3>
                                        <a>{t("text-10")}</a>
                                </h3>
                                <p>{t("text-11")}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
                    
                <div className="services-details-area quarter-circle-side" style={{position: "relative"}}>
                <div className="container">
                <div className="services-area-two ptb-80">
                <h3 className="row justify-content-center pb-50">{t("text-12")}</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-ciel">
                                <h3>
                                    <a className="text-light fs-5">{t("text-13")}</a>
                                </h3>
                            </div>
                        </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box bg-velvet">
                            <h3>
                                <a className="text-light fs-5">{t("text-14")}</a>
                            </h3>
                        </div>
                    </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-orca">
                                <h3>
                                    <a className="text-light fs-5">{t("text-15")}</a>
                                </h3>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-applegreen">
                                <h3>
                                    <a className="text-light fs-5">{t("text-16")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-clockwork">
                                <h3>
                                    <a className="text-light fs-5">{t("text-17")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-raspberry">
                                <h3>
                                    <a className="text-light fs-5">{t("text-18")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-grass">
                                <h3>
                                    <a className="text-light fs-5">{t("text-19")}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
{/*                     
                    <h3 className="row justify-content-center ptb-80">Downloads</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-velvet">
                                <h3>
                                    <a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/georgios_ariadnemaps_com/EeVbwyverMJEi2hjnRTENrcB1VIUgpGfl-QyyDyOXbYEzA?e=shAQu3" className="text-light fs-5"><Icon.Download /> Virtual Queuing Brochure</a>
                                </h3>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-velvet">
                                <h3>
                                    <a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/georgios_ariadnemaps_com/EaUOONKW_AJOtpEX_IJ27V8ByIDo9VdYOKNzFjrwxmkTbw?e=ZlBGCb" className="text-light fs-5"><Icon.Download /> Ultimate Product Sheet</a>
                                </h3>
                            </div>
                        </div>
                    </div> */}
                </div>
                </div>
                </div>

            

            <Industries />

            <div className="pb-80">
            <Partner />
            </div>

            <ContactForm />

            <Footer />
        </>
    )
}

export default VirtualQueuing;