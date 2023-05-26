import React from "react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const OurFeatures = () => {

  
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Industries",
      text_b:"Ariadne provides customized solutions for many industries, and people counting and tracking analytics that can be used in a huge range of applications.",
      text_c:"Retail Stores",
      text_d:"Ariadne helps retailers to understand their customers, generate their conversion funnel and increase their revenue.",
      text_e:"Read More",
      text_f:"Shopping Centers",
      text_g:"Ariadne helps leading shopping center operation companies worldwide to take data-driven decisions, optimize their layouts and lease-pricing.",
      text_h:"Read More",
      text_j:"Airports",
      text_k:"Ariadne helps airports understand and serve their passengers better, provide useful services, and do more targeted marketing campaigns.",
      text_l:"Read More",
      text_m:"Transportation",
      text_n:"Ariadne helps transportation companies (e.g. railway operators) become truly data-driven and understand their passengers.",
      text_o:"Read More",
      text_p:"Cities",
      text_r:"Cities and government entities are flooded with people throughout the whole year. Ariadne helps them better serve their residents and improve their experience.",
      text_s:"Read More",
      text_t:"Hospitality",
      text_u:"Ariadne helps hotels and more understand their visitors, push useful information, identify their bottlenecks and unnecessary costs, and increase their revenues.",
      text_v:"Read More",
    },
    de: {
      text_a:"Industrien",
      text_b:"Ariadne bietet kundenspezifische Lösungen für viele Branchen sowie Analysen zur Personenzählung und -verfolgung, die in einer Vielzahl von Anwendungen eingesetzt werden können.",
      text_c:"Einzelhandelsgeschäfte",
      text_d:"Ariadne hilft Einzelhändlern, ihre Kunden zu verstehen, ihren Konversionstrichter zu generieren und ihren Umsatz zu steigern.",
      text_e:"Weiterlesen",
      text_f:"Einkaufszentren",
      text_g:"Ariadne hilft führenden Betreibern von Einkaufszentren weltweit, datengesteuerte Entscheidungen zu treffen, ihre Layouts und Mietpreise zu optimieren.",
      text_h:"Weiterlesen",
      text_j:"Flughäfen",
      text_k:"Ariadne hilft Flughäfen, ihre Passagiere besser zu verstehen und zu bedienen, nützliche Dienste anzubieten und gezieltere Marketingkampagnen durchzuführen.",
      text_l:"Weiterlesen",
      text_m:"Transport",
      text_n:"Ariadne hilft Verkehrsunternehmen (z. B. Bahnbetreibern), wirklich datengesteuert zu werden und ihre Fahrgäste zu verstehen.",
      text_o:"Weiterlesen",
      text_p:"Städte",
      text_r:"Städte und Regierungsbehörden werden das ganze Jahr über von Menschen überschwemmt. Ariadne hilft ihnen, ihren Bewohnern besser zu dienen und ihre Erfahrung zu verbessern.",
      text_s:"Weiterlesen",
      text_t:"Gastfreundschaft",
      text_u:"Ariadne hilft Hotels und mehr, ihre Besucher zu verstehen, nützliche Informationen zu verbreiten, ihre Engpässe und unnötigen Kosten zu identifizieren und ihre Einnahmen zu steigern.",
      text_v:"Weiterlesen",
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


  const retailStores = () => {
    Router.push({
      pathname: "/industries/retail-stores",
    });
  };
  const shoppingCenters = () => {
    Router.push({
      pathname: "/industries/shopping-centers",
    });
  };
  const airports = () => {
    Router.push({
      pathname: "/industries/airports",
    });
  };
  const transportations = () => {
    Router.push({
      pathname: "/industries/transportation",
    });
  };
  const cities = () => {
    Router.push({
      pathname: "/industries/cities",
    });
  };
  const hospitality = () => {
    Router.push({
      pathname: "/industries/hospitality",
    });
  };

  return (
    <div className='features-area pt-80 pb-50 bg-f7fafd'>
      <div className='container'>
        <div className='section-title'>
          <h2>{language.text_a}</h2>
          <div className='bar'></div>
          <p>{language.text_b}</p>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-6'>
            <div
              className='single-features'
              role='button'
              onClick={retailStores}
            >
              <div className='icon'>
                <img
                  src='/images/icons/retail-stores.png'
                  alt='Retail Stores'
                />
              </div>
              <h3>
                <Link href='/industries/retail-stores'>
                  <a>
                    <u>{language.text_c}</u>
                  </a>
                </Link>
              </h3>
              <p>{language.text_d}</p>
              <Link href='/industries/retail-store'>
                <a className='read-more-btn'>
                  <u>{language.text_e}</u>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div
              className='single-features'
              role='button'
              onClick={shoppingCenters}
            >
              <div className='icon'>
                <img
                  src='/images/icons/shopping-centers.png'
                  alt='Shopping Centers'
                />
              </div>
              <h3>
                <Link href='/industries/shopping-centers'>
                  <a>
                    <u>{language.text_f}</u>
                  </a>
                </Link>
              </h3>
              <p>{language.text_g}</p>
              <Link href='/industries/shopping-centers'>
                <a className='read-more-btn'>
                  <u>{language.text_h}</u>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='single-features' role='button' onClick={airports}>
              <div className='icon'>
                <img src='/images/icons/airports.png' alt='Airports' />
              </div>
              <h3>
                <Link href='/industries/airports'>
                  <a>
                    <u>{language.text_j}</u>
                  </a>
                </Link>
              </h3>
              <p>{language.text_k}</p>
              <Link href='/industries/airports'>
                <a className='read-more-btn'>
                  <u>{language.text_l}</u>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div
              className='single-features'
              role='button'
              onClick={transportations}
            >
              <div className='icon'>
                <img
                  src='/images/icons/transportation.png'
                  alt='Transportation'
                />
              </div>
              <h3>
                <Link href='/industries/transportation'>
                  <a>
                    <u>{language.text_m}</u>
                  </a>
                </Link>
              </h3>
              <p>{language.text_n}</p>
              <Link href='/industries/transportation'>
                <a className='read-more-btn'>
                  <u>{language.text_o}</u>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='single-features' role='button' onClick={cities}>
              <div className='icon'>
                <img src='/images/icons/cities.png' alt='Cities' />
              </div>
              <h3>
                <Link href='/industries/cities'>
                  <a>
                    <u>{language.text_p}</u>
                  </a>
                </Link>
              </h3>
              <p>{language.text_r}</p>
              <Link href='/industries/cities'>
                <a className='read-more-btn'>
                  <u>{language.text_s}</u>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div
              className='single-features'
              role='button'
              onClick={hospitality}
            >
              <div className='icon'>
                <img src='/images/icons/hospitality.png' alt='Hospitality' />
              </div>
              <h3>
                <Link href='/industries/hospitality'>
                  <a>
                    <u>{language.text_t}</u>
                  </a>
                </Link>
              </h3>
              <p>{language.text_u}</p>
              <Link href='/industries/hospitality'>
                <a className='read-more-btn'>
                  <u>{language.text_v}</u>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
