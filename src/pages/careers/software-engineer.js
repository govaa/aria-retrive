import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Head from "next/head";
import { NextSeo } from "next-seo";

const SoftwareEngineer = () => {
    return (
        <>

            <Head>
                <title>
                Software Engineer | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/careers/software-engineer' />

            <Navbar />

            <PageBanner pageTitle="Job Details" />

            <div className="features-details-area ptb-80 quarter-circle" style={{position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Software Engineer</h3>
                                <h6>Munich, Germany</h6>
                                <p><i>Working student, part-time or full-time</i></p>
                                <p>Ariadne is a Munich based high-tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. Ariadne makes use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their operations.<br /><br />
                                
                                Ariadne values innovative ideas, personality, ambition and an open mind. Different lifestyles and cultural backgrounds are appreciated. Ariadne’s team comes from different nationalities, all working together inclusively and respectfully.</p>

                                <h6>What you will do</h6>

                                <ul className="features-details-list">
                                    <li>Design, develop and operate the solutions used by millions of people every day</li>
                                    <li>Big Data and Machine Learning processing pipelines</li>
                                    <li>Data Driven changes to the application</li>
                                    <li>Constantly look for ways to improve our products, code-base and development practices</li>
                                    <li>Write great code and help others write great code</li>
                                </ul>

                                <h6 className="pt-4">What you should bring</h6>

                                <ul className="features-details-list">
                                    <li>Strong coding ability with more than 2 years experience (Focusing on back-end)</li>
                                    <li>Experience or willingness to learn JavaScript/Scala/Spark/Kafka and related technologies (Java, Python, Node.js,C#,.NET, Angular, React)</li>
                                    <li>Able to quickly and effectively read code</li>
                                    <li>Good understanding of algorithms and data structures</li>
                                    <li>Ability to separate hype from reality</li>
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

export default SoftwareEngineer;