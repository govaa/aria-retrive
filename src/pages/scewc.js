import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CalendlyScewc from "@/components/Common/CalendlyExhibition"
import BasicContactForm from "@/components/Contact/BasicContactForm"
import BasicVideoCarousel from "@/components/Common/BasicVideoCarousel"
import Brands from "@/components/Common/Brands"
import Feedback from "@/components/Common/Feedback";
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const LetsTalk = () => {
    return (
        <>

            <Head>
                <title>
                Let's Talk | Smart People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/lets-talk' />

            <Navbar />

            <PageBanner pageTitle="Visit Ariadne in SCEWC" />

            <div className="main-text-area justify-content-center">
 
                {/*<div className="section-title">
                    <h3>Contact us for a free consultation session</h3>
                </div> */}

                <div className="row justify-content-center gx-0">

                    <div className="col-lg-6 col-md-12">
                        <CalendlyScewc />
                    </div>


                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default LetsTalk;