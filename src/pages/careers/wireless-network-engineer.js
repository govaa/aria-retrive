import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";

const WirelessNetworkEngineer = () => {
    return (
        <>

            <Head>
                <title>
                Wireless Network Engineer | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/careers/wireless-network-engineer' />

            <Navbar />

            <PageBanner pageTitle="Job Details" />

            <div className="features-details-area ptb-80 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Wireless Network Engineer</h3>
                                <h6>Munich, Germany</h6>
                                <p><i>Working student, part-time or full-time</i></p>
                                <p>Ariadne is a Munich based high-tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. Ariadne makes use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their operations.<br /><br />
                                
                                Ariadne values innovative ideas, personality, ambition and an open mind. Different lifestyles and cultural backgrounds are appreciated. Ariadne’s team comes from different nationalities, all working together inclusively and respectfully.</p>

                                <h6>What you will do</h6>

                                <ul className="features-details-list">
                                    <li>Requirements analysis of the network infrastructure for new mobile, wireless systems</li>
                                    <li>Development of solution concepts, definition and design of the software architecture</li>
                                    <li>Implementation with C++ in a Linux development environment</li>
                                    <li>Specification of key performance indicators and corresponding system tests for holistic benchmarking and verification of the radio network</li>
                                    <li>Optimization of the solution concepts based on the tested results Development of embedded software</li>
                                </ul>

                                <h6 className="pt-4">What you should bring</h6>

                                <ul className="features-details-list">
                                    <li>Understanding in test-driven and API-driven development methodologies</li>
                                    <li>Strong debugging skills</li>
                                    <li>Deep understanding of algorithm and data structure design</li>
                                    <li>In-depth understanding of software performance and optimization</li>
                                    <li>Experience with large scale code-base and source code repo management</li>
                                    <li>Excellent verbal and written communication skills</li>
                                    <li>Experience working with OS kernel to support parallel computing and emulation</li>
                                </ul>

                                <p className="pt-4">If you think that you are the right person for this position, or if you are uncertain, you can send your resume and cover letter to <a href="mailto:contact@ariadne.inc"><u>contact@ariadne.inc</u></a>.</p>

                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default WirelessNetworkEngineer;