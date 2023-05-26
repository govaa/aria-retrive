import React from 'react';
import * as Icon from 'react-feather';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ContactInfo = () => {
    
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
        text_a:"Mail Here",
        text_b:"Visit Here",
        text_c:"Call Here",
    },
    de: {
        text_a:"Hier mailen",
        text_b:"Besuchen Sie hier",
        text_c:"Hier anrufen",
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
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Mail />
                            </div>
                            <h3>{language.text_a}</h3>
                            <p><a href="mailto:contact@ariadne.inc">contact@ariadne.inc</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>{language.text_b}</h3>
                            <p>Brecherspitzstraße 8, 81541, Munich, Germany</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Phone />
                            </div>
                            <h3>{language.text_c}</h3>
                            <p><a href="tel:+491744079675">+49 174 407 9675</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  