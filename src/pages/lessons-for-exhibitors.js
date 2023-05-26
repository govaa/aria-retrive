import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ExpoBasicContactForm from '@/components/Contact/ExpoBasicContactForm'; 
import EmailBoothNumber from '@/components/Contact/EmailBoothNumber'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const LessonsForExhibitors = () => {
    return (
        <>

            <Head>
                <title>
                Lessons for Exhibitors from Exhibitions in 2021 | People Counting | Heatmap Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/lessons-for-exhibitors' />

            <Navbar />

            <PageBanner pageTitle="Lessons for Exhibitors from Exhibitions in 2021" /> 

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <h3 className="text-center pb-4">How to Prepare for Exhibitions in 2022</h3>
                                    <p className="lead">Only a few weeks left to your exhibition, final preparations are being made. Using our <u>experiences and analytics from 2021</u>, we have prepared a small <u>guide to prepare for this year's exhibitions</u>.</p>
                                    <p className="lead">But before, if you haven't signed up to <a href="https://ariadne.inc/booth-performance-measurement" className="text-danger"><u>measure your booth performance</u></a>, you can simply put your email address and booth number below.</p>
                                    <EmailBoothNumber />
                                </div>

                                <div className="article-content">

                                    <h3>1) Get everything done latest by 10:00.</h3>

                                    <img src="/images/blog-image/mapic-peak-arrivals.png" alt="image" width="70%" />

                                    <p className="lead"><br/>Last year the peak number of arrivals happened between 10:00 and 11:00 compared to other hours. It was <span className="text-danger">62% more than the average of the day</span>.</p>

                                    <p className="lead">To not miss the opportunity from the busiest period, exhibitors need to be finished with their setup, and ready to welcome their visitors before 10:00.</p>

                                    <p className="lead">Note: There is also significant number of visitors arriving before 10:00, however, we believe they are mostly exhibitors coming early to prepare.</p>

                                    <h3 className="pt-4">2) Time to power up at 14:00, but not for long.</h3>

                                    <img src="/images/blog-image/mapic-other-arrivals.png" alt="image" width="70%" />

                                    <p className="lead"><br/>At 14:00, there was a <span className="text-danger">32% decrease compared the day average</span>. </p>
                                    
                                    <p className="lead">This might be the best time to eat lunch, refresh and get ready for the second part of the day. Because the next hour, 15:00, there was a <span className="text-danger">60% increase compared to the last hour</span>.</p>

                                    <h3 className="pt-4">3) Expect to get more footfall if you are closer to the speech areas</h3>

                                    <p className="lead">Last year, we have seen that the closer you are to the speech areas (or any anchor area), the more visitors you are likely to get.</p>
                                    
                                    <p className="lead">Booth #4, even though half the size of Booth #3, got more footfall traffic than Booth #3. It is clear that Booth #4 is the closest one to the "Innovation Talks" area. And the number of footfall decreases with the distance to Innovation Talks area increases.</p>

                                    <p className="lead">Let us check if that is really the case. Does Innovation Talks area convert its visitors to nearby booths?</p>

                                    <img src="/images/blog-image/transitions-to-other-booths.png" alt="image" width="70%" />

                                    <p className="lead"><br/>The figure above shows the transitions to other booths from Innovation Talks area. As it can be seen from the figure, the thickest lines are the lines to the Booth #4 and Booth #3. This again proves that proximity to the anchor area brings more footfall traffic, and the booths can get more return from their location.</p>

                                    <h3 className="pt-4">Can I get analytics customized to my booth at my exhibition? Do I need to pay?</h3>

                                    <p className="lead">Yes, and no.</p>
                                    <p className="lead">Indeed we already have a large list of exhibitors that would like to <a href="https://ariadne.inc/booth-performance-measurement" className="text-danger"><u>measure their booth performance</u></a>. If you would like to measure yours for free, simply fill in your booth number and email address below, and we will be happy to add you.</p>

                                    <EmailBoothNumber />

                                    {/* <h3>Downloads</h3>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EYGEmHaUdIdOsugp2jYigc8Bni0ipGdou5hNu5XgRK_qEg?e=RrcELl"><Icon.Download /> Expo Real First Day</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EeygzCID1j1ArGpkFGUPMKwBOWPc25kTCiO8kKAh1L0W_Q?e=e9gRac"><Icon.Download /> Expo Real Final Report</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EcGBPjKkjWZCq579ntk3YBUBBYJgzpV5HixfZDRbIwe-ug?e=inSVgt"><Icon.Download /> Smart City Expo World Congress Report</a></p> */}

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

export default LessonsForExhibitors;