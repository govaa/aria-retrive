import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const Careers = () => {
    return (
        <>
      
            <Head>
                <title>
                Careers | People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/careers' />

            <Navbar />

            <PageBanner pageTitle="Careers" />

            <div className="services-area-two pt-80 pb-50 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="section-title">
                        <h2>Join Us</h2>
                        <div className="bar"></div>
                        <p>Do you want to extend your boundaries? Do you enjoy working in international teams? Ariadne offers a dynamic environment for talented individuals who are excited to innovate and disrupt a huge industry!</p>
                    </div>

                    <div className="row justify-content-center">
                        <h3 className="row justify-content-center pb-50">Technology</h3>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <h3>
                                    <Link href="/careers/data-scientist">
                                        <a><u>Data Scientist</u></a>
                                    </Link>
                                </h3>
                                <p>Contribute end-to-end for data science projects, from data processing, to training, evaluating, to deploying and monitoring, understand business objectives and translate them into solutions that leverage machine learning…</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <h3>
                                    <Link href="/careers/software-engineer">
                                    <a><u>Software Engineer</u></a>
                                    </Link>
                                </h3>
                                <p>Advancing software solutions to support Ariadne's analytics platform and clients, participating in several activities including designing robust and maintainable software and developing analytics models in order to solve complex...</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <h3>
                                    <Link href="/careers/wireless-network-engineer">
                                    <a><u>Wireless Network Engineer</u></a>
                                    </Link>
                                </h3>
                                <p>Building the software architecture for the state of art network simulator for wireless networks, including cellular 4G/5G, WiFi 802.11ac/ax/be, Bluetooth and other emerging technologies, working together with wireless experts and help them model...</p>
                            </div>
                        </div>

                        <h3 className="row justify-content-center pb-50">Business</h3>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <h3>
                                    <Link href="/careers/social-media">
                                        <a><u>Social Media</u></a>
                                    </Link>
                                </h3>
                                <p>Strategize and enable our growth: Ideate, create and launch content related to building our brand and reach. Keep constant track of data and adapt the content in order to improve performance, make organic social a channel for growth…</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <h3>
                                    <Link href="/careers/business-development-representative">
                                    <a><u>Business Development Representative</u></a>
                                    </Link>
                                </h3>
                                <p>Generate and nurture leads through digital/mailing/phone, lead opportunities of change as they relate to campaign and lead generation gaps, partner with the Sales and Marketing team to enhance opportunities to…</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <h3>
                                    <Link href="/careers/junior-key-account-manager">
                                    <a><u>Junior Key Account Manager</u></a>
                                    </Link>
                                </h3>
                                <p>Help to maximize opportunities, manage risk, deliver on profitability goals, develop effective long-term business relationships and exceed customer expectations...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Careers;