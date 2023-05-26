import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import WebinarRegistration from '@/components/Contact/WebinarRegistration'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const ExhibitionWebinar = () => {
    return (
        <>

            <Head>
                <title>
                Exhibitions Case Study and Unique Insights | People Counting | Heatmap Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/exhibition-case-study' />

            <Navbar />

            <PageBanner pageTitle="Case Study: Unique Insights for Malls/Retailers"/> 

            <div className="blog-details-area pb-80">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">
                                <div className="article-content">

                                    <h1 className="text-center pt-4">Register for our 30-min free webinar!</h1> 
                                    <p className="text-center lead">When: Dec 15, 2022 16:00 (Berlin Time)</p>
                                    <p className="text-center">Invitation link will be sent upon registration.</p>
                                    
                                    <WebinarRegistration />

                                    <h1 className="pt-4">Exhibition Case Study - Digital Transformation of Commercial Real-Estate Through Crowd Analytics</h1> 

                                    <p className="lead pb-4">Leading real estate and retail exhibitions, where the world's top shopping mall developers, operators, and retailers gathered, are over and Ariadne discovered new and unique insights, which are invaluable for malls and retailers.</p> 
                                    
                                    <div className="article-image">
                                        <img src="/images/blog-image/exhibition-heatmap.png" alt="Exhibition Heatmap" width="100%"/>
                                    </div>
 
                                    <p className="lead pt-4">Now we are ready to share some intriguing results:</p>

                                    <blockquote>

                                    <ul className="features-list lead">
                                    <li><Icon.Check />Who were the 5 most popular exhibitors?</li>
                                    <li><Icon.Check />Who were the 5 most engaging exhibitors?</li>                                    <li><Icon.Check />How well presentations and speeches really convert people to the speaker's booths?</li>
                                    </ul>

                                    </blockquote>

                                    <p className="lead pt-4">and some awards and well-deserved recognition for exhibitors and speakers:</p>

                                    <blockquote>

                                    <ul className="features-list lead">
                                    <li><Icon.Check />Which presentations and speakers had the greatest attendance?</li>
                                    <li><Icon.Check />Which presentations had the greatest impact to booth traffic?</li>
                                    </ul>

                                    </blockquote>

                                    <p className="lead pt-4">This, and much more, will be shared by Ariadne's CEO, Dr. Georgios Pipelidis, and Verlin Youd, SVP Americas, both who recently attended many exhibitions recently. Register to attend this 30-minute webinar on 15 December, 16:00 (Germany time) and 10:00am (New York time) and discover more; or directly join here <a href="https://zoom.us/j/93562773601">https://zoom.us/j/93562773601</a>!</p>

                                    <h3 className="pt-4">Add to calendar</h3>
                                    <p><a href="https://zoom.us/webinar/tJcoceuvqTgsGtWb-TRIBBSjCJCmP2U50K-L/calendar/google/add"><Icon.Calendar /> Google Calendar</a></p>
                                    <p><a href="https://zoom.us/webinar/tJcoceuvqTgsGtWb-TRIBBSjCJCmP2U50K-L/ics"><Icon.Calendar /> Outlook Calendar (.ics)</a></p>

                                    <h1 className="text-center pt-80">Register for our 30-min free webinar!</h1> 
                                    <p className="text-center lead">When: Dec 15, 2022 16:00 (Berlin Time)</p>
                                    <p className="text-center">Invitation link will be sent upon registration.</p>
                                    
                                    
                                    <WebinarRegistration />

                                    <div className="article-image">
                                        <img src="/images/blog-image/exhibition areas heatmap.png" alt="Exhibition Areas Heatmap" width="100%"/>
                                    </div>

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

export default ExhibitionWebinar;