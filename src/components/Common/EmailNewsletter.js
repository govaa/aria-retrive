import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";

export default () => {
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [errorMessage, setErrorMessage] = useState(null);

    
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
        text_a:"Signup for industry updates, free tools and much more!",
        text_b:"Business Email Address",
        text_c:"Signup",
    },
    de: {
        text_a:"Melden Sie sich für Branchen-Updates, kostenlose Tools und vieles mehr an!",
        text_b:"Geschäftliche E-Mail-Adresse",
        text_c:"Anmelden",
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


    const subscribe = async () => {
        setState("LOADING");
        setErrorMessage(null);
        try {
            const response = await axios.post("/api/emailnewsletter", {email});
            setState("SUCCESS");
        } catch (e) {
            setErrorMessage(e.response.data.error);
            setState("ERROR")
        }
    }

    return (
        <div className="domain-search-area pt-1 pb-80 mb-4">
            <div className="container">
                <div className="domain-search-content">
                    <h2>{language.text_a}</h2>
                    <form>
                        <input className="form-control" type="text" placeholder={language.text_b} value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <button type="button" disabled={state==="LOADING"} onClick={subscribe}>{language.text_c}</button>
                    </form>
                </div>
                {state==="ERROR" && (
                    <p className="domain-search-content text-danger">{errorMessage}</p>
                )}
                {state==="SUCCESS" && (
                    <p className="domain-search-content text-success">{language.text_b}</p>
                )}
            </div>
        </div>
    );
}