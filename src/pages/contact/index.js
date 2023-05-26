import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactInfo from '@/components/Contact/ContactInfo';
import GoogleMap from '@/components/Contact/GoogleMap';
import ContactForm from '@/components/Contact/ContactForm';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/contact"])),
      },
    };
  }
 

const Contact = () => {

    const { t } = useTranslation("pages/contact");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/contact' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <ContactInfo />

            <GoogleMap />

            <ContactForm />
           
            <Footer />
        </>
    )
}

export default Contact;