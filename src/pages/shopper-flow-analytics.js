import react from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Head from "next/head";
import { NextSeo } from "next-seo";
import ShopperFlowVideo from "src/components/Common/ShopperFlowVideo"
 
const ShopperFlowAnalytics = () => {

    return (
        <>

            <Head>
                <title>
                Ariadne Customer Flow and Shopper Flow | Store Analytics | People Counting Software
                </title>
                <meta name='description' content='Ariadne: Shopper Flow Analytics' />
                <meta property="og:title" content="Ariadne: Shopper Flow Analytics" />
                <meta property="og:description" content="Ariadne: Shopper Flow Analytics" />
                <meta property="og:image" content="https://www.ariadne.inc/images/blog-image/shopper-flow.png"/>
                <link rel='icon' href='/favicon.png' />
            </Head>
            <NextSeo canonical='https://www.ariadne.inc/shopper-flow-analytics' />

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


                                    <h1 className="fs-1 lh-base pt-5" style={{fontFamily:"GothamBlack"}}>Case Study - Modehaus Frey (Modehändler) | Ariadne</h1>

                                    {/* <h2 className="lh-base">Have you ever imagined how much safer your privacy would be if your appearance was changing multiple times per second?</h2> */}

                                    <ShopperFlowVideo />

                                    <div className="">

                                        <p className="fs-5 text-justify">Ariadne bietet Kundenstromanalysen, indem es eine gründliche Analyse der anonymen Daten durchführt, die durch Signalverfolgung gesammelt werden. Zunächst verwenden wir fortschrittliche Partikelfilteralgorithmen, um den Ursprung eines übertragenen Signals abzuschätzen, wobei wir verschiedene Faktoren wie Signaldämpfung, Geometrie, Topologie des Standorts, Eigenschaften der für die Signalübertragung verwendeten Antenne und andere berücksichtigen. Sobald die Signalquelle bestimmt ist, verwenden wir probabilistische Techniken, um den wahrscheinlichsten Weg abzuschätzen, den jeder Besucher nimmt. Unsere Tracking-Methode ist patentiert, und das Patent ist für den Zugriff verfügbar.</p>

                                    </div>

                                    <div>
                                    <blockquote>
                                    <h4>Wie führende Einzelhändler mit Ariadne Pionierarbeit in der Branche leisten:</h4>

                                    <ul className="features-list">
                                    <li className="fs-5 text-justify"><Icon.Check />Verstehen Sie ihre Regal- und Displayeffektivität</li>
                                    <li className="fs-5 text-justify"><Icon.Check />Optimieren Sie ihre Kategoriegrenzen und ihr Layout und erhöhen Sie ihre Konversionsrate auf Produktebene</li>
                                    <li className="fs-5 text-justify"><Icon.Check />Echtzeit-A/B-Tests von Schildern und Point-of-Sale-Material</li>
                                    <li className="fs-5 text-justify"><Icon.Check />Verbessertes Einkaufserlebnis mit der richtigen Anzahl an Mitarbeitern zur richtigen Zeit und am richtigen Ort</li>
                                    <li className="fs-5 text-justify"><Icon.Check />Gezielte Personaleinsatzplanung, um bei gleichen oder geringeren Arbeitskosten mehr Umsatz zu erzielen</li>
                                    <li className="fs-5 text-justify"><Icon.Check />Den Käufern angebotene Navigation sowie Mitarbeiterbenachrichtigungen in Echtzeit, um die Nachfrage im Geschäft zu bedienen</li>
                                    <li className="fs-5 text-justify"><Icon.Check />Steigern Sie Ihre Einkäufe mit gezielten Push-Benachrichtigungen über Rabatte und Werbeaktionen im Geschäft</li>
                                    </ul>

                                    </blockquote>
                                    </div>

                                    <div className="row justify-content-center">
                                        <h2 className="row justify-content-center pb-50 pt-80">Was uns auszeichnet</h2>
                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/no-cameras.png" alt="Ariadne does not require cameras." />

                                                <div className="content">
                                                    <h3>
                                                        <span>Keine Kameras</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/no-apps.png" alt="Ariadne does not require apps." />

                                                <div className="content">
                                                    <h3>
                                                        <span>Keine App-Downloads</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/no-beacons.png" alt="Ariadne does not require cameras." />

                                                <div className="content">
                                                    <h3>
                                                        <span>Keine Beacons erforderlich</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center pt-80"></div>

                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/accuracy-usa.png" alt="Ariadne is up to 1 foot accurate." />

                                                <div className="content">
                                                    <h3>
                                                        <span>Bis zu 1 Meter Genauigkeit</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/plug-and-play.png" alt="Ariadne offers a no infrastructure, plug-and-play solution." />

                                                <div className="content">
                                                    <h3>
                                                        <span>Plug-and-Play-Technologie</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                            <div className="agency-services-box">
                                                <img src="/images/blog-image/conversion-funnel.png" alt="Conversion by store, department, display, endcap" />

                                                <div className="content">
                                                    <h3>
                                                        <span>Konversion nach Geschäft, Display...</span>
                                                    </h3>
                                                </div>
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


export default ShopperFlowAnalytics;
