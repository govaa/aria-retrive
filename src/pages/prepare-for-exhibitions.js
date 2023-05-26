import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import BlogVideo from '@/components/Common/BlogVideo'; 
import BlogBasicContactForm from '@/components/Contact/BlogBasicContactForm'; 
import EmailBoothNumber from '@/components/Contact/EmailBoothNumber';
import * as Icon from 'react-feather';
import Head from "next/head";
import { NextSeo } from "next-seo";
 
const PrepareForExhibitions = () => {
    return (
        <>

            <Head>
                <title>
                How to Prepare for An Exhibition | People Counting | Heatmap Software
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/prepare-for-exhibitions' />

            <Navbar />

            <PageBanner pageTitle="How to Prepare for an Exhibition" /> 

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="blog-details-desc">
                                <div className="article-image text-center">
                                    <h3 className="pb-4">Lessons Learned From 100+ Exhibitors</h3>
                                </div>

                                <div className="article-content">

                                    <p className="lead text-dark"><strong>Ariadne</strong> is the only privacy-compliant smartphone technology solution that passively collects people flow data <strong>without</strong> apps, Wi-Fi, Bluetooth or network connections, and turns them into actionable insights - Plug-and-play technology with award-winning accuracy.</p>

                                    <p className="lead text-dark">Ariadne team attended many exhibitions over the last few months and had the chance to analyze and create a report for exhibitors/attendees to better prepare for the future exhibitions. We have initiated a campaign, called <a className="text-danger" href="/booth-performance-measurement"><u>"Booth Performance Measurement"</u></a>, which attracted a lot of demand from the exhibitors.</p>

                                    <blockquote>

                                    <h4>The report covers</h4>

                                    <ul className="features-list lead">
                                    <li><Icon.Check /><mark>9 Countries</mark></li>
                                    <li><Icon.Check /><mark>8+ Exhibitions</mark></li>
                                    <li><Icon.Check /><mark>100+ Exhibitors</mark></li>
                                    <li><Icon.Check /><mark>100 000+ Visitors</mark></li>
                                    </ul>

                                    </blockquote>

                                    <p className="lead text-dark">Trajectory of Ariadne team throughout the world:</p>

                                    <div className="article-image text-center pb-4">
                                        <img src="/images/blog-image/Exhibition Countries.png" alt="Exhibition Countries" width="70%" />
                                    </div>

                                    
                                    <blockquote>

                                    <h4>Outline</h4>

                                    <ul className="features-list lead">
                                    <li><Icon.Check />Daily Visitor Trends</li>
                                    <li><Icon.Check />Hourly Visitor Trends</li>
                                    <li><Icon.Check />People Flow in the Exhibitions</li>
                                    <li><Icon.Check />Booth Trends</li>
                                    <li><Icon.Check />Downloads</li>
                                    <li><Icon.Check />Webinar Recording</li>
                                    </ul>

                                    </blockquote>
                                  
                                    <h3 className="pt-4">1) People Counting in Exhibitions</h3>

                                    <p className="lead text-dark">There is a strong trend in all of the exhibitions we have attended this year. <strong className="text-danger">The second day is always the busiest day</strong> (in 3-day exhibitions) and there is a <strong className="text-danger">12% increase</strong> from the first day to second day. However,  we see a <strong className="text-danger">very sharp decrease</strong> in number of visitors on the 3rd day, almost 40%. </p>

                                    <img src="/images/blog-image/People Counting in Exhibitions.png" alt="People Counting in Exhibitions" width="60%" />

                                    <p className="lead text-dark"><br/>This trend is not something we are unfamiliar with.  We have seen the same trend in our smart city projects. We see here too that the busiest day is the second day, and there is a consistent 12% increase from the first day. The third and the fourth day, as expected, had less visitation than the previous days.</p>

                                    <img src="/images/blog-image/People Counting in Cities.png" alt="People Counting in Smart Cities" width="60%" />

                                    <p className="lead text-dark"><br/>We went even further to analyze the best days for an event. In one of the projects, there were 3 exhibitions in a row, on Tuesday, Wednesday and Thursday. What we noticed is that the event happening on Wednesday has the most attendance, assuming there is a different event happening the day before.</p>

                                    <img src="/images/blog-image/Best day for an event.png" alt="How to choose days for an event" width="60%" />


                                    <h3 className="pt-4">2) Hourly Visitor Trends</h3>

                                    <p className="lead text-dark">The chart below shows the number of visitors by hourly intervals. An eye-catching insight from the chart is that <strong className="text-danger">afternoon hours are usually busier during the first day</strong>, while <strong className="text-danger">morning hours are busier during the second day</strong> of an exhibition.</p>

                                    <img src="/images/blog-image/Hourly Footfall Traffic.png" alt="Hourly Footfall Traffic" width="60%" />

                                    <p className="lead text-dark"><br/>We can see a clear correlation to hourly visitation patterns in the shopping malls too, through the below example from one of Ariadne's customers. While within Mon-Fri, we see a <strong className="text-danger">clear peak</strong> on visitation <strong className="text-danger">around 17:00</strong>, on Saturday that peak comes earlier, around 13:00 and it drops significantly afterwards. A clear opportunity to start identifying what type of events/incentives can be offered to visitors to keep them longer in the venue!</p>

                                    <img src="/images/blog-image/People Counting in Malls.png" alt="People Counting in Malls" width="60%" />
                                    

                                    <h3 className="pt-4">3) People Flow in the Exhibitions</h3>

                                    <p className="lead text-dark">We also measured what was the immediate next stop of people that left the Speech Area after the end of the speech. The insight was that the <strong className="text-danger">nearby exhibitors attracted almost half of the people</strong> while some key exhibitors who were not close, didn’t get that much traffic.</p>

                                    <img src="/images/blog-image/Conversion rate of speeches.png" alt="Conversion Rate of Speeches" width="60%" />

                                    <p className="lead text-dark"><br/>Another interesting finding is that <strong className="text-danger">people who visit the stage are more than twice more likely to visit other booths</strong> compared to people who did not visit the stage.</p>

                                    <img src="/images/blog-image/Conversion rate of exhibitors.png" alt="Conversion Rate of Exhibitors" width="60%" />
                                    
                                    <p className="lead text-dark"><br/>We also analyzed the conversion rate from Stage to Booths, pending on the distance. It’s logical that the further it gets the less probable is that the immediate next stop would be a more distant booth indeed, and we see this being confirmed from these numbers too. By 1st degree, we mean the immediate neighbour booths, and so on.</p>

                                    <img src="/images/blog-image/Conversion rate of stages based on distance.png" alt="Conversion rate of stages based on distance" width="60%" />

                                    <p className="lead text-dark"><br/>There is a similar trend in the malls. From our anchor tenant report, we have found that the closest stores get the most conversion from the anchor tenants. On average, <strong className="text-danger">41% of the anchor tenant visitors visit also the other shops</strong>. And most of them (8.9%) go to the immediate neighbor stores and so on.</p>

                                    <img src="/images/blog-image/Conversion rate of anchor tenants.png" alt="Conversion rate of anchor tenants" width="60%" />


                                    <h3 className="pt-4">4) Booth Trends</h3>

                                    <p className="lead text-dark">When we compare the booth size to the number of visitors, we land to the chart below. There is a clear correlation between the size of the booth and number of people visited. <strong className="text-danger">The larger it is, the more visitors it attracts</strong>.</p>

                                    <img src="/images/blog-image/Number of people based on booth size.png" alt="Number of people based on booth size" width="60%" />

                                    <p className="lead text-dark"><br/>The same trend also exists for the average duration spent at booths. <strong className="text-danger">The larger the booth, the longer the visitor it engages</strong>.</p>

                                    <img src="/images/blog-image/Average time spent based on booth size.png" alt="Average time spent based on booth size" width="60%" />

                                    <p className="lead text-dark"><br/>We have also recorded the impact of the network effect in the exhibitions we attended. When there are many people in a booth, it attract more and more people, and keeps them longer in the booth.</p>
                                    
                                    <img src="/images/blog-image/Number of people based on average time spent.png" alt="Number of people based on average time spent" width="60%" />

                                    <p className="lead text-dark"><br/>The insights above are not unique to the exhibitions. We have seen similar trends in our retailer clients. For example, the chart below visualizes the <strong className="text-danger">correlation of sales with the average time visitors spend in the store. We have seen that people are more likely to buy when they dwell around 10 minutes. However, when they spend more time in the shop (queuing etc.), then this likelihood decreases</strong>, which might be signaling that visitors need some asistance from the store associates.</p>

                                    <img src="/images/blog-image/Number of sales based on average time spent.png" alt="Number of sales based on average time spent" width="60%" />


                                    <h3 className="pt-4"><a id="form">Measure My Booth Success for Free</a></h3>

                                    <p className="lead text-dark">Thank you for reading through our report. If you would are interested in measuring your booth performance, please <a className="text-danger" href="/prepare-for-exhibitions/#form"><u>fill the form</u></a> below or click <a className="text-danger" href="/booth-performance-measurement"><u>here for more information</u></a>.</p>

                                    <EmailBoothNumber />
{/* 
                                    <h3><a id="webinar">Downloads</a></h3>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EYGEmHaUdIdOsugp2jYigc8Bni0ipGdou5hNu5XgRK_qEg?e=RrcELl"><Icon.Download /> Expo Real First Day</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EeygzCID1j1ArGpkFGUPMKwBOWPc25kTCiO8kKAh1L0W_Q?e=e9gRac"><Icon.Download /> Expo Real Final Report</a></p>
                                    <p><a href="https://ariadnemapscom-my.sharepoint.com/:b:/g/personal/koc_ariadnemaps_com/EcGBPjKkjWZCq579ntk3YBUBBYJgzpV5HixfZDRbIwe-ug?e=inSVgt"><Icon.Download /> Smart City Expo World Congress Report</a></p>
                                     */}
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

export default PrepareForExhibitions;