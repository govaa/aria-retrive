import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import CalendlyExhibition from "@/components/Common/CalendlyExhibition"
import PageBanner from '@/components/Common/PageBanner';
import ExhibitionPages from '@/components/Common/ExhibitionPages'; 
import EmailBoothNumber from '@/components/Contact/EmailBoothNumber'; 
import * as Icon from 'react-feather';
import BlogVideo from '@/components/Common/BlogVideo'; 
import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from 'next/link';
 
const Pte = () => {
    return (
        <>

            <Head>
                <title>
                Passenger Terminal Expo 2023 | People Counting | Heatmap Software
                </title>
                <meta name='description' content='Join Us at Passenger Terminal Expo 2023' />
                <meta property="og:title" content="Ariadne" />
                <meta property="og:description" content="Join Us in Passenger Terminal Expo 2023" />
                <meta property="og:image" content="https://www.ariadne.inc/images/blog-image/airport-heatmap.png"/>
                <meta property="og:url" content="https://www.ariadne.inc/passenger-terminal-expo-2023"/>

                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/passenger-terminal-expo-2023'/>

            <Navbar />

            <PageBanner pageTitle="Join Ariadne at PTE 2023" pageSubtitle="RAI, Amsterdam - 14-16 March" />
            

            <div className="blog-details-area ptb-80 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">

                                <div className="article-content">

                                    {/* <img src="/images/blog-image/Euroshop-banner.png" alt="Join Ariadne at EuroShop 2023" width="100%" /> */}

                                    <p className="fs-4">Ariadne is excited to showcase at the upcoming Passenger Terminal Expo 2023 (14 - 16 March), the leading exhibition for airports to discover latest technologies revolutionizing the industry. Join us and discover the passenger flow trends worldwide from Ariadne's projects with leading airports. Book a meeting below and visit us at Booth 2408!</p>
                                    
                                    <h3><a className="text-orca" href="#resources"><u>Meet Ariadne @ Passenger Terminal Expo 2023</u></a></h3>

                                    {/* <p className="fs-4">Ariadne is a top-tier location intelligence company that delivers the highest level of accuracy while respecting privacy. In addition to analyzing passenger flow, Ariadne's cutting-edge AI technologies enable airports to communicate with visitors and employees through push notifications, taking location intelligence to the next level.</p> */}
                                    
                                    <p className="fs-4">At this exhibition, Ariadne will go beyond showcasing its solutions and services. Visitors and exhibitors will be able to experience an interactive live-demo, and also access a variety of resources below to ensure they get the best out of their time and resources during Passenger Terminal Expo.</p>

                                    <div className="text-center">
                                        <img src="/images/blog-image/airport-heatmap.gif" width="70%" alt="Airport Heatmap" />
                                    </div>
                                    


                                    {/* <ExhibitionPages />   */}
                                    
                                    {/* <p className="lead text-dark"><b>Ariadne</b> is the next-generation shopper analytics platform for physical retail stores, providing real-time customer analytics throughout the entire customer journey, from the parking lot to the point of sale. Our SaaS solution provides <span className="text-danger"><strong>award-winning accuracy</strong></span> and <span className="text-danger"><strong>certified GDPR privacy</strong></span>.</p> */}

                                    <h1 className="pb-4">Resources</h1>



                <div className="container">
                    <div className="row align-items-center pb-80">

                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/blog-image/crowdedbooth.jpeg" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc px-4">
                                <h3>Experience Interactive Live-Demo</h3>
                                    
                                <p className="fs-5">Discover first-hand the passenger experience in an Ariadne-powered airport demo where you can communicate with your passengers in real-time and analyze passenger flow simultaneously. Get ready to immerse yourself in an experience like no other, where you'll witness the future of airport management.</p>

                            </div>
                        </div>


                    </div>

                    <div className="separate"></div>

                    


                    <div className="row align-items-center">

                    <div className="separate"></div>

                    <div className="col-lg-6 services-details">
                        <div className="services-details-desc px-4">
                            <h3>Lessons Learned From 100K+ Visitors (+Webinar)</h3>
                                
                            <p className="fs-5">Ariadne has been to many exhibitions over the last year and had the chance to analyze and create a report for exhibitors/attendees to better prepare for the future exhibitions.</p>

                            <Link href="/prepare-for-exhibitions">
								<a className="btn btn-primary mb-3">Learn More</a>
                            </Link>

                        </div>
                    </div>

                    <div className="col-lg-6 services-details-image">
                        <img 
                            src="/images/blog-image/exhibition.jpg" 
                            className="animate__animated animate__fadeInUp" 
                            alt="image" 
                        />
                    </div>

                    </div>

                </div>

                <div className="row justify-content-center">
                    <h2 className="row justify-content-center pb-50 pt-80">Reinventing Passenger Journey</h2>
                    <p className="fs-5">Ariadne's next-generation <strong>passenger analytics</strong> platform provides <strong>real-time people flow insights</strong>, throughout the entire passenger journey from curb to gate. Without cameras and via passive signal based tracking, we deliver exceptional accuracy, <strong>GDPR certified</strong>, and it can transform into an omnichannel <strong>marketing</strong> and <strong>navigation</strong> tool once passengers opt-in.</p>

                    <blockquote>
                        <h4>How leading airports are making even more than $54K/minute:</h4>

                        <ul className="features-list">
                        <li className="fs-5"><Icon.Check /><strong>Real-time</strong> data and insights on <strong>passenger flows</strong> from curb to gate</li>
                        <li className="fs-5"><Icon.Check /><strong>Push notifications</strong> to keep passengers informed (e.g. delays) and manage queues</li>                                    
                        <li className="fs-5"><Icon.Check />Targeted <strong>employee scheduling</strong> with alerts</li>
                        <li className="fs-5"><Icon.Check />Promotional messages to <strong>increase concessionaires' sales</strong></li>
                        <li className="fs-5"><Icon.Check /><strong>Data-driven lease pricing</strong> based on footfall traffic and location analysis</li>
                        </ul>
                    </blockquote>

                </div>

                                    <div className="row justify-content-center">
                                        <h2 className="row justify-content-center pb-50 pt-80">What Sets Us Apart</h2>
                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/no-cameras.png" alt="Ariadne does not require cameras." />

                                                <div className="content">
                                                    <h3>
                                                        <span>No Cameras</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/no-apps.png" alt="Ariadne does not require apps." />

                                                <div className="content">
                                                    <h3>
                                                        <span>No App Downloads</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/no-beacons.png" alt="Ariadne does not require cameras." />

                                                <div className="content">
                                                    <h3>
                                                        <span>No Beacons Required</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center pt-80"></div>

                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/accuracy-usa.png" alt="Ariadne is up to 1 foot accurate." />

                                                <div className="content">
                                                    <h3>
                                                        <span>Up to 1 foot accuracy</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/plug-and-play.png" alt="Ariadne offers a no infrastructure, plug-and-play solution." />

                                                <div className="content">
                                                    <h3>
                                                        <span>Plug-and-play Solution</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/conversion-funnel.png" alt="Conversion by store, department, display, endcap" />

                                                <div className="content">
                                                    <h3>
                                                        <span>Conversion by store, display...</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <h3><br/>Meet Ariadne and Experience a Uniqe Live-Demo</h3>

                                    <p className="lead text-dark">Ariadne is a top-tier location intelligence company that delivers the highest level of accuracy while respecting privacy. In addition to analyzing passenger flow, Ariadne's cutting-edge AI technologies enable airports to communicate with visitors and employees through push notifications, taking location intelligence to the next level. Ariadne will be attending Passenger Terminal Expo 2023 and share the opportunity to gain insights and discuss our latest technological achievements for national and international airports. Besides, we are coming with a very special live-demo that already amazed hundreds in other exhibitions.</p>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-text-area justify-content-center overflow-hidden">

                <div className="row justify-content-center gx-0" id="resources">

                    <CalendlyExhibition />

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Pte;
