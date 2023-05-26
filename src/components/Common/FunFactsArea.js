import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FunFactsArea = () => {

  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Ariadne by Numbers",
      text_b:"Ariadne is leading the path to digitalization!",
      text_c:"People Sensed",
      text_d:"Countries Active",
      text_e:"Locations Deployed",
      text_f:"Cost Savings",
      text_g:"Have any question about us?",
      text_h:"Don't hesitate to contact us",
      text_i:"Contact Us",
    },
    de: {
        text_a:"Ariadne nach Zahlen",
        text_b:"Ariadne führt den Weg in die Digitalisierung!",
        text_c:"Menschen erkannt",
        text_d:"Länder aktiv",
        text_e:"Bereitgestellte Standorte",
        text_f:"Kostenersparnis",
        text_f:"Haben Sie Fragen zu uns?",
        text_f:"Zögern Sie nicht uns zu kontaktieren",
        text_f:"Kontaktieren Sie uns",
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
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>{language.text_a}</h2>
                    <div className="bar"></div>
                    <p>{language.text_b}</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>10M</h3>
                            <p>{language.text_c}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>10+</h3>
                            <p>{language.text_d}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>1000+</h3>
                            <p>{language.text_e}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>12%+</h3>
                            <p>{language.text_f}</p>
                        </div>
                    </div>
                </div>

                <div className="contact-cta-box">
                    <h3>{language.text_g}</h3>
                    <p>{language.text_h}</p>

                    <Link href="/contact">
                        <a className="btn btn-primary">{language.text_i}</a>
                    </Link>
                </div>

                <div className="map-bg">
                    <img src="/images/map.png" alt="map" />
                </div>
            </div>
        </div>
    )
}

export default FunFactsArea;