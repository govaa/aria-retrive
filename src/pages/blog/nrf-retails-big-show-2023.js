import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
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
                <meta name='description' content='Join Us in NRF 2023: Retails Big Show' />
                <meta property="og:title" content="Ariadne" />
                <meta property="og:description" content="Join Us in NRF 2023: Retail's Big Show" />
                <meta property="og:image" content="https://www.ariadne.inc/images/blog-image/nrf.png"/>
                <meta property="og:url" content="https://www.ariadne.inc/nrf-retails-big-show-2023" />

                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/nrf-retails-big-show-2023' />

            <Navbar />

            <PageBanner pageTitle="Join Us in NRF 2023: Retail's Big Show" />
            

            <div className="blog-details-area ptb-80 quarter-circle overflow-hidden" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">

                                <div className="article-content">

                                    <img src="/images/blog-image/nrf.png" alt="Meet Ariadne at NRF 2023" width="100%" />

                                    <p className="lead text-dark"><br/>We are excited to be a part of NRF: Retail's Big Show (January 15th until January 17th in New York City) and showcase our innovative technology solutions that are revolutionizing the retail industry! Come visit us at <a className="text-danger" href="https://events.nrf.com/annual2023/public/eventmap.aspx?Mapid=120&shmode=E&MapItBoothID=195737&MapItBooth=1352"><u>Booth #1352</u></a> to learn more. In the meantime, check out the resources below we have prepared for you to make the best out of NRF 2023!</p>

                                    <h3 className="pt-4"><a id="resources">Resources</a></h3>
                                    
                                    <ExhibitionPages />

                                    <h3>Measure Your Booth Performance</h3>

                                    <p className="lead text-dark">Ariadne helps exhibitors quantify their return on investment (ROI) on the exhibitions and <a className="text-danger" href="/booth-performance-measurement"><u>measure</u></a> their booth performance.</p>

                                    <blockquote>

                                    <ul className="features-list lead">
                                    <li><Icon.Check />Number of <strong className="text-danger">passers-by</strong></li>
                                    <li><Icon.Check />Number of <strong className="text-danger">visitors</strong></li>                                    
                                    <li><Icon.Check /><strong className="text-danger">Conversion rate</strong></li>
                                    <li><Icon.Check />Average <strong className="text-danger">duration</strong> spent</li>
                                    <li><Icon.Check /><strong className="text-danger">Transitions</strong> (from which booth visitors come to your booth, and to which booth people go after) and more.</li>
                                    </ul>

                                    </blockquote>

                                    <Link href="/booth-performance-measurement">
										<a className="btn btn-primary">Learn More</a>
									</Link>

                                    <h3><br/>Lessons Learned from 100+ Exhibitors</h3>

                                    <p className="lead text-dark">Ariadne team attended many exhibitions over the last few months and had the chance to analyze and create a report for exhibitors/attendees to better prepare for the future exhibitions. The report covers <strong>9 countries, 8+ exhibitions, 100+ Exhibitors, 100 000+ visitors</strong> and reveals insights about:</p>

                                    <blockquote>

                                    <ul className="features-list lead">
                                    <li><Icon.Check />Daily Visitor Trends</li>
                                    <li><Icon.Check />Hourly Visitor Trends</li>
                                    <li><Icon.Check />People Flow in the Exhibitions</li>
                                    <li><Icon.Check />Booth Trends</li>
                                    </ul>

                                    </blockquote>

									<Link href="/prepare-for-exhibitions">
										<a className="btn btn-primary">Learn More</a>
									</Link>

                                    <h3><br/>Meet Ariadne and Experience a Uniqe Live-Demo</h3>

                                    <p className="lead text-dark">Ariadne will be attending NRF 2023 and share the opportunity to gain insights and discuss our latest technological achievements for national and international retailers of all industries. Besides, we are coming with a very special live-demo that already amazed hundreds in other exhibtions. More information: <a href="https://nrfbigshow.nrf.com/company/ariadne-maps"><u>https://nrfbigshow.nrf.com/company/ariadne-maps</u></a> </p>

                                    <p className="lead text-dark">Schedule an appointment and meet us at Booth #1352!</p>

									<Link href="/exhibition-meeting">
										<a className="btn btn-primary">Meet Ariadne</a>
									</Link>

                                    <img className="ptb-80" src="/images/blog-image/exhibition visual.png" alt="Meet Ariadne at NRF 2023" width="100%" />
                                                                        
                                    <ExhibitionPages />                    

                                    <h3 className="pt-4">Measure Your Booth Success for Free</h3>
                                    <p className="pt-3 lead text-dark">Just <strong className="text-danger">send us a message</strong> in the form below and we will be happy to include you in the exhibitors list to measure booth success!</p>

                                    <EmailBoothNumber />
{/* 
                                    <h3><a id="webinar">Downloads</a></h3>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EYGEmHaUdIdOsugp2jYigc8Bni0ipGdou5hNu5XgRK_qEg?e=RrcELl"><Icon.Download /> Expo Real First Day</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EeygzCID1j1ArGpkFGUPMKwBOWPc25kTCiO8kKAh1L0W_Q?e=e9gRac"><Icon.Download /> Expo Real Final Report</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EcGBPjKkjWZCq579ntk3YBUBBYJgzpV5HixfZDRbIwe-ug?e=inSVgt"><Icon.Download /> Smart City Expo World Congress Report</a></p>                                     */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default NRF2023;