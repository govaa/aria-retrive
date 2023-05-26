import React from "react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Features = () => {

  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"People Counting",
      text_b:"Over 95% accuracy, 100% privacy compliance! Detailed people counting analytics for each area and product.",
      text_c:"Read More",
      // text_j:"Employee Scheduling",
      // text_k:"Labour costs are one of the major costs of a physical business, Ariadne can help save up to €7 Million per year.",
      text_f:"Navigation",
      text_g:"App-free, single click navigation solution. 20 times more usage than other methods with its simplicity!",
      text_h:"Push Notification",
      text_i:"Communicate with your customers in the right place at the right time, push promotions and updates.",
      text_d:"Shopper Flow",
      text_e:"Track your shopper flow throughout the entire customer journey anonymously, from gate to the point of sale.",
    },
    de: {
      text_a:"Personenzählung",
      text_b:"Über 95 % Genauigkeit, 100 % Einhaltung der Datenschutzbestimmungen! Detaillierte Analysen zur Personenzählung für jeden Bereich und jedes Produkt.",
      text_c:"Weiterlesen",
      // text_j:"Mitarbeiterplanung",
      // text_k:"Die Arbeitskosten gehören zu den Hauptkosten eines physischen Unternehmens. Ariadne kann helfen, bis zu 7 Millionen € pro Jahr einzusparen.",
      text_f:"Navigation",
      text_g:"Eine App-freie Navigationslösung mit einem Klick. 20-mal mehr Nutzung als andere Methoden dank seiner Einfachheit!",
      text_h:"Push-Benachrichtigung",
      text_i:"Kommunizieren Sie mit Ihren Kunden zur richtigen Zeit am richtigen Ort, pushen Sie Werbeaktionen, nützliche Informationen und Updates.",
      text_d:"Kundenströme",
      text_e:"Verfolgen Sie Ihren Shopper Flow während der gesamten Customer Journey anonym, vom Gate bis zum Point of Sale, mit hoher Genauigkeit.",
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


  const peopleCounting = () => {
    Router.push({
      pathname: "/solutions/people-counting",
    });
  };
  const shopperFlow = () => {
    Router.push({
      pathname: "/technology/ariadne-analytics/",
    });
  };
  const navigation = () => {
    Router.push({
      pathname: "/technology/ariadne-navigation",
    });
  };
  const pushNotification = () => {
    Router.push({
      pathname: "/technology/ariadne-engagement",
    });
  };

  return (
    <div className='boxes-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='single-box' role='button' onClick={peopleCounting}>
              <div className='icon'>
                <img
                  src='/images/icons/people-counting.png'
                  alt='People Counting'
                />
              </div>
              <h3>
                <Link href='/solutions/people-counting'>
                  <a>
                    <u>{language.text_a}</u>
                  </a>
                </Link>
              </h3>
              <p>{language.text_b}</p>

              <Link href='/solutions/people-counting'>
                <a className='read-more-btn'>
                  <u>{language.text_c}</u>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div
              className='single-box bg-eab818'
              role='button'
              onClick={shopperFlow}
            >
              <div className='icon'>
                <img
                  src='/images/icons/shorter-paths.png'
                  alt='Ariadne Analytics'
                />
              </div>

              <h3>
                <Link href='/technology/ariadne-analytics/'>
                  <a>
                    <u>{language.text_d}</u>
                  </a>
                </Link>
              </h3>

              <p>{language.text_e}</p>

              <Link href='/technology/ariadne-analytics/'>
                <a className='read-more-btn'>
                  <u>{language.text_c}</u>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div
              className='single-box bg-5a287f'
              role='button'
              onClick={navigation}
            >
              <div className='icon'>
                <img
                  src='/images/icons/ariadne-navigation.png'
                  alt='Ariadne Navigation'
                />
              </div>

              <h3>
                <Link href='/technology/ariadne-navigation'>
                  <a>
                    <u>{language.text_f}</u>
                  </a>
                </Link>
              </h3>

              <p>{language.text_g}</p>

              <Link href='/solutions/ariadne-navigation'>
                <a className='read-more-btn'>
                  <u>{language.text_c}</u>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div
              className='single-box bg-a2c037'
              role='button'
              onClick={pushNotification}
            >
              <div className='icon'>
                <img
                  src='/images/icons/push-notification.png'
                  alt='Push Notification'
                />
              </div>

              <h3>
                <Link href='/technology/ariadne-engagement'>
                  <a>
                    <u>{language.text_h}</u>
                  </a>
                </Link>
              </h3>

              <p>{language.text_i}</p>

              <Link href='/solutions/ariadne-engagement'>
                <a className='read-more-btn'>
                  <u>{language.text_c}</u>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
