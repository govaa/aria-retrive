import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const AnchorTenants = () => {
    return (
        <>

            <Head>
                <title>
                Impact of Anchor Tenants In a Shopping Complex | People Counter | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/blog/anchor-tenants' />

            <Navbar />

            <PageBanner pageTitle="Impact of Anchor Tenants in a shopping complex" /> 

            <div className="blog-details-area ptb-80 overflow-hidden quarter-circle" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/anchortenants.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> August 29, 2022
                                            </li>
                                            <li>
                                                <Icon.User /> <a>Hasim Koc</a>
                                            </li>
                                        </ul>
                                    </div>
 
                                    <h1>Impact of Anchor Tenants in a shopping complex</h1> 

                                    <p>Anchor tenants are critical to the success of a retail shopping centre. They attract customers and generate footfall for the Shopping centre as a whole, and other tenants use this free traffic to convert the visitors into their customers.</p>

                                    <blockquote>
                                    <h4>Outline</h4>

                                    <ul className="features-list">
                                    <li><Icon.Check />What is an anchor tenant?</li>
                                    <li><Icon.Check />Are you really my anchor tenant?</li>
                                    <li><Icon.Check />Is it Important to have an Anchor tenant around you?</li>
                                    <li><Icon.Check />How do you measure the Pie shared by you and the Anchor tenant?</li>
                                    <li><Icon.Check />Does the distance to the anchor tenant matter for other tenants?</li>
                                    <li><Icon.Check />Tracking the performance of anchor tenants</li>
                                    <li><Icon.Check />Conclusion</li>
                                    </ul>

                                    </blockquote>

                                    <h3>What is an anchor tenant?</h3>

                                    <p><strong><u>Do you know that a grocery store not only brings visitors to its own but also helps bring audiences to the nearby stores?</u></strong>For example, if Aldi moves into your centre, it will attract other retailers to open stores in your complex as people shop at Aldi for their essential needs and visit nearby stores for casual shopping. Here, Aldi acts as an anchor tenant that not just attracts customers to its own but also the nearby shops, increasing the overall sales of the shopping area.</p>

                                    <p>An anchor tenant is a leading, large retailer that has signed an agreement to lease a significant space, mostly in a shopping mall, but also in any given airport, complex, or neighborhood. The term "anchor" comes from the idea that an anchor will keep ships from drifting due to their size and weight.</p>

                                    <p>Anchor tenants also aid in the sales of other retailers, and contribute to the overall success of the retailers in their surrounding area by being a passive actor that drives overall customer engagement.</p>

                                    <h3>Are you really my anchor tenant?</h3>

                                    <p>My first question was…<strong><u> who is really the anchor tenant?</u></strong> To answer that, I went through a sample of shoping centers to detect their anchor tenants, detect who actually brings in the most traffic. In the figure below, I have visualized which sectors the anchor tenants belong to.</p>

                                    <img src="/images/blog-image/anchortenantsaveragetraffic.jpg" alt="image" width="100%" />


                                    <p><br />The results were quite interesting! On Average, 23% of the shops in a shopping area are Anchor tenants, which includes Grocery stores, DIY, and small shops like the post offices, ATMs, Kiosk and Cigarette shops. Out of all the Anchor tenants,<strong> <u>60% of them are Grocery stores</u></strong> and they are the primary footfall generators for the shopping centers. However, we must remember that they also occupy the largest space in their complex.</p>


                                    <img src="/images/blog-image/categoryofshops.jpg" alt="image" width="100%" />

                                    {/* <ul className="block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog8.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog7.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog9.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul> */}

                                    <p><br />What surprised me even more was that an anchor tenant does not have to be necessarily large or expensive, even a <strong><u>small post office</u></strong> might bring more traffic than all the other shops in a mall and<strong><u> redirect their customer flow to other stores</u></strong>.</p>

                                    <h3>Is it Important to have an Anchor tenant around you?</h3>

                                    <p>My next step was to investigate if the anchor tenants really deserve the privilege of having<strong><u> big space and low rent</u></strong>. To measure this, I compared the average visitation of an anchor tenant against the other retail stores.</p>

                                    <img src="/images/blog-image/averagenumberofvisitorsperstore.jpg" alt="image" width="100%" />

                                    <p><br /><strong><u>An Anchor tenant attracts around 5 times more visitors</u></strong> than an average store in a shopping mall. This might be one good reason to have a more flexible leasing contract for an anchor tenant.</p>

                                    <h3>How do you measure the Pie shared by you and the Anchor tenant?</h3>

                                    <p>But do they actually help the other stores get more visitors? This is a very difficult question to answer, since it is hard to quantify how many of their customers actually go to other shops after their visit. To answer that, I got help from <strong><u>Ariadne Analytics</u></strong>, just <strong><u>exported their dashboard with a simple click</u></strong>.</p>

                                    <img src="/images/blog-image/anchortenantconversion.jpg" alt="image" width="100%" />

                                    <p><br /><strong><u>Anchor tenants, on average, help to convert more than a quarter of their customers to other stores in a shopping mall</u></strong>. This is because <strong><u>anchor tenants get approximately 5 times more footfall than the other stores.</u></strong> 25% makes up a huge crowd, which justifies the fact that the Anchor tenants carry  the other stores along with their success.</p>

                                    <p><strong><u>Anchor tenants, on average, convert more than a quarter of their customers to other stores in the mall.</u></strong> Considering the fact that <strong><u>anchor tenants get footfall around 6 times of an average store</u></strong>, 26% makes up a big number, which justifies the fact that they actually carry the other stores along with their success.</p>

                                    <img src="/images/blog-image/averagedwelltimeinminutes.jpg" alt="image" width="100%" />

                                    <p><br />Another interesting finding is that anchor tenants are performing better than an average tenant in terms of the dwell time (Dwell time is the time a customer spends inside the store). They have 16% more dwell time than the other shops in a shopping center.</p>


                                    <h3>Does the distance to the anchor tenant matter for other tenants?</h3>

                                    <p>As a manager of a shop, one might want to have a different pricing strategy based on proximity to the anchor tenant. In this case, you will have to justify your decision, <strong><u>does it give a higher return for a tenant when it is closer to the anchor tenant?</u></strong> To answer that question, I have looked at the chart in Ariadne Analytics which is shared below.</p>

                                    <img src="/images/blog-image/conversionratetodistance.jpg" alt="image" width="100%" />

                                    <p><br />Anchor tenants convert the most visitors from all the visitors in the mall. On average, they convert over 40% of the total number visitors in a shopping center. But does being close to the anchor tenants also help share their success? <strong><u>Yes, it is,</u></strong> if you are right next to the anchor tenant, then you can expect around 10% conversion, if you are 2 shops away, then the average conversion drops to slightly above 5%. The conversion rate from anchor tenants diminishes when they move farther from the anchor tenant.</p>

                                    <p>Hence, the shop's distance from the anchor tenant matters. <strong><u>The closer you are, the more conversion you have</u></strong>.</p>

                                    <h3>Tracking the performance of anchor tenants</h3>

                                    <p>The anchor tenants deserve privileges and special prices in their contracts keeping in mind the above findings. They bring in a significant number of customers, they benefit the mall owner, maintain a high occupancy rate and also convert customers for the other tenants.</p>

                                    <p>However, <strong><u>However, can they always keep their success? Would another anchor tenant bring more success? Can you do A/B testing to choose the best anchor tenant fit for your complex?</u></strong></p>

                                    <p>Ariadne has developed <strong><u>innovative technology to support commercial real estate</u></strong> with this question. It tracks the customer's journey with its <strong><u>anonymous phone signal tracking technology</u></strong> that helps managers in their decision-making.</p>

                                    <img src="/images/blog-image/screens.jpg" alt="image" width="100%" />

                                    <p><br />Ariadne's customers have benchmarked its technology and found that it has over <strong><u>95% accuracy while still being anonymous</u></strong> and privacy compliant. With these real-time analytics, retailers and managers can indeed see if the anchor tenant always brings the amount of footfall over a threshold. Not only that but also, they can see where these customers visit after the anchor tenant, thus <strong><u>exploiting the cross-sales opportunities</u></strong>.</p>

                                    <p>In marketing, <strong><u>A/B testing</u></strong> is a technique to compare two different strategies to see which performs better. In our case, it is to have 2 anchor tenants and compare their success and find out the better performing one. This strategy is not only used for the anchor tenants but can also be implemented <strong><u>to design the whole mall layout</u></strong> optimally. To have the analytics and support for this decision-making, you will need to have a solution on your premises.</p>

                                    <h3>Conclusion</h3>

                                    <p><strong><u>Anchor tenants are the key to a thriving shopping center</u></strong>. They not only provide shoppers with more options but also increase foot traffic in the area, attracting other retailers to open stores nearby. Anchor tenants also have a lot of power over their leases - so if they're unhappy about something like rent prices or store space - that can affect your bottom line. In addition, anchor tenants may have special needs that require extra investment from landlords before they move in such as renovations or building upgrades (such as installing escalators).</p>

                                    <p>Anchor tenants are critical to the success of a retail center. They can help make your shopping center a destination, drawing customers from across town and supporting other retailers in the center. Anchor tenants also bring unique offerings that may not be available anywhere else in your community, making them a vital part of your tenant mix.</p>

                                    <p><strong><u>The importance of anchor tenants cannot be overstated;</u></strong> they play an essential role in attracting customers and helping other retailers succeed at your shopping center or mall.</p>

                                    <p>Do you want to track and analyze your audiences accurately in real-time without violating GDPR? Click <a href="/contact"><u>here</u></a> to book an appointment with us and get a one-month free subscription.</p>

                                </div>
{/* 
                                <div className="article-footer">
                                    <div className="article-tags">
                                        <a href="#">Fashion</a>
                                        <a href="#">Smart</a>
                                        <a href="#">Marketing</a>
                                        <a href="#">Games</a>
                                        <a href="#">Travel</a>
                                    </div>
                                </div>

                                <div className="ariadne-post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <a href="#">
                                                <span className="image-prev">
                                                    <img src="/images/blog-image/blog2.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>
            
                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">Don't buy a tech gift until you read these rules</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">January 21, 2021</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
            
                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="#">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">The golden rule of buying a phone as a gift</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">January 21, 2021</span>
                                                    </span>
                                                </span>
            
                                                <span className="image-next">
                                                    <img src="/images/blog-image/blog3.jpg" alt="image" />
                                                    <span className="post-nav-title">Next</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>

                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked 
                                                <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" cols="45" rows="5" maxLength="65525" required="required"></textarea>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" name="url" />
                                            </p>
                                            <p className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                                <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post Comment" />
                                            </p>
                                        </form>
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

export default AnchorTenants;