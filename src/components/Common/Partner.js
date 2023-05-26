import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Partner = () => {

  
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Ready to talk?",
      text_b:"Our team is here to answer your question about Ariadne solutions.",
      text_c:"Contact Us",
      text_d:"Or, get started now with a free trial",
      text_e:"Industry leaders are moving forward with Ariadne.",
    },
    de: {
      text_a:"Bereit zum Reden?",
      text_b:"Unser Team ist hier, um Ihre Frage zu Ariadne-Lösungen zu beantworten.",
      text_c:"Kontaktieren Sie uns",
      text_d:"Oder beginnen Sie jetzt mit einer kostenlosen Testversion",
      text_e:"Industrienführer gehen mit Ariadne voran.",
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
    <>
      <div className='ready-to-talk'>
        <div className='container'>
          <h3>{language.text_a}</h3>
          <p>
          {language.text_b}
          </p>

          <Link href='/contact'>
            <a className='btn btn-primary'>{language.text_c}</a>
          </Link>

          <span>
            <Link href='/get-started'>
              <a>{language.text_d}</a>
            </Link>
          </span>
        </div>
      </div>

      <div className='partner-area partner-section'>
        <div className='container'>
          <h5>{language.text_e}</h5>

          <div className='partner-inner'>
            <div className='row justify-content-center'>
              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-101.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-101.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-102.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-102.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-103.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-103.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-104.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-104.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-105.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-105.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-106.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-106.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-107.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-107.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-117.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-117.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-118.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-118.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-108.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-108.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-109.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-109.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-110.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-110.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-111.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-111.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-112.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-112.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-113.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-113.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-114.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-114.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-115.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-115.png'
                    alt='partner'
                  />
                </a>
              </div>

              <div className='col-lg-2 col-md-3 col-6'>
                <a href='#' target='_blank'>
                  <img
                    src='/images/partner-img/partner-116.png'
                    alt='partner'
                  />
                  <img
                    src='/images/partner-img/partner-116.png'
                    alt='partner'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
