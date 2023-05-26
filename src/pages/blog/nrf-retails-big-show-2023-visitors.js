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
 
const NRF2023 = () => {
    return (
        <>

            <Head>
                <title>
                NRF 2023: Retail's Big Show | People Counting | Heatmap Software
                </title>
                <meta name='description' content='Join Us at NRF 2023: Retails Big Show' />
                <meta property="og:title" content="Ariadne" />
                <meta property="og:description" content="Join Us in NRF 2023: Retail's Big Show" />
                <meta property="og:image" content="https://www.ariadne.inc/images/blog-image/nrf.png"/>
                <meta property="og:url" content="https://www.ariadne.inc/nrf-retails-big-show-2023-visitors"/>

                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/nrf-retails-big-show-2023-visitors'/>

            <Navbar />

            <PageBanner pageTitle="Join Us at NRF 2023: Retail's Big Show" />
            

            <div className="blog-details-area ptb-80 quarter-circle overflow-hidden" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">

                                <div className="article-content">

                                    <img src="/images/blog-image/nrf visitors banner.png" alt="Join Ariadne at NRF 2023" width="100%" />

                                    <p className="lead text-dark"><br/>We are excited to be a part of NRF: Retail's Big Show (January 15th until January 17th in New York City) and showcase our innovative shopper analytics platform that is revolutionizing the retail industry! <a className="text-danger" href="/exhibition-meeting"><u>Book a meeting</u></a> below and visit us at <a className="text-danger" href="https://events.nrf.com/annual2023/public/eventmap.aspx?Mapid=120&shmode=E&MapItBoothID=195737&MapItBooth=1352"><u>Booth #1352</u></a>.</p>
                                    
                                    
                                    <h3 className="pt-4"><a id="resources">Resources for NRF 2023</a></h3>

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

                                    <p className="lead text-dark">Ariadne will be attending NRF 2023 and share the opportunity to gain insights and discuss our latest technological achievements for national and international retailers of all industries. Besides, we are coming with a very special live-demo that already amazed hundreds in other exhibtions. More information: <a href="https://nrfbigshow.nrf.com/company/ariadne-maps"><u className="text-danger">here</u></a>!</p>


                                    
                            
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

export default NRF2023;
