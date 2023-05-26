import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactForm from './../components/FAQ/ContactForm';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import ContactFormSubstitute from '@/components/Contact/ContactForm'
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/faq"])),
      },
    };
  }
   
 
const Faq = () => {

    const { t } = useTranslation("pages/faq");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/faq' />
            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <div className="faq-area ptb-80">
                <div className="container">
                    <h2 className="row justify-content-center pb-50">{t("text-1")}</h2>
                    <div className="faq-accordion">
                        <Accordion preExpanded={['b']}>
                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-2")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-3")}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-4")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-5")}<a href="https://www.youtube.com/watch?v=COf2cQf5n_U&ab_channel=AriadneMapsGmbH"><u>{t("text-6")}</u></a>.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="d">
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


                            <AccordionItem uuid="e">
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

                            <AccordionItem uuid="h">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-11")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-12")}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="i">
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
                        </Accordion>
                    </div>

                    <h2 className="row justify-content-center ptb-80">{t("text-15")}</h2>
                    <div className="faq-accordion">
                        <Accordion preExpanded={['a']}>
                        <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-16")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-17")}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="j">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-18")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-19")}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-20")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-21")}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="g">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-22")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-23")}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="k">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-24")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-25")} 
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="l">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        {t("text-26")}
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    {t("text-27")}<a href="/data-lifecycle"><u>{t("text-28")}</u></a>{t("text-29")}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* ContactForm */}
                    {/* <ContactForm /> */}
                    <ContactFormSubstitute />
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Faq;