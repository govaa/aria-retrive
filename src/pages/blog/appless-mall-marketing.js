import react from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";

 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/blog/appless-mall-marketing"])),
      },
    };
  }

 
const StoreAnalytics = () => {

    const { t } = useTranslation("pages/blog/appless-mall-marketing");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Stop building apps for your Shopping Mall, nobody will download them. Here is what you need to do!' />
                <meta property="og:title" content="Ariadne: Marketing for malls without apps | Mall Analytics & Mall Marketing | People Counting Software" />
                <meta property="og:description" content="Stop building apps for your Shopping Mall, nobody will download them. Here is what you need to do!" />
                <meta property="og:image" content="https://www.ariadne.inc/images/blog-image/amm-preview.png"/>
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/blog/appless-mall-marketing' />

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
                                                <Icon.Clock /> {t("date")}
                                            </li>
                                            <li>
                                                <Icon.User /> <a>Georgios Pipelidis</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h1 className="fs-1 lh-base" style={{fontFamily:"GothamBlack"}}>{t("page-title")}</h1>
 
                                    {/* <h2 className="lh-base">Have you ever imagined how much safer your privacy would be if your appearance was changing multiple times per second?</h2> */}

                                    <div className="row align-items-center pt-4 pb-4">

                                        <div className="col-lg-3 services-details-image">

                                            <img src="/images/blog-image/amm-shoppers-in-mall.png" width="100%" alt="Shopper perspective" />

                                        </div>

                                        <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text pb-2">{t("text-3")}</p>

                                        </div>

                                    </div>

                                    <p className="fs-5 blog-text pt-2">{t("text-4")}</p>

                                    <p className="fs-5 blog-text">{t("text-5")}</p>

                                    <div>
                                        <div className="row align-items-center pb-4">

                                            <div className="col-lg-3 services-details-image">

                                                <img src="/images/blog-image/amm-quote-one-person.png" width="100%" alt="Quote" />

                                            </div>

                                            <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text">{t("text-6")}<strong>{t("text-7")}</strong>{t("text-8")}</p>

                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div className="row align-items-center pb-4">

                                            {/* don't forget to put col-lg-9 */}
                                            <div className="services-details">

                                            <p className="fs-5 blog-text">{t("text-9")}</p>

                                            </div>

                                            {/* <div className="col-lg-3 services-details-image">

                                                <img src="/images/blog-image/amm-quote-with-our.png" width="100%" alt="Quote" />

                                            </div> */}

                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-sm-6 col-md-6 rounded mx-auto d-block">

                                        <img src="/images/blog-image/amm-two-circles.png" width="100%" alt="Users that download mall application" />

                                    </div>


                                    <h4 className="text-raspberry fs-5 lh-base text-uppercase" style={{fontFamily:"GothamBold"}}>{t("text-10")}</h4>


                                    <div className="row align-items-center pt-4 pb-4">

                                        <div className="col-lg-3 services-details-image">

                                            <img src="/images/blog-image/amm-happy-couple-rectangle.png" width="100%" alt="Happy couple in a shopping mall" />

                                        </div>

                                        <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text pb-2">{t("text-11")}<strong>{t("text-12")}</strong></p>

                                        </div>

                                    </div>

                                    <div>
                                        <div className="row align-items-center pb-4">

                                            <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text">{t("text-13")}<strong>{t("text-14")}</strong>{t("text-15")}</p>

                                            </div>

                                            <div className="col-lg-3 services-details-image">

                                                <img src="/images/blog-image/amm-quote-up-to.png" width="100%" alt="Quote" />

                                            </div>

                                        </div>
                                    </div>

                                    <div>

                                        <div className="row align-items-center pb-4">

                                            <div className="col-lg-7 services-details">

                                            <h4 className="text-raspberry fs-5 lh-base text-uppercase" style={{fontFamily:"GothamBold"}}>{t("text-16")}</h4>

                                            <p className="fs-5 blog-text">{t("text-17")}</p>

                                            </div>

                                            <div className="col-lg-5 services-details-image">

                                                <img src="/images/blog-image/amm-device-in-the-mall.png" width="100%" alt="Ariadne device in the mall" />

                                            </div>
                                        </div>
                                    </div>

                                    <p className="fs-5 blog-text">{t("text-18")}</p>

                                    <div>
                                        <div className="row align-items-center pb-4">

                                            <div className="col-lg-3 services-details-image">

                                                <img src="/images/blog-image/amm-quote-each-ariadne.png" width="100%" alt="Quote" />

                                            </div>

                                            <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text">{t("text-19")}<strong>{t("text-20")}<sup>2</sup>, </strong>{t("text-21")}<sup>2</sup>. {t("text-37")}</p>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="row align-items-center pt-4 pb-4">

                                        <div className="col-lg-3 services-details-image">

                                            <img src="/images/blog-image/amm-analytics-on-screen.png" width="100%" alt="Analytics on screen" />

                                        </div>

                                        <div className="col-lg-9 services-details">

                                            <h4 className="text-raspberry fs-5 lh-base text-uppercase" style={{fontFamily:"GothamBold"}}>{t("text-22")}</h4>

                                            <p className="fs-5 blog-text pb-2">{t("text-23")}</p>

                                        </div>

                                    </div>

                                    <h4 className="text-raspberry fs-5 lh-base text-uppercase" style={{fontFamily:"GothamBold"}}>{t("text-24")}</h4>

                                    <div>
                                        <div className="row align-items-center pb-4">

                                            <div className="col-lg-3 services-details-image">

                                                <img src="/images/blog-image/amm-quote-our-optin.png" width="100%" alt="Quote" />

                                            </div>

                                            <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text pb-2">{t("text-25")} {t("text-26")}<strong>{t("text-27")}</strong>{t("text-28")}</p>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-sm-6 col-md-6 rounded mx-auto d-block">

                                        <img src="/images/blog-image/amm-curry.png" width="100%" alt="Opt-in in mall by Ariadne" />

                                    </div>

                                    <div>
                                        <div className="row align-items-center pb-4">
                                            <div className="col-lg-7">

                                                <h4 className="text-raspberry fs-5 lh-base text-uppercase" style={{fontFamily:"GothamBold"}}>{t("text-29")}</h4>

                                                <p className="fs-5 blog-text">{t("text-30")}</p>

                                                <p className="fs-5 blog-text">{t("text-31")}</p>

                                            </div>

                                            <div className="col-lg-5">

                                                <img src="/images/blog-image/amm-phone-and-analytics.png" width="100%" alt="Ariadne device in the mall" />

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="row align-items-center pb-4">

                                            <div className="col-lg-3 services-details-image">

                                                <img src="/images/blog-image/amm-quote-you-can.png" width="100%" alt="Quote" />

                                            </div>

                                            <div className="col-lg-9 services-details">

                                            <p className="fs-5 blog-text">{t("text-32")}<strong>{t("text-33")}</strong>{t("text-34")}</p>

                                            </div>

                                        </div>
                                    </div>

                                    <h4 className="text-raspberry fs-5 lh-base text-uppercase" style={{fontFamily:"GothamBold"}}>{t("text-35")}</h4>

                                    <p className="fs-5 blog-text">{t("text-36")}</p>

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
