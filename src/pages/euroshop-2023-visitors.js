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
 
const EuroShop2023 = () => {
    return (
        <>

            <Head>
                <title>
                EuroShop 2023 | People Counting | Heatmap Software
                </title>
                <meta name='description' content='Join Us at EuroShop 2023' />
                <meta property="og:title" content="Ariadne" />
                <meta property="og:description" content="Join Us in EuroShop 2023" />
                <meta property="og:image" content="https://www.ariadne.inc/images/blog-image/crs-banner.jpg"/>
                <meta property="og:url" content="https://www.ariadne.inc/euroshop-2023-visitors"/>

                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/euroshop-2023-visitors'/>

            <Navbar />

            <PageBanner pageTitle="Join Us at EuroShop 2023" />
            

            <div className="blog-details-area ptb-80 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">

                                <div className="article-content">

                                    {/* <h2 className="text-center">Live-Presentation from EuroShop</h2>

                                    <iframe src="https://player.vimeo.com/video/803132519?h=817dd593ee" width="100%" height="500px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                                    <p><br/>Live from the Connected Retail Stage of EuroShop – The World´s No. 1 Retail Trade Fair, our own <strong>Sebastian Deppe</strong>, VP DACH alongside <strong>Sebastian Sprödhuber</strong>, Head of Marketing & E-Commerce at <strong>FREY Unternehmensgruppe</strong>, will be sharing firsthand actual use cases from the adoption of Ariadne’s real-time shopper analytics.</p>

                                    <p><strong>You’ll find out:</strong> How FREY <strong>doubled their sales</strong> from a simple product location change? What’s the <strong>everyday usage from the store personnel</strong> on further driving conversion.</p><br/> */}

                                    <img src="/images/blog-image/Euroshop-banner.png" alt="Join Ariadne at EuroShop 2023" width="100%" />

                                    <p className="lead text-dark"><br/>We are excited to be a part of EuroShop 2023 (February 26 to March 2, 2023 in Düsseldorf) and showcase our innovative shopper analytics platform that is revolutionizing the retail industry! <a className="text-danger" href="/exhibition-meeting"><u>Book a meeting</u></a> below and visit us at <a className="text-danger" href="https://www.euroshop-tradefair.com/floorplan?oid=18852&lang=2&ticket=02219690761828&action=showExhibitor&actionItem=2725914&_event=euroshop2023"><u>Hall 5, Booth: A35</u></a>.</p>
                                    
                                    
                                    <h3 className="pt-4"><a id="resources">Resources for EuroShop 2023</a></h3>

                                    <ExhibitionPages />  

                                    <p className="lead text-dark"><b>Ariadne</b> is the next-generation shopper analytics platform for physical retail stores, providing real-time customer analytics throughout the entire customer journey, from the parking lot to the point of sale. Our SaaS solution provides <span className="text-danger"><strong>award-winning accuracy</strong></span> and <span className="text-danger"><strong>certified GDPR privacy</strong></span>.</p>

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

                                    <p className="lead text-dark">Ariadne will be attending EuroShop 2023 and share the opportunity to gain insights and discuss our latest technological achievements for national and international retailers of all industries. Besides, we are coming with a very special live-demo that already amazed hundreds in other exhibtions. More information: <a href="https://www.euroshop-tradefair.com/vis/v1/en/exhprofiles/MUDzh79yRIWNPk6fBWjKqg?lang_code=en&keep_alive=1&page=vis&ticket=02219690761828"><u className="text-danger">here</u></a>!</p>


                                    
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-text-area justify-content-center overflow-hidden">

                <div className="row justify-content-center gx-0">

                    <CalendlyExhibition />

                </div>

            </div>

            <Footer />
        </>
    )
}

export default EuroShop2023;
