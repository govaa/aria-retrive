import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const DataScientist = () => {
    return (
        <>

            <Head>
                <title>
                Data Scientist | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/careers/data-scientist' />

            <Navbar />

            <PageBanner pageTitle="Job Details" />

            <div className="features-details-area ptb-80 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Data Scientist</h3>
                                <h6>Munich, Germany</h6>
                                <p><i>Working student, part-time or full-time</i></p>
                                <p>Ariadne is a Munich based high-tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. Ariadne makes use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their operations.<br /><br />
                                
                                Ariadne values innovative ideas, personality, ambition and an open mind. Different lifestyles and cultural backgrounds are appreciated. Ariadne’s team comes from different nationalities, all working together inclusively and respectfully.</p>

                                <h6 className="pt-4">What you will do</h6>

                                <ul className="features-details-list">
                                    <li>Transform and prepare data in coordination with our Data Scientists to allow both data exploration as well as data deep dives together with our customers.</li>
                                    <li>Combine the data collected from our devices with data from both internal and external data sources.</li>
                                    <li>Work in an agile, design thinking team – everybody can talk to stakeholders including customers and together we build great products</li>
                                    <li>Contribute end-to-end for data science projects, from data processing, to training, evaluating, to deploying and monitoring</li>
                                    <li>Understand business objectives and translate them into solutions that leverage machine learning</li>
                                    <li>Monitor data quality and work on feature engineering</li>
                                    <li>Contribute to automated model training and inference pipelines</li>
                                    <li>Support the team to define model validation and monitoring strategies</li>
                                    <li>Analyze the shortcomings of existing solutions and iterate on improvements</li>
                                </ul>

                                <h6 className="pt-4">What you should bring</h6>

                                <ul className="features-details-list">
                                    <li>Background in a quantitative field such as computer science, mathematics, economics, statistics, electrical engineering</li>
                                    <li>Proficiency in Python and experience with specialized ML libraries</li>
                                    <li>First-hand experience in deploying, maintaining, and updating models in production</li>
                                    <li>Solid understanding of the benefits and drawbacks of different ML algorithms</li>
                                    <li>Experience working with cloud-platform environments, such as AWS</li>
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

export default DataScientist;