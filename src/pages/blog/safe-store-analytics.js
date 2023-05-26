import react from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const StoreAnalytics = () => {

    return (
        <>

            <Head>
                <title>
                Ariadne: The Ultimate Solution for Safe Store Analytics | Store Analytics | People Counting Software
                </title>
                <meta name='description' content='Ariadne: The Ultimate Solution for Safe Store Analytics' />
                <meta property="og:title" content="Ariadne: The Ultimate Solution for Safe Store Analytics" />
                <meta property="og:description" content="Ariadne: The Ultimate Solution for Safe Store Analytics" />
                <meta property="og:image" content="https://www.ariadne.inc/images/blog-image/shopper-perspective.png"/>
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/blog/safe-store-analytics' />

            <Navbar/>
            



            {/* <PageBanner pageTitle="Ariadne: The Ultimate Solution for Safe Store Analytics" />  */}

            <div className="blog-details-area ptb-80 quarter-circle overflow-hidden" style={{position: "relative", marginTop: "85px"}}>
                <div className="container ">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">
                                <div className="article-image pb-80">
                                    <img src="/images/blog-image/blogpost-rightcorner.png" width="30%" height="" alt="Store Analytics Banner" style={{position:"absolute", top: 0, right: 0}} />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> March 02, 2023
                                            </li>
                                            <li>
                                                <Icon.User /> <a>Georgios Pipelidis</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h1 className="fs-1 lh-base" style={{fontFamily:"GothamBlack"}}>Ariadne: The Ultimate Solution for Safe Store Analytics</h1>
 
                                    <h2 className="lh-base">Have you ever imagined how much safer your privacy would be if your appearance was changing multiple times per second?</h2>

                                    <div className="row align-items-center pt-4 pb-4">

                                        <div className="col-lg-3 services-details-image">

                                            <img src="/images/blog-image/shopper-variety.png" width="100%" alt="Shopper perspective" />

                                        </div>

                                        <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text">If you bought your phone after 2014 for iOS or after 2016 for Android, it is likely that it is randomly assigning a new physical address every time it sends out data. This is a feature implemented by the operating system manufacturers to comply with GDPR and various other privacy regulations around the world.</p>

                                            <p className="fs-5 blog-text">Given this information, which tracking method would you recommend for ensuring the privacy of both yourself and your customers: cameras or signal-based tracking?</p>

                                        </div>

                                    </div>

                                    <p className="fs-5 blog-text">In Ariadne, we prefer signal based tracking, for three very important reasons: <strong className="fs-5">Privacy</strong>, <strong className="fs-5">Costs</strong> and <strong className="fs-5">Scalability</strong>. Let me elaborate:</p>

                                    <p className="fs-5 blog-text">• <strong className="fs-5">Privacy</strong>: Ariadne offers methods that allow you to demonstrate mathematically that you are in compliance with privacy regulations. For example, the K-Anonymity method, which is a mathematically proven technique, is available through Ariadne, and its proof can be found <a href="https://dl.acm.org/doi/abs/10.1145/1055558.1055591?casa_token=KC4ZLs_LlKQAAAAA:VpC0TpxNp1AM9tsYiaU9Y9_CTWtHQeaWVW55tWNULtE9Rg0Si-HKBavx8BD2_C4DHNcO5p7RRjX5qQ" className="text-orca"><u>here</u></a>. By utilizing K-Anonymity, you can consistently group your visitors, which prevents any violation of their privacy. This method is an essential component of the Ariadne algorithm.</p>

                                    <p className="fs-5 blog-text">• <strong className="fs-5">Costs</strong>: Ariadne did not face any issues with the chip shortage due to two reasons: (a) our method can be implemented on most readily available wireless chips, and (b) these wireless chips are inherently cost-effective and easily scalable in production by their manufacturers. Ariadne can be even implemented in your existing WiFi routers or other hardware that you might have already installed in your infrastructure.</p>

                                    <p className="fs-5 blog-text">• <strong className="fs-5">Scalability</strong>: In the event that an Ariadne surveyor malfunctions, we will still offer location analytics by generating a mesh using the remaining sensors. Furthermore, if you desire to increase the area for which analytics are being generated, you can effortlessly do so by adding more Ariadne surveyors without the need to modify the configuration of the current devices.</p>

                                    <div>

                                        <h2 className="lh-base"><br/>But if there is no Unique Identifier, how can Ariadne provide Customer Flow?</h2>

                                        <div className="row align-items-center pb-4">

                                            <div className="col-lg-7 services-details">

                                            <p className="fs-5 blog-text">At Ariadne, we can provide customer flow analysis by conducting an in-depth analysis of the aforementioned data. Initially, we utilize advanced Particle Filter Algorithms to estimate the origin of a transmitted signal, taking into account various factors such as signal atenuation, geometry, topology of the location, properties of the antenna used for signal transmission, and others. Once the signal source is determined, we utilize probabilistic techniques to estimate the most probable path taken by each visitor. Our tracking method is patented, and the patent is available for access. </p>

                                            </div>

                                            <div className="col-lg-5 services-details-image">

                                                <img src="/images/blog-image/visitortrajectories.gif" width="100%" alt="Shopper Flows and Trajectories" />

                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                        <h2 className="lh-base"><br/>Is it possible to perform the same tracking as Ariadne with cameras or depth sensors?</h2>

                                        <div className="row align-items-center pb-4">
                                        
                                            <div className="col-lg-3 services-details-image">

                                                <img src="/images/blog-image/analyticschart.png" width="100%" alt="Shopper Flows and Trajectories" />

                                            </div>


                                            <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text">The answer is yes, but it would be considerably more expensive to do so.</p>

                                            <p className="fs-5 blog-text">It is possible to obtain location data using cameras and still adhere to GDPR regulations, but the cost would be significantly higher. For instance, a single camera can cover a maximum area of 20 m<sup>2</sup>, whereas an Ariadne surveyor can cover up to 1200 m<sup>2</sup>. This means that for a 40,000 m<sup>2</sup> area, you would require only 34 Ariadne surveyors, while you would need a minimum of 2,000 cameras, assuming that you always have a line of sight.</p>

                                            </div>

                                        </div>
                                    </div>

                                    <div>

                                        <h2 className="lh-base"><br/>Are Ariadne surveyors limited by the Line-of-Sight?</h2>

                                        <div className="row align-items-center pb-4">

                                            <div className="col-lg-9 services-details">

                                                <p className="fs-5 blog-text">Unlike cameras, which are obstructed by objects and therefore require numerous installations to monitor a specific area, Ariadne surveyors utilize phone signals that propagate uniformly in space like an expanding sphere, and cannot be obstructed.</p>

                                                <p className="fs-5 blog-text">Even a 5GHz signal can penetrate through solid objects such as cement and metal, albeit with some attenuation, but it will not be delayed. It always travels at the speed of light and can be timed accurately. This means that you won't face any line-of-sight limitations with Ariadne surveyors.</p>

                                            </div>

                                            <div className="col-lg-3 services-details-image">

                                            <img src="/images/blog-image/camera.png" width="100%" alt="Camera" />

                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                    <h2 className="lh-base"><br/>What can I do with Ariadne that my current People Counting System does not do?</h2>

                                    <p className="fs-5 blog-text">Short answer is plenty of things. Let’s list them:</p>

                                    <h4 className="text-raspberry fs-5 lh-base" style={{fontFamily:"GothamBold"}}>1. MORE ACCURATE KPI MONITORING</h4>


                                    <div className="row align-items-center pb-4">

                                        <div className="col-lg-3 services-details-image">

                                            <img src="/images/blog-image/phone-analytics.png" width="100%" alt="Phone and Analytics" />

                                        </div>


                                        <div className="col-lg-9 services-details">

                                        <div style={{ textAlign: 'right'}}>
                                            <p className="text-end mb-2 px-2 fs-5 bg-highlighttext" style={{display: 'inline-block'}}>“What can be measured can be managed”<br/><strong>Peter Drucker</strong></p>
                                        </div>

                                        <p className="fs-5  blog-text">As previously mentioned, Ariadne doesn't simply tally the number of individuals passing through your threshold. Instead, it calculates unique trajectories, which allows you to exclude staff members or anyone who enters and exits the store multiple times. Moreover, Ariadne's functionality enables you to establish limits, enabling you to filter out people who enter your store for only a brief period, or better yet, to determine the group size of people who entered and exited the store together, providing a clearer picture of your conversion rate. Additionally, Ariadne will report separately on the number of individuals who simply passed by your store.</p>

                                        </div>

                                    </div>
                                    </div>


                                    <div>


                                        <div className="row align-items-center pt-4 pb-4">

                                            <div className="col-lg-9 services-details">

                                                <h4 className="text-raspberry fs-5 lh-base" style={{fontFamily:"GothamBold"}}>2. DWELL TIME</h4>

                                                <p className="fs-5 blog-text">Simply counting your visitors is not enough. Understanding how long they stay in each area of your store is crucial, and this is where Ariadne stands out. By analyzing this data, you can reduce waiting times and improve the overall customer experience. You can explore different strategies to reduce wait times and increase the time customers spend browsing.</p>

                                            </div>

                                            <div className="col-lg-3 services-details-image">

                                            <img src="/images/blog-image/shopper-in-supermarket.png" alt="Customer in a supermarket" width="100%"/>

                                            </div>
                                        </div>
                                    </div>

                                    <div>



                                    <div className="row align-items-center pt-4 pb-4">

                                        <div className="col-lg-3 services-details-image">

                                            <img src="/images/blog-image/employee-scheduling-screen.png" width="100%" alt="Employee Scheduling" />

                                        </div>


                                        <div className="col-lg-9 services-details">

                                        <p className="text-raspberry fs-5" style={{fontFamily:"GothamBold"}}>3.	MORE ACCURATE EMPLOYEE SCHEDULING</p>


                                        <p className="fs-5 blog-text">Using Ariadne, you can divide your store into smaller sections and organize your staff needs accordingly. By providing the number of employees and their corresponding working hours, Ariadne can forecast your staffing needs for each hour of the upcoming week. Based on this data, it can generate an optimized schedule that will distribute your employees efficiently in space and time to handle peak visitation times. This will result in a potential doubling of visitor-to-customer conversion rate and help you stay well-prepared during busy periods.</p>

                                        </div>

                                    </div>
                                    </div>

                                    <div>


                                    <div className="row align-items-center pt-4 pb-4">

                                        <div className="col-lg-9 services-details">

                                            <p className="text-raspberry fs-5" style={{fontFamily:"GothamBold"}}>4.	BETTER PRODUCT PLACEMENT AND PRODUCT PRICING</p>

                                            <p className="fs-5 blog-text">Integrating your sales data with Ariadne allows for immediate correlation between visitation and cross-sales, providing insight into the preferred order of product visitation and purchase. Analyzing the conversion rate of each product and comparing it to others can also help identify pricing limitations. For instance, some products may outperform the average visitation and sales conversion, while others may struggle.</p>

                                        </div>

                                        <div className="col-lg-3 services-details-image">

                                        <img src="/images/blog-image/product-placement.png" alt="Product Placement and Product Pricing" width="100%" />

                                        </div>
                                    </div>
                                    </div>


                                    <div>



                                    <div className="row align-items-center pt-4 pb-4">

                                        <div className="col-lg-3 services-details-image">

                                        <img src="/images/blog-image/indoor-robot.png" alt="Indoor Logistics" width="100%"/>

                                        </div>


                                        <div className="col-lg-9 services-details">

                                        <p className="text-raspberry fs-5"  style={{fontFamily:"GothamBold"}}>5.	INDOOR LOGISTICS</p>


                                        <p className="fs-5 blog-text">As previously stated, Ariadne has the capability to track any signal transmitted by any digital device, which includes monitoring the whereabouts of your barcode scanners, POS machines, Electronic Shelf Labels, and eventually even your store robots, whether they are engaged in cleaning or securing your store.</p>

                                        </div>

                                    </div>
                                    </div>


                                    <div>


                                    <div className="row align-items-center pt-4 pb-4">

                                        <div className="col-lg-9 services-details">

                                            <p className="text-raspberry fs-5" style={{fontFamily:"GothamBold"}}>6.	COMMUNICATING WITH YOUR CUSTOMERS</p>

                                            <p className="fs-5 blog-text">Who said that communication has to be always one way? Ariadne can enable bidirectional communication for your visitors. Through this feature, visitors can locate products on a map and be navigated there. Additionally, you can communicate discounts for loyal customers, provided that they have given their consent. Ariadne even offers functionality to manage customer consent.</p>

                                        </div>

                                        <div className="col-lg-3 services-details-image">

                                        <img src="/images/blog-image/communicate.png" alt="Communicate with your customers" width="100%" />

                                        </div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default StoreAnalytics;
