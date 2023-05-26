import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";

const SocialMedia = () => {
    return (
        <>
            
            <Head>
                <title>
                Social Media Manager | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/careers/social-media' />
            
            <Navbar />

            <PageBanner pageTitle="Job Details" />

            <div className="features-details-area ptb-80 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Social Media</h3>
                                <h6>Munich, Germany</h6>
                                <p><i>Working student or part-time</i></p>
                                <p>Ariadne is a Munich based high-tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. Ariadne makes use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their operations.<br /><br />
                                
                                Ariadne values innovative ideas, personality, ambition and an open mind. Different lifestyles and cultural backgrounds are appreciated. Ariadne’s team comes from different nationalities, all working together inclusively and respectfully.</p>

                                <h6>What you will do</h6>

                                <ul className="features-details-list">
                                    <li>Create, plan and publish content on our digital channels</li>
                                    <li>Support global social media management, including posts creation, planning and running ad campaigns</li>
                                    <li>Optimize content and digital processes by using insights from web & social analytics to drive engagement, visitors and channel growth</li>
                                    <li>Interact and support other functional groups and key vendors</li>
                                    <li>Support planning of digital advertising based on performances and key objectives</li>
                                    <li>Deliver a brand consistent look and feel throughout all digital channels ensuring that they adhere to content strategy, messaging, tone and style</li>
                                    <li>Contribute to automated model training and inference pipelines</li>
                                    <li>Support the team to define model validation and monitoring strategies</li>
                                    <li>Analyze the shortcomings of existing solutions and iterate on improvements</li>
                                </ul>

                                <h6 className="pt-4">What you should bring</h6>

                                <ul className="features-details-list">
                                    <li>Copywriting skills and demonstrated creativity and able to provide examples of social media management (links to profiles as examples)</li>
                                    <li>Ability to manage multiple projects simultaneously and set priorities</li>
                                    <li>Advanced project management skills, efficient organizational abilities to meet timeframe deadlines</li>
                                    <li>Strong research skills, problem solving and analytical ability</li>
                                    <li>High attention to detail and excellent time management skills</li>
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

export default SocialMedia;