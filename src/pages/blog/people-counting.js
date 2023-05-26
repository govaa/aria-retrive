import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const PeopleCountingBlog = () => {
    return (
        <>

            <Head>
                <title>
                How to Get the Most Out of People Counting | People Counter | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/blog/people-counting' />

            <Navbar />

            <PageBanner pageTitle="How to Get the Most Out of People Counting" /> 

            <div className="blog-details-area ptb-80 quarter-circle overflow-hidden" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/exhibition.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> September 20, 2022
                                            </li>
                                            <li>
                                                <Icon.User /> <a>Hasim Koc</a>
                                            </li>
                                        </ul>
                                    </div>
 
                                    <h1>How to Get the Most Out of People Counting</h1> 

                                    <p>People Counting is a technology that gives physical businesses the ability to track their visitors in real-time. It can be used by retailers, airports, malls, cities… to understand how many people walk past their premises, how long they stay there on average, where they come from and many more cases.</p>

                                    <p>Even though many businesses are already familiar with people counters and have a people counter system, they might not be aware of the full potential it brings along.</p>

                                    <p>In this article, we will discover how to make the best out of people counting solutions and maximize its benefits.</p>

                                    <blockquote>
                                    <h4>Outline</h4>

                                    <ul className="features-list">
                                    <li><Icon.Check />What are different types of People Counters?</li>
                                    <li><Icon.Check />How to Measure & Compare The Success of Events/Campaigns</li>
                                    <li><Icon.Check />How to Schedule Employees Based on People Counting</li>
                                    <li><Icon.Check />How to Adjust Opening/Closing Hours</li>
                                    <li><Icon.Check />How to Calculate Conversion Rate & Why Is It Important</li>
                                    <li><Icon.Check />Switch to Footfall-Based Lease Pricing</li>
                                    <li><Icon.Check />Minimize Queue Time</li>
                                    <li><Icon.Check />What should you look for in a People Counting solution?</li>
                                    <li><Icon.Check />Conclusion</li>
                                    </ul>

                                    </blockquote>
                                    <h3>What are different types of People Counters?</h3>


                                    <p>There are several different types of localization and people counter solutions. Each has its own benefits and drawbacks, but they all have one thing in common: they count the number of people around them, whether it be manually or automatically. The non-exhaustive list is as follows:</p>

                                    <ul className="features-list">
                                        <li><Icon.Check /> Bluetooth Low Energy (BLE) Beacons</li>
                                        <li><Icon.Check /> Ultra-Wideband (UWB)</li>
                                        <li><Icon.Check /> Magnetic Field Based Solutions</li>
                                        <li><Icon.Check /> Wi-Fi Based Solutions</li>
                                        <li><Icon.Check /> Computer Vision Based Solutions</li>
                                        <li><Icon.Check /> IMU-Based Solutions</li>
                                    </ul>

                                    <p>Detailed explanation of these technologies, benefits and drawbacks are already explained <a href="/indoor-challenges"><u>here</u></a>.</p>

                                    <h3>How to Maximize The Benefits of People Counting</h3>

                                    <p>I have gone through a variety of projects from Ariadne to figure out what can be actually done with the visitor counting, and made a list as follows:</p>

                                    <h3>1) How to Measure & Compare The Success of Events/Campaigns</h3>

                                    <p>There are many questions when it comes to event and campaign planning… how to order different events, how often to have an event, which days to choose, start and end hours…</p>


                                    <img src="/images/blog-image/rain-effect.png" alt="image" width="100%" />

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

                                    <p>In Ariadne’s project with City of Traunstein, I have observed that there is a significant 42% decrease in the number of people during the event hours. The reason? It is the rainy weather. It means that if a different day has been chosen for the event, it would attract more people, which would end up as more footfall for the nearby stores and businesses.</p>

                                    <p>Another interesting finding from the same project was the effect of the frequency of the events. This might sound confusing, so let me explain with an example:</p>

                                    <img src="/images/blog-image/event-effect.png" alt="image" width="100%" />

                                    <p><br />Here are 2 different events, 1st event is called Kultsommer Fest. This event occurs 2 times in 3 weeks, in the 1st week and the 3rd week. On the figure above, it is seen that first time when it appeared, it brought 26% more people than average, which is a remarkable. However, next time it occurred, in the 3rd week, it did not bring more footfall, instead there is a 4% decrease compared to the average.</p>

                                    <p>This change might of course be due to the event in between, Weinfest. Weinfest attracted 33% more people than an average day. The reason of the decrease on the 3rd week can also stem from the frequency or the type of the events.</p>

                                    <img src="/images/blog-image/eventfrequency-effect.png" alt="image" width="100%" />

                                    <p><br />To elaborate on the example above, here is another example. The Kultsommer Fest happens over 3 days during the week: Tuesday, Wednesday and Thursday. When I take the averages of these 3 days throughout the month, I see that there is a remarkable 121% increase when the event happens 2nd time in the same week, however when the 3rd time it happens, people lose interest and a 10% decrease is observed.</p>

                                    <p>People Counting also allows you to analyse how well each of your campaigns is performing over time so that if one does not seem effective anymore then it can easily be removed from the system without causing any disruption with othercampaigns running alongside them.</p>

                                    <h3>2) How to Schedule Employees Based on People Counting</h3>

                                    <p>Companies allocate a big budget for the labour resources, thus an optimal use is critical for the best returns. In a business where you welcome big crowds, such as a retailer, airport, or a mall, it makes more sense to allocate employees according to the number of people.</p>

                                    <img src="/images/blog-image/numberofarrivals.png" alt="image" width="100%" />

                                    <p>The figure above from Ariadne’s dashboard shows the number of arrivals by day and hour for a week. The highest number of people is seen on Saturday from 11:00 to 16:00. To convert their visitors into customers and keep the customer satisfaction high, it makes more sense to allocate more staff on this time period. And another strategy would be to schedule less employees for the last hours of the days since the least customers come at that time.</p>
                                    
                                    <p>According to the paper “Customer satisfaction and retail sales performance: an empirical investigation” from Miguel I. Gómez et al., customer satisfaction has a huge effect on sales of retailers. While a small increase in customer satisfaction does not affect much the sales of a top-performing store (0.5 increase in customer satisfaction corresponds to around 0.2 increase in sales/m2), it increases the sales of a low-performing store much more (0.5 percent increase in customer satisfaction increases the sales/m2 by around 3%).</p>
                                    
                                    <p>The results are even more significant in the aviation industry. The study ‘The Impact of Airport Servicescape on Passengers’ Satisfaction’ found that passengers who have a positive airport experience spend 45% more money while in the airport than disappointed passengers.</p>

                                    <p>Praktiker, a client of Ariadne, have shared that they have increased their sales revenue by 3 Million Euros thanks to Ariadne’s employee scheduling solution.</p>

                                    <h3>3) How to Adjust Opening/Closing Hours</h3>

                                    <p>This point is similar to the previous point. If the number of visitors do not justify your costs for keeping your business open, then you might consider opening at a later hour, or closing sooner than your average.</p>

                                    <img src="/images/blog-image/open.jpg" alt="image" width="100%" />

                                    <p><br />The cost for an hour might not be much for a single day, however, it reaches to huge amounts when you factor it for a month or a year.</p>

                                    <h3>4) How to Calculate Conversion Rate & Why Is It Important</h3>

                                    <p>A conversion ratio is the proportion of customers who enter your brick-and-mortar business and leave having bought something. It is calculated by dividing the number of customers by the number of visitors. This means that to calculate the conversion ratio, you need to have a people counting solution, and a ERP software.</p>

                                    <img src="/images/blog-image/erpdashboard.png" alt="image" width="100%" />

                                    <p><br />The above figure is the visualization of conversion ratio from Ariadne’s ERP-integrated dashboard, which shows overall store conversion, comparisons of conversion ratios of products, and comparisons over time.</p>

                                    <p>Conversion ratios help measure the effect of your changes, especially in marketing. For example, for store layout, which model brings the most conversions? Is it grid, herringbone, or geometric layout? This can be answered via comparing the conversion ratios when different layouts are implemented.</p>

                                    <p>Same goes for the product mix: which placement brings in the most conversions, does cross sales increase when products are placed in different locations? </p>

                                    <p>Or when you have promotions or run advertisements? Maybe you bring in more footfall but conversion does not differ as expected. Measuring the number of people, sales and conversion ratios over time helps with these questions.</p>

                                    <h3>5) Switch to Footfall-Based Lease Pricing</h3>

                                    <p>Be it an expo, mall or an airport, the footfall matters more than the size or the location. If you think of an exhibition, booths are rented out according to size. A complete beginner to the expo might fail to get the best for the price he is paying for (since all the booths with the same size are more or less the same price), and be disappointed at the end. A better pricing would be according to the number of passers-by. More passers-by mean more people stopping by the exhibitor, which is also more leads, and eventually more customers for the exhibitor, which is why the exhibitor comes to and pays for the exhibition in the first place.</p>

                                    <img src="/images/blog-image/exhibition.jpg" alt="image" width="100%" />

                                    <p><br />The same scenario happens for other businesses as well: a mall renting out stores for brands, an airport leasing its spaces for the concessionaires, even a supermarket might place the products based on the footfall.</p>

                                    <img src="/images/blog-image/heatmap.png" alt="image" width="100%" />

                                    <p><br />This new leasing type gives a clear understanding, and a strong, fair basis for both the landlord and the tenant. In a mall or exhibition, the tenant can negotiate the lease prices with the landlord based on the footfall, and try to draw it down, or the landlord can prove that the price he/she charges are justified with the number of passers-by. For example, in the figure above, it is seen how each store in the mall compare with each other.</p>

                                    <h3>6) Minimize Queue Time</h3>

                                    <p>Queues cause a big cost for many industries. People complain about the queues in the airports, but it does not get better unfortunately. The cost for the passengers is obvious, but what is the cost to the airport? From Ariadne’s project with Glasgow Airport, it was found that for every minute people are dwelling and not queuing, the airport has an additional $50000 revenue increase per year.</p>

                                    <img src="/images/blog-image/airportqueue.jpg" alt="image" width="100%" />

                                    <p><br />Queues cause a big cost for many industries. People complain about the queues in the airports, but it does not get better unfortunately. The cost for the passengers is obvious, but what is the cost to the airport? From Ariadne’s project with Glasgow Airport, it was found that for every minute people are dwelling and not queuing, the airport has an additional $50000 revenue increase per year.</p>

                                    <img src="/images/blog-image/alerts.png" alt="image" width="100%" />

                                    <p><br />The alerts can be through the communication channel between the employees, it is possible to push alerts through email, Microsoft Teams, WhatsApp, Slack and more.</p>

                                    <h3>What should you look for in a People Counting solution?</h3>

                                    <ul className="features-list">
                                        <li><Icon.Check />Accuracy: How accurate is the data? Is it good enough to count people accurately and consistently most of the time, or do you have to correct for errors all the time?</li>
                                        <li><Icon.Check />Cost: How much will it cost to implement a People Counting solution into your business processes? If your budget isn't unlimited, then ensure that you get the best and the most with people counting with the budget you invest in.</li>
                                        <li><Icon.Check />Privacy Compliance: Is the solution in line with privacy regulations in your country? Does it prove to be anonymous and not violate your visitors' privacy?</li>
                                        <li><Icon.Check />Ease Of Installation And Use: Does it take any special knowledge from an IT expert before installing this particular product, or is it a simple plug-and-play product?</li>
                                    </ul>

                                    <h3>Conclusion</h3>

                                    <p>I have listed some ways to get the best out of people counting solutions. There are of course more ways and use cases which you can use people counting for, however, I hope this guide would be a good start.</p>

                                    <p>Ariadne also offers real-time people counting solutions (among many other advanced solutions) and even have a free version with no hardware. Ariadne’s solutions have been benchmarked many times by its clients and proved to be over 95% accurate. To learn more about this or get one month's demo subscription for free, you can book a meeting with the team <a href="/contact"><u>here</u></a>.</p>

                                </div>

                                {/* <div className="article-footer">
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

export default PeopleCountingBlog;