import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
import Link from 'next/link';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const Blog = () => {
    return (
        <>
        
            <Head>
                <title>
                Blog | People Counting Software | Ariadne
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/blog' />

            <Navbar />

            <PageBanner pageTitle="Ariadne Blog" />
 
            <div className="blog-area ptb-80 quarter-circle overflow-hidden" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="blog-image">
                                            <Link href="/blog/shopper-journey">
                                                <a>
                                                    <img src="/images/blog-image/shopper-journey-blog.png" alt="Shopper Journey" height="280vh" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <Icon.Calendar /> Jan 10, 2023
                                            </div>
                                        </div>

                                        <div className="blog-post-content">
                                            <h3>
                                                <Link href="/blog/shopper-journey">
                                                    <a>How to Get 5X Increase in Shopper Visits</a>
                                                </Link>
                                            </h3>

                                            <span>By <a href="/blog/shopper-journey">Stavroula Sarri</a></span>

                                            <p>In today's competitive retail landscape, understanding the behavior and movement patterns of shoppers within a store or shopping center can provide valuable insights for retailers looking to optimize their sales and customer experience. Shopper flow analytics, also known as consumer traffic analysis, is a powerful tool that can help retailers to gain a deeper understanding of how consumers interact...</p>

                                            <Link href="/blog/shopper-journey">
                                                <a className="read-more-btn">
                                                    Read More <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">                                      
                                        <div className="blog-image">
                                            <Link href="/blog/people-counting">
                                                <a>
                                                    <img src="/images/blog-image/exhibition.jpg" alt="image" height="280vh" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <Icon.Calendar /> September 20, 2022
                                            </div>
                                        </div>

                                        <div className="blog-post-content">
                                            <h3>
                                                <Link href="/blog/people-counting">
                                                    <a>How to Get the Most Out of People Counting</a>
                                                </Link>
                                            </h3>

                                            <span>By <a href="/blog/people-counting">Hasim Koc</a></span>

                                            <p>People Counting is the technology that gives physical businesses the ability to track their visitors in real-time. Even though many businesses are already familiar with people counters and have a people counter system, they might not be aware of the full potential it brings along. In this article, we will discover how to make the best out of people counting solutions and maximize its benefits.</p>

                                            <Link href="/blog/people-counting">
                                                <a className="read-more-btn">
                                                    Read More <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="blog-image">
                                            <Link href="/blog/customer-journey-in-winner-store">
                                                <a>
                                                    <img src="/images/blog-image/store.jpg" alt="image" height="280vh" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <Icon.Calendar /> September 13, 2022
                                            </div>
                                        </div>

                                        <div className="blog-post-content">
                                            <h3>
                                                <Link href="/blog/customer-journey-in-winner-store">
                                                    <a>How Can Physical Stores Win Back on The Competition?</a>
                                                </Link>
                                            </h3>

                                            <span>By <a href="/blog/customer-journey-in-winner-store">Hasim Koc</a></span>

                                            <p>E-commerce has challenged the way physical retailers have been operating thus far. Better comprehension of the customer, targeted service and technology has enabled online stores to gain a competitive edge against brick-and-mortar stores. Now the question is… how can the physical stores win back their edge on this competition? This article outlines how the State-Of-The-Art (SOTA) store of 2022 can operate.</p>

                                            <Link href="/blog/customer-journey-in-winner-store">
                                                <a className="read-more-btn">
                                                    Read More <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="blog-image">
                                            <Link href="/blog/redesign-retail-store">
                                                <a>
                                                    <img src="/images/blog-image/redesignyourstore.jpg" alt="image" height="280vh" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <Icon.Calendar /> September 07, 2022
                                            </div>
                                        </div>

                                        <div className="blog-post-content"> 
                                            <h3>
                                                <Link href="/blog/redesign-retail-store">
                                                    <a>8 Data-Driven Steps to Re-Design Your Store</a>
                                                </Link>
                                            </h3>

                                            <span>By <a href="redesign-retail-store">Marketing Team</a></span>

                                            <p>In this digital era of retail stores and E-Commerce, still, 73.4% of the customers prefer to shop in physical retail stores. Hence, It is crucial to design your retail store in the right way to optimize your space, increase customer-product interaction and maximize your sales. In this article, we’ll try to explore the ways and tools through which you can implement to plan the arrangement of your store.</p>

                                            <Link href="/blog/redesign-retail-store">
                                                <a className="read-more-btn">
                                                    Read More <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="blog-image">
                                            <Link href="/blog/indoor-localization-challenges">
                                                <a>
                                                    <img src="/images/blog-image/indoor-challenges.jpg" alt="image" height="280vh" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <Icon.Calendar /> January 26, 2022
                                            </div>
                                        </div>

                                        <div className="blog-post-content"> 
                                            <h3>
                                                <Link href="/blog/indoor-localization-challenges">
                                                    <a>Challenges of Indoor Location-Based Services</a>
                                                </Link>
                                            </h3>

                                            <span>By <a href="redesign-retail-store">Georgios Pipelidis</a></span>

                                            <p>Open challenges and drawbacks of indoor LBS can be organized into three categories, referring to indoor localization challenges, indoor mapping challenges and indoor spatial information modeling challenges. The most critical drawback of indoor localization is the lack of prevailing positioning technology. Every technology has its benefits and drawbacks. Consider the most prevailing technologies...</p>

                                            <Link href="/blog/indoor-localization-challenges">
                                                <a className="read-more-btn">
                                                    Read More <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="blog-image">
                                            <Link href="/blog/anchor-tenants">
                                                <a>
                                                    <img src="/images/blog-image/anchortenants.jpg" alt="image" height="280vh" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <Icon.Calendar /> August 29, 2022
                                            </div>
                                        </div>

                                        <div className="blog-post-content">
                                            <h3>
                                                <Link href="/blog/anchor-tenants">
                                                    <a>Impact of Anchor tenants in a shopping area</a>
                                                </Link>
                                            </h3>

                                            <span>By <a href="/blog/anchor-tenants">Hasim Koc</a></span>

                                            <p>Anchor tenants are critical to the success of a retail shopping centre. They attract customers and generate footfall for the Shopping centre as a whole, and other tenants use this free traffic to convert the visitors into their customers... Anchor tenants also aid in the sales of other retailers, and contribute to the overall success of the retailers in their surrounding area by being a passive actor that drives overall customer engagement.</p>

                                            <Link href="/blog/anchor-tenants">
                                                <a className="read-more-btn">
                                                    Read More <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog-image/blog5.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <Icon.Calendar /> March 17, 2021
                                            </div>
                                        </div>

                                        <div className="blog-post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>I Used The Web For A Day On A 50 MB Budget</a>
                                                </Link>
                                            </h3>

                                            <span>By <a href="#">Smith</a></span>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                            <Link href="/blog-details">
                                                <a className="read-more-btn">
                                                    Read More <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog-image/blog6.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <Icon.Calendar /> March 19, 2021
                                            </div>
                                        </div>

                                        <div className="blog-post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Making Peace With The Feast Or Famine Of Freelancing</a>
                                                </Link>
                                            </h3>

                                            <span>By <a href="#">John</a></span>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                            <Link href="/blog-details">
                                                <a className="read-more-btn">
                                                    Read More <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}
                                
                                {/* Pagination */}
                                {/* <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                                
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
		    </div>

            <Footer />
        </>
    )
}

export default Blog;
