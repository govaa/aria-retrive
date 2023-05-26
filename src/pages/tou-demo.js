import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const PrivacyPolicy = () => {
    return (
        <>
            
            <Head>
                <title>
                Terms of Use | Smart People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/tou-demo' />

            <Navbar />

            <PageBanner pageTitle="Terms of Use" />

            <div className="main-text-area ptb-80">
                <div className="container">

                    <h5>General</h5>

                    <p>Ariadne offers its own and self-developed product, which contains hardware (antenna surveyors) and software for visualizing the results from the service on the base of definable Key Performance Indicators (“KPIs”). </p>

                    <p>Ariadne will provide its Services to other exhibitors during exhibition of interest for free, providing them with the opportunity to measure their booth success by exploring details about their visitors.</p>
                    
                    <h5>Intellectual Property of hardware and software</h5>

                    <p>Ariadne retains ownership of the hardware (with reference to the surveyors) and software (with reference to the dashboard) used to provide the Services for the duration of exhibition of interest. </p>

                    <p>The exhibitors shall use the hardware (the surveyors) and software (the dashboard) in accordance with the purpose of this Agreement for its duration, which is maximum 4 days.</p>

                    <p>Any data Ariadne receives from the exhibitors will only be used for the sake of reporting and analyses by Ariadne.</p>

                    <p>Any anonymized content displayed by, stored on or accessed through Ariadne’s surveyors, as well as all results obtained from Ariadne’s surveyors during the exhibition of interest are the Intellectual Property (IP) of Ariadne, they belong to / will belong to Ariadne during and after the completion of the expo and are protected by Intellectual Property laws.</p>

                    <h5>Duration of the service provided</h5>

                    <p>The services will be provided for the duration of the exhbition of interest, namely from 15 January 2023 until 17 January 2023.</p>

                    <h5>Personal Data and Privacy</h5>

                    <p>Ariadne reassures that it complies exactly with all data protection when providing the Services. Ariadne does not process in any way personal data of exhibition of interest visitors or passengers for the provision of the Services. Any anonymized content displayed by, stored on or accessed through Ariadne’s surveyors, as well as all results obtained from Ariadne’s surveyors during the exhibition of interest will be maintained in strict confidence, using such degree of care as is appropriate to avoid unauthorized access, use or disclosure.<br /></p>

                    <p>For further details you may visit our Privacy Policy Statement on the following link:  https://www.ariadne.inc/privacy-policy/ </p>
                    
                    <h5>Applicable law and Jurisdiction</h5>

                    <p>These Terms of Use and any legal action deriving from Ariadne Services are governed by the laws of Bavaria, Germany and any dispute if not resolved amicably, shall be settled out by the courts of Munich. <br /></p>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default PrivacyPolicy;