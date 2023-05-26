import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";

const JunKeyAccMan = () => {
    return (
        <>

            <Head>
                <title>
                Junior Key Account Manager | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/careers/junior-key-account-manager' />

            <Navbar />

            <PageBanner pageTitle="Job Details" />

            <div className="features-details-area ptb-80 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Junior Key Account Manager</h3>
                                <h6>Munich, Germany</h6>
                                <p><i>Working student, part-time or full-time</i></p>
                                <p>Ariadne is a Munich based high-tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. Ariadne makes use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their operations.<br /><br />
                                
                                Ariadne values innovative ideas, personality, ambition and an open mind. Different lifestyles and cultural backgrounds are appreciated. Ariadne’s team comes from different nationalities, all working together inclusively and respectfully.</p>

                                <h6>What you will do</h6>

                                <ul className="features-details-list">
                                    <li>You will contribute in developing innovative sales and marketing led account plans that will maximise Spin Master’s performance within each account</li>
                                    <li>Work closely with accounts to gain joint agreement on objectives for sales growth whilst managing each account selections process</li>
                                    <li>Deliver product presentations, business proposals and ad plans to customers on time</li>
                                    <li>Understand the customer timelines and proactively provide customers with all information and materials required to make decisions and manage business effectively</li>
                                    <li>Prospect and generate leads in the market</li>
                                    <li>Communicate clearly and efficiently with customers; and provide fast solutions to challenges</li>
                                </ul>

                                <h6 className="pt-4">What you should bring</h6>

                                <ul className="features-details-list">
                                    <li>Demonstrated success managing a business portfolio</li>
                                    <li>Customer driven approach and a “go-getter” attitude</li>
                                    <li>Ability to build and maintain relationships, both externally and internally</li>
                                    <li>Demonstrated organization, planning and communication skills</li>
                                    <li>Goal oriented to achieve targets through self-motivation, persistence & determination</li>
                                    <li>Fluency in English (German would be an advantage)</li>
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

export default JunKeyAccMan;