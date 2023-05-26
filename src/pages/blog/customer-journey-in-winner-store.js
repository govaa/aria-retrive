import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const CustomerJourneyInWinnerStore = () => {
    return (
        <>

            <Head>
                <title>
                How Can Physical Stores Win Back on The Competition? | People Counter | People Counting Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/blog/customer-journey-in-a-winner-store' />

            <Navbar />

            <PageBanner pageTitle="How Can Physical Stores Win Back on The Competition?" /> 

            <div className="blog-details-area ptb-80 quarter-circle overflow-hidden" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/store.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> September 13, 2022
                                            </li>
                                            <li>
                                                <Icon.User /> <a>Hasim Koc</a>
                                            </li>
                                        </ul>
                                    </div>
 
                                    <h1>How Can Physical Stores Win Back on The Competition?</h1> 

                                    <p>E-commerce has challenged the way physical retailers have been operating thus far. Better comprehension of the customer, targeted service and technology has enabled online stores to gain a competitive edge against brick-and-mortar stores. Now the question is… how can the physical stores win back their edge on this competition?</p>

                                    <p>In this article, I have gone through the retail (localization) technologies of today, and outlined how the State-Of-The-Art (SOTA) store of 2022 can operate in a simple scenario.</p>

                                    <blockquote>
                                    <h4>Outline</h4>

                                    <ul className="features-list">
                                    <li><Icon.Check />How does e-commerce compare to brick-and-mortar?</li>
                                    <li><Icon.Check />What gives an edge to e-commerce?</li>
                                    <li><Icon.Check />Customer journey in a winner store</li>
                                    <li><Icon.Check />How to adjust opening/closing hours</li>
                                    <li><Icon.Check />Customer journey on the manager's screen</li>
                                    <li><Icon.Check />Combination of e-commerce and physical retail</li>
                                    <li><Icon.Check />All-in-one solution to to become the winner store</li>
                                    <li><Icon.Check />The state-of-the-art store</li>
                                    </ul>

                                    </blockquote>
                                    <h3>How does e-commerce compare to brick-and-mortar?</h3>

                                    <p>Brick-and-mortar and E-commerce have been fighting for consumers' attention and dollars for many years. One might think that e-commerce is already the leader of retail sales, but this is way far from the truth, with brick-and-mortar sales accounting for 94% of the total retail sales.</p>

                                    <p>However, it's unfair to compare online sales with brick-and-mortar sales due to the age factor. E-commerce is still a relatively new business, and with the rate of growth it has demonstrated in recent years, this statistic may soon change.</p>

                                    <h3>What gives an edge to e-commerce?</h3>

                                    <p>We cannot ignore various advantages that e-commerce has brought that haven't been possible before. Just one click, and your order is at your door the next day (if not the same day). This is indeed the number one reason why people prefer shopping online - (free) delivery.</p>

                                    <p>Other key reasons include the ability to use coupons and apply discounts (41 percent), read other customers' reviews (35 percent), easily return purchased items (33 percent), and a quick checkout process (30 percent) (Globalwebindex.com).</p>


                                    <img src="/images/blog-image/topreasonspeopleshoponline.jpg" alt="image" width="100%" />

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

                                    <p>In Ariadne's project with City of Traunstein, I have observed that there is a significant 42% decrease in the number of people during the event hours. The reason? It is the rainy weather. It means that if a different day has been chosen for the event, it would attract more people, which would end up as more footfall for the nearby stores and businesses.</p>

                                    <p>Another interesting finding from the same project was the effect of the frequency of the events. This might sound confusing, so let me explain with an example:</p>

                                    <img src="/images/blog-image/event-effect.png" alt="image" width="100%" />

                                    <p><br />There are two sides to the success of e-commerce. One side is the advantages above, that comes with the nature of online sales. Other side is the ability to track visitors' behaviours and understand the customers. For instance, how many people land on the product webpage, how much time they spend, what actions/clicks they previously and subsequently take and so on… Having this data, online businesses are able to change their layout, optimize their online marketplaces and better serve customers' needs, which leads to gaining more website traffic and sales.</p>

                                    <img src="/images/blog-image/ganalytics.jpg" alt="image" width="100%" />

                                    <p>If the brick-and-mortar businesses bring these advantages of e-commerce into their stores, or let's say, combine them with their existing services, can they heat up the competition? Or first… can they actually bring these to the stores?</p>

                                    <p>Let's consider a scenario.</p>

                                    <h3>Customer journey in a winner store</h3>

                                    <p>A beautiful Saturday morning, after a family brunch, you decide to go to a furniture store to buy a TV unit for your living room. You take your phone and check the store, and see that there are 184 people currently inside (1). Hmm… not bad you think, we can have a nice time there, and hopefully have no queue at the checkout.</p>

                                    <p>You arrive at the store, see the empty parking slots in your phone (2) and navigate to the closest available slot (3).</p>

                                    <p>As usual, you leave your car and head to the gate, and the heat of the store welcomes you inside. Not just the heat, but a notification on your phone: “Thank you for your visit, enjoy our 15% discount gift in our restaurant” (4). You pass through the mattresses, then sofas before the TV units. A sofa draws your attention and you start looking into it. It looks great but you are not sure about some aspects, so you take out your phone and see your location in the store (5). Next to your location, you also see the sofa icon and click it on the map, 4.8 stars, 56 reviews (6)… hmm, not bad. You scroll down and read some reviews about people's experiences, now you want to buy the sofa but need answers to a few questions before finally deciding. Right when you need some assistance, a store associate approaches you (7) with a smiling face and goes “Hi, would you like any help?”. You direct your questions and are pleased with the answers, but looking at the price again, you decide to postpone your purchase.</p>

                                    <img src="/images/blog-image/reviews.jpg" alt="image" width="100%" />

                                    <p><br />Still walking around the store, but could not find the TV units yet, you are getting tired. How can I finally find them? You take out your phone again and type TV units in the search bar on your browser, and it shows you the shortest path to the TV units from your location (8). You follow the route and arrive after a few minutes, test a few and read some reviews, and you go for the black one. Pleased with your decision, you head to the checkout. Close to the checkout area, you receive another notification “Show the code SOFA10 at checkout for a 10% discount on sofas” (9). You directly turn back and load the sofa you liked into your cart, and come back to the checkout area. Again looking at your phone, you see that you will wait the least at Checkout #4 (10). After a few minutes, you head to the restaurant and enjoy a meal with the family using your discount code. Then search for your car in the map, and navigate to the exact slot, go home and enjoy your new furniture during the rest of the day.</p>

                                    <h3>Customer journey on the manager's screen</h3>

                                    <p>Let's have a look at this scenario also from the store manager's perspective. A lot of people are coming into the store, using different paths and spending time on products. Is it possible to get all this data and analytics, just like online businesses are doing with Google Analytics?</p>

                                    <p>1000 customers enter the store (11) and follow different paths inside (12). 200 customers spend more than 10 minutes in kitchen appliances (13) but the store makes only 4 sales, which means that there is high traffic, but low conversion rate, with 2% (14). This might be because the product is placed on a hotspot and there is not much demand. However the manager has the information that people spend more than 10 minutes, so he knows people need kitchen appliances. In this case, he can take different actions e.g. apply a different pricing, instead of changing the location.</p>


                                    <img src="/images/blog-image/erpdashboard.png" alt="image" width="100%" />

                                    <p><br />From 1000 visitors, 400 people visit table lamps after visiting sofas (15). So the manager understands that there is a strong association between both, and he can strategically place low traffic products, e.g. bathroom appliances, between them, so the bathroom appliances will be exposed to more people.</p>
                                    
                                    <p>Getting all these data helps the store manager to take meaningful actions and optimize his store, just like an online marketplace.</p>

                                    <h3>Combination of e-commerce and physical retail</h3>

                                    <p>The top reason why consumers shop in-store is the ability to feel & try the products (56%). Nearly half of the consumers noted that the ability to deal with personnel (46%) directly is among their top reasons for buying products in physical stores. (2019 Future Stores Consumer Report). And we see many advantages of e-commerce combined with the experience of a physical store in the scenario above.</p>

                                    <p>But is it possible at all? Are we already there technologically… or what about privacy?</p>

                                    <p>Well… the answer is, yes. There are solutions addressing these topics in the market, from cameras to Bluetooth beacons, all coming along with distinct challenges.</p>

                                    <p>While cameras and 3D sensors can help with people counting, they do not offer much when it comes to pushing notifications or providing navigation.</p>

                                    <p>On the other hand, network and application based solutions can help with dwell time or with communication with the customers. However, not many people (less than 10%) connect to the network in the premises or install an application, which in the end does not provide enough coverage to employ them.</p>

                                    <h3>All-in-one solution to to become the winner store</h3>

                                    <p>Unlike cameras, network or app-based solutions, Ariadne senses the phone signals and detect unique antennas, with no interaction needed from the visitors. This technology enables Ariadne to count people with over 95% accuracy and track the whole customer journey in the store. Phone signal tracking also enables pushing notifications and provides navigation when desired. The points in the scenario above are matched with Ariadne's solutions below:</p>

                                    <ul className="features-list">
                                    <li><Icon.Check />1, 2, 11, 12, 13, 14 - Ariadne Analytics</li>
                                    <li><Icon.Check />3, 5, 6, 8 - Ariadne Navigation</li>
                                    <li><Icon.Check />4, 9 - Push Notifications</li>
                                    <li><Icon.Check />7 - Employee Scheduling</li>
                                    <li><Icon.Check />10 - Queue Management</li>
                                    <li><Icon.Check />15 - ERP Integration</li>
                                    </ul>

                                    <img src="/images/blog-image/pushnotifications.jpg" alt="image" width="100%" />

                                    <h3><br />The state-of-the-art store</h3>

                                    <p><br />Technological innovations enable stores to focus and do more in omnichannel. In some cases, brick-and-mortar businesses are investing more into bringing an in-store feel to the digital experience. Virtual appointments, where sales staff utilize videoconferencing technologies to provide individualized attention to consumers, or using live streaming and sharing experiential content to engage with customers are just a few examples (McKinsey).</p>

                                    <p>On the other hand, there are more efforts in bringing the convenience of digital into the store experience. The pandemic has pushed retailers to redefine the role of physical stores and move beyond the traditional view they have set for them.</p>

                                    <p>The evolution of the physical store's role as a core component of the omnichannel journey has also affected store layouts. Many retailers started using their physical locations to educate customers about product options, strengthen their brand's positioning by delivering an exceptional experience, and drive more e-commerce sales. Indeed, research conducted before the pandemic showed that adding a new location boosts traffic to a retailer's website by 37% the next quarter (International Council of Shopping Centers, “Physical stores key to retail success, study finds,” October 15, 2018, icsc.com). New technology solutions, like Ariadne, are altering store designs as well, tech-enabled stores have new models that enhance customer journeys. In this new model, sales staff keep their critical roles, but they now serve as more of a consumer advocate.</p>

                                    <p>If you are interested in Ariadne's solutions and would like to get more information, you can book a meeting with our team <a href="/contact"><u>here</u></a>, and get to know how Ariadne can help your business.</p>

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

export default CustomerJourneyInWinnerStore;