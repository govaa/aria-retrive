import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const BusinessDevRep = () => {
    return (
        <>
            
            <Head>
                <title>
                Business Development Representative | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/careers/business-development-representative' />

            <Navbar />

            <PageBanner pageTitle="Job Details" />

            <div className="features-details-area ptb-80 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Business Development Representative</h3>
                                <h6>Munich, Germany</h6>
                                <p><i>Working student, part-time or full-time</i></p>
                                <p>Ariadne is a Munich based high-tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. Ariadne makes use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their operations.<br /><br />
                                
                                Ariadne values innovative ideas, personality, ambition and an open mind. Different lifestyles and cultural backgrounds are appreciated. Ariadne’s team comes from different nationalities, all working together inclusively and respectfully.</p>

                                <h6>What you will do</h6>

                                <ul className="features-details-list">
                                    <li>Generate and nurture leads through digital/mailing/phone</li>
                                    <li>Lead opportunities of change as they relate to campaign and lead generation gaps</li>
                                    <li>Partner with the Sales and Marketing team to enhance opportunities to deliver incremental revenue</li>
                                    <li>Book discovery meetings through a combination of the classic prospecting techniques like social outreach via LinkedIn, phone or email</li>
                                    <li>Prospect and generate leads in the market</li>
                                    <li>Outreach the leads, book meetings and convert them to customers</li>
                                </ul>

                                <h6 className="pt-4">What you should bring</h6>

                                <ul className="features-details-list">
                                    <li>Currently advancing in your Bachelor or Master’s degree, or a recent graduate</li>
                                    <li>Relevant sales experience preferred, but not essential</li>
                                    <li>Ability to engage with prospects over the phone, email, or LinkedIn</li>
                                    <li>Ambition to build a career in sales with an eye on future growth</li>
                                    <li>Proactive mindset with an ability to think outside the box and enrich the team with new, creative ideas</li>
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

export default BusinessDevRep;