import React from 'react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Brands = () => {
    
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
        text_a:"Trusted by Leaders",
        text_b:"Industry leaders are moving forward with Ariadne.",
    },
    de: {
        text_a:"Vertrauen von Führungskräften",
        text_b:"Industrienführer gehen mit Ariadne voran.",
    },
  }

  const [language, setLanguage] = useState({});

  useEffect(() => {
    console.log(locale);
    if (locale === "de") {
      console.log("locale is german");
      setLanguage(translations.de);
    } else if (locale === "en") {
      console.log("locale is uk");
      setLanguage(translations.en);
      // console.log("object: ",language)
    } else {
      console.log("locale is french");
      setLanguage(translations.fr);
      // console.log("object: ",language)
    }
  }, []);


    return (
        <div className="features-area pt-80 pb-50 brands-background">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-white">{language.text_a}</h2>
                    <div className="bar"></div>
                    <p className="text-white">{language.text_b}</p>
                </div>

                <div className="row justify-content-center px-2">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <img src="/images/partner-img/partner-101.png" alt="partner"/>	
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <img src="/images/partner-img/partner-102.png" alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div className="col-lg-12 col-md-12 col-6">
                                <img src="/images/partner-img/partner-105.png" alt="partner" />

                            </div>
	
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div className="col-lg-12 col-md-12 col-6">
                                <img src="/images/partner-img/partner-113.png" alt="partner" />

                            </div>
	
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div className="col-lg-12 col-md-12 col-6">
                                <img src="/images/partner-img/partner-111.png" alt="partner" />

                            </div>
	
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div className="col-lg-12 col-md-12 col-6">
                                <img src="/images/partner-img/partner-116.png" alt="partner" />

                            </div>
	
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div className="col-lg-12 col-md-12 col-6">
                                <img src="/images/partner-img/partner-106.png" alt="partner" />

                            </div>
	
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div className="col-lg-12 col-md-12 col-6">
                                <img src="/images/partner-img/partner-108.png" alt="partner" />

                            </div>
	
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div className="col-lg-12 col-md-12 col-6">
                                <img src="/images/partner-img/partner-103.png" alt="partner" />

                            </div>
	
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Brands;  