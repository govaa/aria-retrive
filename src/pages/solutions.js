import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { useTranslation } from "next-i18next";
 
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["pages/solutions"])),
      },
    };
  }
 
const Solutions = () => {

    const { t } = useTranslation("pages/solutions");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/solutions' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} />

            <div className="services-area-two pt-80 pb-50 bg-ffffff quarter-circle" style={{position: 'relative'}}>
                <div className="container">
                    <div className="section-title">
                        <h2>{t("text-1")}</h2>
                        <div className="bar"></div>
                        <p>{t("text-2")}</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
								    <img src="/images/icons/people-counting.png" alt="People Counting"/>
                                </div>
                                <h3>
                                    <Link href="/solutions/people-counting">
                                        <a><u>{t("text-3")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-4")}</p>
                                <Link href="/solutions/people-counting">
								<a className="read-more-btn"><u>{t("text-5")}</u></a>
							    </Link>	
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/queue-management.png" alt="Queue Management"/>
                                </div>
                                <h3>
                                    <Link href="/solutions/queue-management">
                                        <a><u>{t("text-6")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-7")}</p>
                                <Link href="/solutions/queue-management">
								<a className="read-more-btn"><u>{t("text-8")}</u></a>
							    </Link>	
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/employee-scheduling.png" alt="Employee Scheduling"/>
                                </div>
                                <h3>
                                    <Link href="/solutions/employee-scheduling">
                                        <a><u>{t("text-9")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-10")}</p>
                                <Link href="/solutions/employee-scheduling">
								<a className="read-more-btn"><u>{t("text-11")}</u></a>
							    </Link>	
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/asset-tracking.png" alt="Asset Tracking"/>
                                </div>
                                <h3>
                                    <Link href="/solutions/asset-tracking">
                                        <a><u>{t("text-12")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-13")}</p>
                                <Link href="/solutions/asset-tracking">
								<a className="read-more-btn"><u>{t("text-14")}</u></a>
							    </Link>	
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/icons/virtual-queuing.png" alt="Virtual Queuing"/>
                                </div>
                                <h3>
                                    <Link href="/solutions/virtual-queuing">
                                        <a><u>{t("text-15")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-16")}</p>
                                <Link href="/solutions/virtual-queuing">
								<a className="read-more-btn"><u>{t("text-17")}</u></a>
							    </Link>	
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-000000">
                                    <img src="/images/icons/push-notification.png" alt="Push Notification"/>
                                </div>
                                <h3>
                                    <Link href="/solutions/push-notification">
                                        <a><u>{t("text-18")}</u></a>
                                    </Link>
                                </h3>
                                <p>{t("text-19")}</p>
                                <Link href="/solutions/push-notification">
								<a className="read-more-btn"><u>{t("text-20")}</u></a>
							    </Link>	
                            </div>
                        </div>
{/* 
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-eb6b3d">
                                    <Icon.MousePointer />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Drag & Drop Functionality</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Bell />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Deadline Reminders</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Send />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Modern Keyword Analysis</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Solutions;