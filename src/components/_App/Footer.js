import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Facebook,
  MapPin,
  Mail,
  Twitter,
  Youtube,
  Linkedin,
} from "react-feather";
import EmailNewsletter from "../Common/EmailNewsletter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();


  
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Technology",
      text_b:"Solutions",
      text_c:"Industries",
      text_d:"About Us",
      text_e:"Latest News",
      text_f:"Company",
      text_g:"About Us",
      text_h:"FAQ",
      text_i:"Contact Us",
      text_j:"Imprint",
      text_k:"Privacy Policy",
      text_l:"Address",
      text_m:"Munich, Germany",
      text_n:"Email: contact@ariadne.inc",
      text_o:"Phone: +49 (0) 174 407 96 75",
      text_p:"Copyright © 2023 Ariadne. All rights reserved by Ariadne Maps GmbH",
    },
    de: {
      text_a:"Technologie",
      text_b:"Lösungen",
      text_c:"Industrien",
      text_d:"Über uns",
      text_e:"Neueste Nachrichten",
      text_f:"Firma",
      text_g:"Über uns",
      text_h:"FAQ",
      text_i:"Kontaktieren Sie uns",
      text_j:"Impressum",
      text_k:"Datenschutzerklärung",
      text_l:"Adresse",
      text_m:"München, Deutschland",
      text_n:"E-Mail:",
      text_o:"Telefon:",
      text_p:"Alle Rechte vorbehalten von",
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
    <footer className='footer-area bg-f7fafd'>
      <div className='container'>
        <div className='row'>
          <EmailNewsletter />

          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <div className='logo'>
                <Link href='/'>
                  <a>
                    <img src='/images/logo.svg' alt='logo' width='80%' />
                  </a>
                </Link>
              </div>
              {/* <p>Ariadne is the operating system of commercial real estates that provides advanced, real-time customer analytics enabled with award winning accuracy and certified privacy compliance.</p> */}
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget pl-5'>
              <h3>{language.text_a}</h3>
              <ul className='list'>
                <li>
                  <Link href='/technology'>
                    <a>{language.text_a}</a>
                  </Link>
                </li>
                <li>
                  <Link href='/solutions'>
                    <a>{language.text_b}</a>
                  </Link>
                </li>
                <li>
                  <Link href='/industries'>
                    <a>{language.text_c}</a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a>{language.text_d}</a>
                  </Link>
                </li>
                <li>
                  <Link href='/blog'>
                    <a>{language.text_e}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <h3>{language.text_f}</h3>
              <ul className='list'>
                <li>
                  <Link href='/about'>
                    <a>{language.text_g}</a>
                  </Link>
                </li>
                <li>
                  <Link href='/faq'>
                    <a>{language.text_h}</a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <a>{language.text_i}</a>
                  </Link>
                </li>
                <li>
                  <Link href='/imprint'>
                    <a>{language.text_j}</a>
                  </Link>
                </li>
                <li>
                  <Link href='/privacy-policy'>
                    <a>{language.text_k}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <h3>{language.text_l}</h3>

              <ul className='footer-contact-info'>
                <li>
                  <MapPin />
                  Brecherspitzstr. 8, 81541 <br /> {language.text_m}
                </li>
                <li>
                  <Mail />
                  {language.text_n}{" "}
                  <a href='mailto:contact@ariadne.inc'></a>
                </li>
                <li>
                  <PhoneCall />
                  {language.text_o} <a href='tel:491744079675'></a>
                </li>
              </ul>
              <ul className='social-links'>
                <li>
                  <a
                    href='https://www.facebook.com/ariadnemaps/'
                    className='facebook'
                    target='_blank'
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/ariadne_maps'
                    className='twitter'
                    target='_blank'
                  >
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/user/pipelidisg/'
                    className='instagram'
                    target='_blank'
                  >
                    <Youtube />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/company/ariadne-maps/'
                    className='linkedin'
                    target='_blank'
                  >
                    <Linkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-12 col-md-12'>
            <div className='copyright-area'>
              <p>
                Copyright &copy; {currentYear} Ariadne. {language.text_p}{" "}
                <a href='https://ariadne.inc/' target='_blank'>
                  Ariadne Maps GmbH
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src='/images/map.png' className='map' alt='map' />

      {/* Shape Images */}
      <div className='shape1'>
        <img src='/images/shape1.png' alt='shape' />
      </div>
      <div className='shape8 rotateme'>
        <img src='/images/shape2.png' alt='shape' />
      </div>
    </footer>
  );
};

export default Footer;
