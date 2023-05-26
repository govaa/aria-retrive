import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Partner = () => {
    
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
        text_a:"Privacy First!",
        text_b:"Our experience shows that most customers are happy to opt-in and share information to benefit from the promotions and the additional services. At Ariadne, we put the privacy of customers first and establish a reliable relationship between the customers and the businesses.",
        text_c:"Data Lifecycle",
    },
    de: {
        text_a:"Privatsphäre geht vor!",
        text_b:"Unsere Erfahrung zeigt, dass sich die meisten Kunden gerne anmelden und Informationen teilen, um von den Werbeaktionen und den zusätzlichen Dienstleistungen zu profitieren. Bei Ariadne stellen wir die Privatsphäre der Kunden an erste Stelle und bauen eine zuverlässige Beziehung zwischen den Kunden und den Unternehmen auf.",
        text_c:"Datenlebenszyklus",
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
            <div className="ready-to-talk pb-5">
                <div className="container">
                    <h3>{language.text_a}</h3>
                    <p className="pt-2">{language.text_b}</p>
                    
                    <Link href="/data-lifecycle">
                        <a className="btn btn-primary">{language.text_c}</a>
                    </Link>
                </div>
            </div>
        </>
    )
 
}

export default Partner;  