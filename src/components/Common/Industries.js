import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Industries = () => {
    
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Industries",
      text_b:"Ariadne has customized solutions and use cases for a large variety of industries. Choose your industry below to find the best use cases.",
      text_c:"Retail Stores",
      text_d:"Ariadne helps retailers to understand their customers, generate their conversion funnel and identify their unnecessary costs.",
      text_e:"Read More",
      text_f:"Shopping Centers",
      text_g:"Ariadne helps leading shopping center operation companies worldwide to take data-driven decisions, optimize their layouts and lease-pricing.",
      text_h:"Read More",
      text_i:"Airports",
      text_j:"Ariadne helps airports understand and serve their passengers better, provide useful services, achieve targeted marketing.",
      text_k:"Read More",
      text_l:"Transportation",
      text_m:"Ariadne helps leading transportation companies become more data-driven and abandon costly strategies.",
      text_n:"Read More",
      text_o:"Cities",
      text_p:"Ariadne helps cities better serve their residents and improve their experience, while helping the local businesses.",
      text_r:"Read More",
      text_s:"Hospitality",
      text_t:"Ariadne helps hotels understand their visitors, push notifications, identify unnecessary costs, and increase their revenues.",
      text_u:"Read More",
    },
    de: {
        text_a:"Industrien",
        text_b:"Ariadne hat kundenspezifische Lösungen und Anwendungsfälle für eine Vielzahl von Branchen. Wählen Sie unten Ihre Branche aus, um die besten Anwendungsfälle zu finden.",
        text_c:"Einzelhandelsgeschäfte",
        text_d:"Ariadne hilft Einzelhändlern, ihre Kunden zu verstehen, ihren Konversionstrichter zu generieren und ihre unnötigen Kosten zu identifizieren.",
        text_e:"Weiterlesen",
        text_f:"Einkaufszentren",
        text_g:"Ariadne hilft führenden Betreibern von Einkaufszentren weltweit, datengesteuerte Entscheidungen zu treffen, ihre Layouts und Mietpreise zu optimieren.",
        text_h:"Weiterlesen",
        text_i:"Flughäfen",
        text_j:"Ariadne hilft Flughäfen, ihre Passagiere besser zu verstehen und zu betreuen, nützliche Dienste anzubieten und gezieltes Marketing zu erreichen.",
        text_k:"Weiterlesen",
        text_l:"Transport",
        text_m:"Ariadne hilft führenden Transportunternehmen, datengesteuerter zu werden und kostspielige Strategien aufzugeben.",
        text_n:"Weiterlesen",
        text_o:"Städte",
        text_p:"Ariadne hilft Städten, ihren Einwohnern besser zu dienen und ihre Erfahrung zu verbessern, während sie den lokalen Unternehmen hilft.",
        text_r:"Weiterlesen",
        text_s:"Gastfreundschaft",
        text_t:"Ariadne hilft Hotels, ihre Besucher zu verstehen, Benachrichtigungen zu senden, unnötige Kosten zu identifizieren und ihre Einnahmen zu steigern.",
        text_u:"Weiterlesen",
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

        <div className="services-area-two pt-80 pb-80 bg-ffffff quarter-circle" style={{position: 'relative'}}>
        <div className="container">
            <div className="section-title">
                <h2>{language.text_a}</h2>
                <div className="bar"></div>
                <p>{language.text_b}</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-services-box">
                        <div className="icon">
                            <img src="/images/icons/retail-stores.png" alt="Retail Stores"/>
                        </div>
                        <h3>
                            <Link href="/industries/retail-stores">
                            <a><u>{language.text_c}</u></a>
                            </Link>
                        </h3>
                        <p>{language.text_d}</p>
                        <Link href="/industries/retail-store">
								<a className="read-more-btn"><u>{language.text_e}</u></a>
                        </Link>		
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="single-services-box">
                        <div className="icon">
                            <img src="/images/icons/shopping-centers.png" alt="Shopping Centers"/>
                        </div>
                        <h3>
                            <Link href="/industries/shopping-centers">
                                <a><u>{language.text_f}</u></a>
                            </Link>
                        </h3>
                        <p>{language.text_g}</p>
                        <Link href="/industries/shopping-centers">
								<a className="read-more-btn"><u>{language.text_h}</u></a>
                        </Link>	
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="single-services-box">
                        <div className="icon">
                            <img src="/images/icons/airports.png" alt="Airports"/>
                        </div>
                        <h3>
                            <Link href="/industries/airports">
                                <a><u>{language.text_i}</u></a>
                            </Link>
                        </h3>
                        <p>{language.text_j}</p>
                        <Link href="/industries/airports">
								<a className="read-more-btn"><u>{language.text_k}</u></a>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="single-services-box">
                        <div className="icon">
                            <img src="/images/icons/transportation.png" alt="Transportation"/>
                        </div>
                        <h3>
                            <Link href="/industries/transportation">
                                <a><u>{language.text_l}</u></a>
                            </Link>
                        </h3>
                        <p>{language.text_m}</p>
                        <Link href="/industries/transportation">
								<a className="read-more-btn"><u>{language.text_n}</u></a>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="single-services-box">
                        <div className="icon">
                            <img src="/images/icons/cities.png" alt="Cities"/>
                        </div>
                        <h3>
                            <Link href="/industries/cities">
                                <a><u>{language.text_o}</u></a>
                            </Link>
                        </h3>
                        <p>{language.text_p}</p>
                        <Link href="/industries/cities">
								<a className="read-more-btn"><u>{language.text_r}</u></a>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="single-services-box">
                        <div className="icon">
                            <img src="/images/icons/hospitality.png" alt="Hospitality"/>
                        </div>
                        <h3>
                            <Link href="/industries/hospitality">
                                <a><u>{language.text_s}</u></a>
                            </Link>
                        </h3>
                        <p>{language.text_t}</p>
                        <Link href="/industries/hospitality">
								<a className="read-more-btn"><u>{language.text_u}</u></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}

export default Industries;
