import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import PricingStyleOne from '@/components/PricingPlans/PricingStyleOne';
// import PricingStyleTwo from '@/components/PricingPlans/PricingStyleTwo';
// import PricingStyleFour from '@/components/PricingPlans/PricingStyleFour'; 
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const Pricing = () => {
    return (
        <>
   
            <Head>
                <title>
                Pricing | Smart People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/pricing' />

            <Navbar />

            <PageBanner pageTitle="Pricing" />

            <PricingStyleOne />

            <Footer />
        </>
    )
}

export default Pricing;