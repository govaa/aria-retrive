import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CalendlyExhibition from "@/components/Common/CalendlyExhibition"
import ExhibitionPages from '@/components/Common/ExhibitionPages'; 
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
                Exhibition Live-Demo Meeting | Smart People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/exhibition-meeting' />

            <Navbar />

            <PageBanner pageTitle="Expo Meeting - Live-Demo" />

            <div className="main-text-area justify-content-center">
 
                {/*<div className="section-title">
                    <h3>Contact us for a free consultation session</h3>
                </div> */}

                <div className="row justify-content-center gx-0">

                    <CalendlyExhibition />

                </div>

                <h3 className="pt-5 text-center"><a id="resources">Resources</a></h3>

                <ExhibitionPages />     
            
            </div>
 
            <Footer />
        </>
    )
}

export default LetsTalk;