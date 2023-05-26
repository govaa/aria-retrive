import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Newsletter from "@/components/Common/Newsletter"
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const GetStarted = () => {
    return (
        <>

            <Head>
                <title>
                Get Started | People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/get-started' />

            <Navbar />

            <PageBanner pageTitle="Get Started" />

            <div className="main-text-area ptb-80">
                <Newsletter />
            </div>
 
            <Footer />
        </>
    )
}

export default GetStarted;