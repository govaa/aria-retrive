import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import ExhibitionPages from '@/components/Common/ExhibitionPages'; 
import BlogBasicContactForm from '@/components/Contact/BlogBasicContactForm'; 
import * as Icon from 'react-feather';
import BlogVideo from '@/components/Common/BlogVideo'; 
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const Exhibitions = () => {
    return (
        <>

            <Head>
                <title>
                How to Prepare for Exhibitions | People Counting | Heatmap Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/exhibitions' />

            <Navbar />

            <PageBanner pageTitle="How to Prepare for an Exhibition" /> 

            <div className="blog-details-area ptb-80 quarter-circle" style={{position: 'relative'}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">

                                <div className="article-content">

                                    <p className="lead text-dark">Exhibitions can be a great opportunity to showcase your work or products, meet potential clients or partners, and network with others in your industry.</p>

                                    <img src="/images/blog-image/exhibition visual.png" alt="how to prepare for an exhibition" width="100%" />

                                    <p className="lead text-dark"><br/><strong>Ariadne</strong> is the only privacy-compliant smartphone technology solution that passively collects people flow data <strong>without</strong> apps, Wi-Fi, Bluetooth or network connections, and turns them into actionable insights - Plug-and-play technology with award-winning accuracy.</p>
                                    
                                    <p className="lead text-dark">Ariadne helps exhibitors <a className="text-danger" href="/booth-performance-measurement"><u>measure their booth performance</u></a>: number of <span className="text-danger">passers-by, visitors, conversion rate, average time spent, show where people come from, and go to after their visit to their booths</span> and more. Exhibitors measure their return on investment (ROI) on the exhibitions easily with these metrics.</p>

                                    <ExhibitionPages />
                                    
                                    <p className="lead text-dark">Before the booth performance measurement, there are some steps that every exhibitor should follow:</p>
                                    
                                    <blockquote>

                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Plan ahead:</strong></span> Start preparing for the exhibition well in advance. Make a list of what you need to do and set deadlines for each task. This will help you stay organized and ensure that you have enough time to get everything done.</li>
                                    </ul>
                                    </blockquote>

                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Determine your goals:</strong></span> Clearly define what you hope to achieve at the exhibition. This could include making sales, finding new clients, or networking with others in your industry.</li>
                                    </ul>
                                    </blockquote>
                                    
                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Create a budget:</strong></span> Determine how much you can afford to spend on the exhibition, including the cost of a booth, travel, and marketing materials.</li>
                                    </ul>
                                    </blockquote>
                                    
                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Choose the right exhibition:</strong></span> Research different exhibitions to find one that is relevant to your industry and target audience.</li>
                                    </ul>
                                    </blockquote>
                                    
                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Design your booth:</strong></span> Create a visually appealing and professional display that showcases your products or work. Consider using lighting, signage, and display stands to make your booth stand out.</li>
                                    </ul>
                                    </blockquote>
                                    
                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Promote your participation:</strong></span> Use social media, email marketing, and other marketing channels to promote your participation in the exhibition.</li>
                                    </ul>
                                    </blockquote>
                                    
                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Prepare your materials:</strong></span> Gather any materials you will need for the exhibition, including business cards, brochures, product samples, and demos.</li>
                                    </ul>
                                    </blockquote>
                                    
                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Plan for logistics:</strong></span> Make arrangements for transportation, accommodation, and any other logistics you will need for the exhibition.</li>
                                    </ul>
                                    </blockquote>
                                    
                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Practice your pitch:</strong></span> Practice explaining your products or services to potential clients or partners. Be prepared to answer questions and address any concerns they may have.</li>
                                    </ul>
                                    </blockquote>
                                    
                                    <blockquote>
                                    <ul className="features-list lead">
                                    <li><Icon.Check /><span className="text-danger"><strong>Follow up:</strong></span> After the exhibition, make sure to follow up with any leads or contacts you made. This can help you turn exhibition visitors into long-term clients or partners.</li>
                                    </ul>

                                    </blockquote>

                                    <ExhibitionPages />                    

                                    <h3 className="pt-4">Contact Us</h3>

                                    <p className="lead text-dark"> If you would are interested in our solutions, please click <a className="text-danger" href="/letstalk"><u>here to book an appointment</u></a> with us and get a one-month free, or get in contact with us with the form below.</p>

                                    <BlogBasicContactForm />
{/* 
                                    <h3><a id="webinar">Downloads</a></h3>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EYGEmHaUdIdOsugp2jYigc8Bni0ipGdou5hNu5XgRK_qEg?e=RrcELl"><Icon.Download /> Expo Real First Day</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EeygzCID1j1ArGpkFGUPMKwBOWPc25kTCiO8kKAh1L0W_Q?e=e9gRac"><Icon.Download /> Expo Real Final Report</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EcGBPjKkjWZCq579ntk3YBUBBYJgzpV5HixfZDRbIwe-ug?e=inSVgt"><Icon.Download /> Smart City Expo World Congress Report</a></p> */}

                                    <BlogVideo />
                                    
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

export default Exhibitions;