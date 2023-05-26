import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Link from 'next/link';
import Partner from "@/components/Common/Partner";
import PageBanner from '@/components/Common/PageBanner';
import ContactForm from "@/components/Contact/ContactForm"
import Industries from '@/components/Common/Industries';
import * as Icon from 'react-feather';
import Head from "next/head";
import { NextSeo } from "next-seo";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";

 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/solutions/people-counting3"])),
      },
    };
  }
 
const PeopleCounting = () => {

    const { t } = useTranslation("pages/solutions/people-counting3");

    return (
        <>
            
            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/solutions/people-counting' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />
 
            <div className="services-details-area ptb-80 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>{t("text-1")}<strong>{t("text-2")}</strong></h3>

                                <p>{t("text-3")}</p>

                                <h3>{t("text-4")}</h3>

                                <p>{t("text-5")}</p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/peoplecountingphone.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image"
                                width="450px"
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/peoplecountinglaptop.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <p>{t("text-6")}</p>

                                <h3>{t("text-7")}</h3>

                                <p>{t("text-8")}</p>

                                <Link href="/blog/people-counting">
										<a className="btn btn-primary mb-3">{t("text-9")}</a>
                                </Link>

                                <p className="mb-5">{t("text-10")}<strong>{t("text-11")}</strong>{t("text-12")}</p>
                            </div>
                        </div>
                        
                        <div className="faq-accordion mb-5 mt-5">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-13")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-14")}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-15")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-16")}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-17")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-18")}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {t("text-19")}
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                {t("text-20")}                                                
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div> 
                        </div>
                    </div>
            
                            
                <div className="services-details-area quarter-circle-side" style={{position: "relative"}}>
                <div className="container">
                <div className="services-area-two pb-80">
                <h3 className="row justify-content-center pb-50">{t("text-21")}</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-ciel">
                                <h3>
                                    <a className="text-light fs-5">{t("text-22")}</a>
                                </h3>
                            </div>
                        </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box bg-velvet">
                            <h3>
                                <a className="text-light fs-5">{t("text-23")}</a>
                            </h3>
                        </div>
                    </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-orca">
                                <h3>
                                    <a className="text-light fs-5">{t("text-24")}</a>
                                </h3>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-applegreen">
                                <h3>
                                    <a className="text-light fs-5">{t("text-25")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-clockwork">
                                <h3>
                                    <a className="text-light fs-5">{t("text-26")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-raspberry">
                                <h3>
                                    <a className="text-light fs-5">{t("text-27")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-grass">
                                <h3>
                                    <a className="text-light fs-5">{t("text-28")}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <h3 className="row justify-content-center ptb-80">{t("text-29")}</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-ciel">
                                <h3>
                                    <a className="text-light fs-5">{t("text-30")}</a>
                                </h3>
                            </div>
                        </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box bg-velvet">
                            <h3>
                                <a className="text-light fs-5">{t("text-31")}</a>
                            </h3>
                        </div>
                    </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-grass">
                                <h3>
                                    <a className="text-light fs-5">{t("text-32")}</a>
                                </h3>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-applegreen">
                                <h3>
                                    <a className="text-light fs-5">{t("text-33")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-clockwork">
                                <h3>
                                    <a className="text-light fs-5">{t("text-34")}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-raspberry">
                                <h3>
                                <a className="text-light fs-5">{t("text-35")}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <h3 className="row justify-content-center ptb-80">Downloads</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-velvet">
                                <h3>
                                    <a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/georgios_ariadnemaps_com/EdBxFymcmOxPnPmCSn84BB4B-5LhsP2GmQO8dc4VJb_8qw?e=fk1Qox" className="text-light fs-5"><Icon.Download /> Praktiker Case Study</a>
                                </h3>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-velvet">
                                <h3>
                                    <a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/georgios_ariadnemaps_com/EQ-vRHYEsBxBqXSuYIxcNHAB_ytO121wl7pydMLv2cL5wQ?e=sOE3nC" className="text-light fs-5"><Icon.Download /> Media Markt Case Study</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box bg-velvet">
                                <h3>
                                    <a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/georgios_ariadnemaps_com/EVu3ePQn-I5Dq-89AKni4GUBVFRPkWlaSXza6Z0_4lPF9Q?e=SwHj1D" className="text-light fs-5"><Icon.Download /> Intersport Case Study</a>
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

export default PeopleCounting;