import React from 'react';
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
        ...(await serverSideTranslations(locale, ["blog/indoor-localization-challenges"])),
      },
    };
  }

const IndoorLocalizationChallenges = (props) => {

    const { t } = useTranslation("blog/indoor-localization-challenges");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/blog/indoor-localization-challenges' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} /> 

            <div className="blog-details-area ptb-80 quarter-circle overflow-hidden" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/indoor-challenges.jpg" alt="image" />
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
 
                                    <h1>{t("page-title")}</h1> 

                                    <p>{t("text-1")}</p>

                                    <blockquote>
                                    <h4>{t("text-24")}</h4>

                                    <ul className="features-list">
                                    <li><Icon.Check />{t("text-2")}</li>
                                    <li><Icon.Check />{t("text-3")}</li>
                                    <li><Icon.Check />{t("text-4")}</li>
                                    </ul>

                                    </blockquote>

                                    <h3>{t("text-5")}</h3>

                                    <p>{t("text-6")}</p>

                                    <ul className="features-list">
                                    <li><Icon.Check />{t("text-7")}</li>
                                    <li><Icon.Check />{t("text-8")}</li>
                                    <li><Icon.Check />{t("text-9")}</li>
                                    <li><Icon.Check />{t("text-10")}.</li>
                                    <li><Icon.Check />{t("text-11")}</li>
                                    <li><Icon.Check />{t("text-12")}</li>
                                    <li><Icon.Check />{t("text-13")}</li>
                                    </ul>

                                    <h3>{t("text-14")}</h3>

                                    <p>{t("text-15")}</p>

                                    <ul className="features-list">
                                    <li><Icon.ArrowRight />{t("text-16")}</li>
                                    <li><Icon.ArrowRight />{t("text-17")}</li>
                                    <li><Icon.ArrowRight />{t("text-18")}</li>
                                    <li><Icon.ArrowRight />{t("text-19")}</li>
                                    <li><Icon.ArrowRight />{t("text-20")}</li>
                                    </ul>

                                    <h3>{t("text-21")}</h3>

                                    <p>{t("text-22")}</p>

                                    <p>{t("text-23")}</p>




                                </div>
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

export default IndoorLocalizationChallenges;