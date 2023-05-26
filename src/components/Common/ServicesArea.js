import React from "react";
import {
  Users,
  Globe,
  File,
  Folder,
  TrendingUp,
  Cloud,
  Monitor,
  Mail,
  Database,
  ArrowRight,
  Layout,
  Code,
  Smartphone,
  Percent,
  ShoppingCart,
  CheckCircle,
} from "react-feather";
import { Suspense } from "react";
const Lottie = dynamic(() => import("lottie-react"), { suspense: true });
import Link from "next/link";
import navigation from "public/animations/navigation.json";
import analytics from "public/animations/analytics.json";
import engagement from "public/animations/engagement.json";
import Router from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ServicesArea = () => {


  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Ariadne Analytics",
      text_b:"Obtain people counting, heatmaps, loyalty rate and more! Ariadne Analytics helps review your performance in real time. It provides essential KPIs such as:",
      text_c:"People counting",
      text_d:"Conversion ratios",
      text_e:"Dwell time",
      text_f:"Alerts",
      text_g:"Heatmaps",
      text_h:"Transition between areas",
      text_i:"Number of people by area",
      text_j:"Average duration by area",
      text_k:"Learn More",
      text_l:"Ariadne Navigation",
      text_m:"Engage with your visitors in the right place at the right time. Ariadne can help navigate your customers inside and outside your store. Your visitors can always find the products they are looking for, while you are establishing an app-free channel of communication inside your premises.",
      text_n:"Browser-based navigation",
      text_o:"Award winning accuracy",
      text_p:"Efficient ad placement",
      text_r:"Multi storey differentiation",
      text_s:"No app needed",
      text_t:"No infrastructure needed",
      text_u:"Seamless customer experience",
      text_v:"Voice-guided navigation",
      text_y:"Learn More",
      text_z:"Ariadne Engagement",
      text_aa:"The relationship between the business and its customers is elevated through engagement. Ariadne Engagement allows you to give personalized offers and valuable product information to your customers in real time when they need it the most.",
      text_bb:"Build CRM tool",
      text_cc:"Push notifications",
      text_dd:"Collect leads",
      text_ee:"Send personalized offers",
      text_ff:"Real-time",
      text_gg:"Targeted marketing",
    },
    de: {
      text_a:"Ariadne Analytics",
      text_b:"Erhalten Sie Personenzählung, Heatmaps, Loyalitätsrate und mehr! Ariadne Analytics hilft Ihnen, Ihre Leistung in Echtzeit zu überprüfen. Es bietet wichtige KPIs wie:",
      text_c:"Personenzählung",
      text_d:"Umrechnungsverhältnisse",
      text_e:"Verweilzeit",
      text_f:"Benachrichtigungen",
      text_g:"Heatmaps",
      text_h:"Übergang zwischen Bereichen",
      text_i:"Anzahl der Personen nach Gebiet",
      text_j:"Durchschnittliche Dauer nach Gebiet",
      text_k:"Mehr erfahren",
      text_l:"Ariadne-Navigation",
      text_m:"Interagieren Sie mit Ihren Besuchern zur richtigen Zeit am richtigen Ort. Ariadne kann Ihnen dabei helfen, Ihre Kunden innerhalb und außerhalb Ihres Geschäfts zu navigieren. Ihre Besucher können immer die Produkte finden, nach denen sie suchen, während Sie einen App-freien Kanal einrichten Kommunikation innerhalb Ihrer Räumlichkeiten.",
      text_n:"Browserbasierte Navigation",
      text_o:"Preisgekrönte Genauigkeit",
      text_p:"Effiziente Anzeigenplatzierung",
      text_r:"Mehrgeschossige Differenzierung",
      text_s:"Keine App erforderlich",
      text_t:"Keine Infrastruktur erforderlich",
      text_u:"Nahtloses Kundenerlebnis",
      text_v:"Sprachgeführte Navigation",
      text_y:"Mehr erfahren",
      text_z:"Ariadne-Engagement",
      text_aa:"Die Beziehung zwischen dem Unternehmen und seinen Kunden wird durch Engagement gestärkt. Mit Ariadne Engagement können Sie Ihren Kunden in Echtzeit personalisierte Angebote und wertvolle Produktinformationen geben, wenn sie diese am dringendsten benötigen.",
      text_bb:"CRM-Tool erstellen",
      text_cc:"Push-Benachrichtigungen",
      text_dd:"Leads sammeln",
      text_ee:"Personalisierte Angebote senden",
      text_ff:"Echtzeit",
      text_gg:"Gezieltes Marketing",
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

  const ariadneAnalytics = () => {
    Router.push({
      pathname: "/technology/ariadne-analytics",
    });
  };
  const ariadneNavigation = () => {
    Router.push({
      pathname: "/technology/ariadne-navigation",
    });
  };
  const ariadneEngagement = () => {
    Router.push({
      pathname: "/technology/ariadne-engagement",
    });
  };

  return (
    <>
      <div className='services-area ptb-80 bg-f7fafd'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12 services-content'>
              <div className='section-title'>
                <h2>
                  <a href='/technology/ariadne-analytics'>{language.text_a}</a>
                </h2>
                <div className='bar'></div>
                <p>{language.text_b}</p>
              </div>

              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='box' role='button' onClick={ariadneAnalytics}>
                    <Users /> {language.text_c}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='box' role='button' onClick={ariadneAnalytics}>
                    <Globe /> {language.text_d}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='box' role='button' onClick={ariadneAnalytics}>
                    <File /> {language.text_e}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='box' role='button' onClick={ariadneAnalytics}>
                    <TrendingUp /> {language.text_f}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='box' role='button' onClick={ariadneAnalytics}>
                    <Folder /> {language.text_g}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='box' role='button' onClick={ariadneAnalytics}>
                    <Monitor /> {language.text_h}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='box' role='button' onClick={ariadneAnalytics}>
                    <Mail /> {language.text_i}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='box' role='button' onClick={ariadneAnalytics}>
                    <Cloud /> {language.text_j}
                  </div>
                </div>
              </div>

              <Link href='/technology/ariadne-analytics'>
                <a className='btn btn-primary mt-4'>
                {language.text_k} <ArrowRight />
                </a>
              </Link>
            </div>

            <div
              className='col-lg-6 col-md-12 services-right-image'
              style={{ width: "500px" }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Lottie animationData={analytics} loop={true} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <div className='services-area ptb-80'>
        <div className='container'>
          <div className='row h-100 justify-content-center align-items-center'>
            <div
              className='col-lg-6 col-md-12 services-left-image'
              style={{ width: "500px" }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Lottie animationData={navigation} loop={true} />
              </Suspense>
            </div>

            <div className='col-lg-6 col-md-12 services-content'>
              <div className='section-title'>
                <h2>
                  <a href='/technology/ariadne-navigation'>
                  {language.text_l}
                  </a>
                </h2>
                <div className='bar'></div>
                <p>{language.text_m}</p>
              </div>

              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneNavigation}
                  >
                    <Layout /> {language.text_n}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneNavigation}
                  >
                    <Code /> {language.text_o}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneNavigation}
                  >
                    <Smartphone /> {language.text_p}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneNavigation}
                  >
                    <Code /> {language.text_r}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneNavigation}
                  >
                    <Smartphone /> {language.text_s}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneNavigation}
                  >
                    <Percent /> {language.text_t}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneNavigation}
                  >
                    <ShoppingCart /> {language.text_u}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneNavigation}
                  >
                    <CheckCircle /> {language.text_v}
                  </div>
                </div>
              </div>

              <Link href='/technology/ariadne-navigation'>
                <a className='btn btn-primary mt-4'>
                {language.text_y} <ArrowRight />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='services-area ptb-80 bg-f7fafd'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12 services-content'>
              <div className='section-title' id='engagement'>
                <h2>
                  <a href='/technology/ariadne-engagement'>
                  {language.text_z}
                  </a>
                </h2>
                <div className='bar'></div>
                <p>{language.text_aa}</p>
              </div>

              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneEngagement}
                  >
                    <Database /> {language.text_bb}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneEngagement}
                  >
                    <Globe /> {language.text_cc}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneEngagement}
                  >
                    <File /> {language.text_dd}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneEngagement}
                  >
                    <TrendingUp /> {language.text_ee}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneEngagement}
                  >
                    <Folder /> {language.text_ff}
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div
                    className='box'
                    role='button'
                    onClick={ariadneEngagement}
                  >
                    <Monitor /> {language.text_gg}
                  </div>
                </div>
              </div>

              <Link href='/technology/ariadne-engagement'>
                <a className='btn btn-primary mt-4'>
                {language.text_k} <ArrowRight />
                </a>
              </Link>
            </div>

            <div
              className='col-lg-6 col-md-12 services-right-image'
              style={{ width: "500px" }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Lottie animationData={engagement} loop={true} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
