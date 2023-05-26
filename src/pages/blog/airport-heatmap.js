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
        ...(await serverSideTranslations(locale, ["airport-heatmap"])),
      },
    };
  }
 
const AnchorTenants = (props) => {

    const { t } = useTranslation("airport-heatmap");

    return (
        <>

            <Head>
                <title>
                {t("seo-title")}
                </title>
                <meta name='description' content='Ariadne' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/blog/airport-heatmap' />

            <Navbar />

            <PageBanner pageTitle={t("page-title")} /> 

            <div className="blog-details-area ptb-80 quarter-circle overflow-hidden" style={{position: "relative"}}>
                <div className="container semi-circle">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/airport-concessionaire-with-details.png" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> {t("date")}
                                            </li>
                                            <li>
                                                <Icon.User /> <a>Hasim Koc</a>
                                            </li>
                                        </ul>
                                    </div>
 
                                    <h1>{t("page-title")}</h1> 

                                    <p>{t("text-1")}<a href="https://www.icao.int/sustainability/Documents/Covid-19/ICAO_coronavirus_Econ_Impact.pdf"><u>{t("text-2")}</u></a>{t("text-3")}<a href="https://www.bain.com/insights/airport-retail-brace-for-disruption/"><u>{t("text-4")}</u></a>{t("text-5")}</p>

                                    <p>{t("text-6")}</p>

                                    <p>{t("text-7")}</p>

                                    <blockquote>
                                    <h4>{t("text-8")}</h4>

                                    <ul className="features-list">
                                    <li><Icon.Check />{t("text-10")}</li>
                                    <li><Icon.Check />{t("text-12")}</li>
                                    <li><Icon.Check />{t("text-15")}</li>
                                    <li><Icon.Check />{t("text-17")}</li>
                                    <li><Icon.Check />{t("text-19")}</li>
                                    <li><Icon.Check />{t("text-20")}</li>
                                    </ul>

                                    </blockquote>

                                    <h3>{t("text-21")}</h3>

                                    <p>{t("text-22")}</p>

                                    <p>{t("text-23")}(<a href="https://blog.aci.aero/acis-airport-economics-report-is-a-benchmark-for-measuring-the-industry-performance-in-post-covid-recovery/"><u>{t("text-25")}</u></a>){t("text-26")}<a href="https://www.bain.com/insights/airport-retail-brace-for-disruption/"><u>{t("text-24")}</u></a>{t("text-27")}</p>

                                    <img src="/images/blog-image/distribution-of-global-revenues.png" alt="Distribution of global revenues of airports" />

                                    <h3><br />{t("text-28")}</h3>

                                    <p>{t("text-29")}</p>

                                    <p>{t("text-30")}</p>

                                    <p>{t("text-31")}</p>

                                    <p>{t("text-32")}</p>

                                    <h3>{t("text-33")}</h3>

                                    <p>{t("text-34")}</p>

                                    <p>{t("text-35")}</p>

                                    <p>{t("text-36")}</p>

                                    <img src="/images/blog-image/product-mix.png" alt="Product mix" />

                                    <p><br />{t("text-37")}</p>

                                    <img src="/images/blog-image/airport-concessionaire-with-details.png" alt="Airport concessionaires analysis" width="100%"/>

                                    <p><br />{t("text-38")}<strong><u>{t("text-39")}</u></strong>{t("text-40")}<strong><u>{t("text-41")}</u></strong>{t("text-42")}</p>

                                    <h3>{t("text-43")}</h3>

                                    <p>{t("text-44")}</p>

                                    <p>{t("text-45")}<a href="/solutions/people-counting/" className="text-velvet"><u>{t("text-46")}</u></a>{t("text-47")}</p>

                                    <img src="/images/blog-image/airport-heatmap.gif" alt="Airport heatmap" width="100%"/>

                                    <p><br />{t("text-48")}</p>

                                    <p>{t("text-49")}</p>

                                    <h3>{t("text-50")}</h3>

                                    <p>{t("text-51")}<a href="/blog/anchor-tenants/" className="text-velvet"><u>{t("text-52")}</u></a>{t("text-53")}</p>

                                    <p>{t("text-54")}</p>

                                    <img src="/images/blog-image/airport-vending-machine.png" alt="Vending machine at the airport" width="100%"/>

                                    <p><br/>{t("text-55")}</p>

                                    <p>{t("text-56")}</p>

                                    <p>{t("text-57")}<storng><u>{t("text-58")}</u></storng>{t("text-59")}<a href="/blog/anchor-tenants/" className="text-velvet"><u>{t("text-60")}</u></a>{t("text-61")}</p>

                                    <img src="/images/blog-image/airport-retail-analysis.png" alt="Success of airport retailers" width="100%"/>

                                    <h3><br/>{t("text-62")}</h3>

                                    <p>{t("text-63")}<a href="https://blog.aci.aero/acis-airport-economics-report-is-a-benchmark-for-measuring-the-industry-performance-in-post-covid-recovery/"><u>{t("text-64")}</u></a>{t("text-65")}</p>

                                    <img src="/images/blog-image/airport-operating-expenses.png" alt="Airport operating expenses" width="100%"/>

                                    <p>{t("text-66")}</p>

                                    <p>{t("text-67")}<a href="https://www.bain.com/insights/airport-retail-brace-for-disruption/"><u>{t("text-68")}</u></a>{t("text-69")}<a href="/solutions/queue-management/" className="text-velvet"><u>{t("text-70")}</u></a>, <a href="/solutions/people-counting/" className="text-velvet"><u>{t("text-71")}</u></a>{t("text-72")}</p>

                                    <img src="/images/blog-image/queue.jpg" alt="Queue minimization at airports" width="100%"/>

                                    <p><br/>{t("text-73")}<a href="/solutions/virtual-queuing/" className="text-velvet"><u>{t("text-74")}</u></a>{t("text-82")}</p>

                                    <img src="/images/blog-image/virtual-queue.png" alt="Virtual queuing at airports" width="100%"/>

                                    <p><br/>{t("text-75")}<a href="http://www.phunware.com/marketing/choosing-right-mobile-solution-airports/"><u>{t("text-76")}</u></a> {t("text-77")}<a href="https://www.theonion.com/dad-suggests-arriving-at-airport-14-hours-early-1819573933"><u>{t("text-78")}</u></a>{t("text-83")}</p>

                                    <p>{t("text-79")}<a href="/contact"><u>{t("text-80")}</u></a>{t("text-81")}</p>
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

export default AnchorTenants;