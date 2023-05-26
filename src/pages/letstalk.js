import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Calendly from "@/components/Common/Calendly"
import BasicContactForm from "@/components/Contact/BasicContactForm"
import BasicVideoCarousel from "@/components/Common/BasicVideoCarousel"
import Brands from "@/components/Common/Brands"
import Feedback from "@/components/Common/Feedback";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/letstalk"])),
      },
    };
  }

 
const LetsTalk = () => {

    const { t } = useTranslation("pages/letstalk");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/lets-talk' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <div className="main-text-area justify-content-center">
 
                {/*<div className="section-title">
                    <h3>Contact us for a free consultation session</h3>
                </div> */}

                <div className="row justify-content-center gx-0">

                    <div className="col-lg-6 col-md-12">
                        <BasicContactForm />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <Brands />
                    </div>

                    <div className="section-title mb-0 ptb-80 bg-f9f6f6">
                        <h3 id="requestdemo"><strong>{t("text-1")}</strong></h3>
                    </div>
                    <Calendly />

                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default LetsTalk;