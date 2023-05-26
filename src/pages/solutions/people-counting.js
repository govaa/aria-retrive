import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Partner from "@/components/Common/Partner";
import PageBanner from '@/components/Common/PageBanner';
import ContactForm from "@/components/Contact/ContactForm"
import Industries from '@/components/Common/Industries';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";

 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/solutions/people-counting"])),
      },
    };
  }
 
const PeopleCounting = () => {

    const { t } = useTranslation("pages/solutions/people-counting");

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
 
            <div className="services-details-area ptb-80 quarter-circle-side" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="services-details">
                            <div className="services-details-desc">

                                <p>{t("text-1")}</p>

                                <div className="text-center ptb-80">
                                    <img 
                                    src="/images/services-details-image/how-it-works.png" 
                                    className="animate__animated animate__fadeInUp" 
                                    alt="How does Ariadne technology work" 
                                    />
                                </div>

                                <p>{t("text-2")}</p>

                                <div className="text-center ptb-80">
                                    <img 
                                    src="/images/services-details-image/competition.png" 
                                    className="animate__animated animate__fadeInUp" 
                                    alt="Ariadne in Competition" 
                                    />
                                </div>

                                <p>{t("text-3")}</p>
                                <p>{t("text-4")}<a href="https://kyushu-u.pure.elsevier.com/en/publications/evaluating-indoor-positioning-systems-in-a-shopping-mall-the-less"><u>{t("text-11")}</u></a>{t("text-12")}</p>
                                <p>{t("text-5")}</p>
                                <p>{t("text-6")}</p>
                                <p>{t("text-7")}</p>
                                <p>{t("text-8")}</p>

                                <div className="text-center ptb-80">
                                    <img 
                                    src="/images/services-details-image/testimonialpraktiker.png" 
                                    className="animate__animated animate__fadeInUp" 
                                    alt="Praktiker Testimonial" 
                                    />
                                </div>

                                <p>{t("text-9")}</p>
                                <p>{t("text-10")}</p>

                            </div>
                        </div>
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