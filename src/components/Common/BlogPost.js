import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "react-feather";
import Router from "next/router";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BlogPost = () => {
  
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"The News from Our Blog",
      text_b:"Industry udates, insightful articles, case studies, free tools and much more.",
      text_c:"September 20, 2022",
      text_d:"How to Get the Most Out of People Counting",
      text_by:"By",
      text_f:"People Counting is the technology that gives physical businesses the ability to track their visitors in real-time. Even though many businesses are already familiar with people counters and have a people counter system...",
      text_g:"Read More",
      text_h:"September 13, 2022",
      text_i:"How Can Physical Stores Win Back on The Competition?",
      text_j:"E-commerce has challenged the way physical retailers have been operating thus far. Better comprehension of the customer, targeted service and technology has enabled online stores to gain a competitive edge against...",
      text_k:"Read More",
      text_l:"8 Data-Driven Steps to Re-Design Your Store",
      text_m:"In this digital era of retail stores and E-Commerce, still, 73.4% of the customers prefer to shop in physical retail stores. Hence, It is crucial to design your retail store in the right way to optimize your space, increase customer-product...",
      text_n:"Read More",
      text_o:"September 07, 2022",
    },
    de: {
      text_a:"Die Neuigkeiten aus unserem Blog",
      text_b:"Branchen-Updates, aufschlussreiche Artikel, Fallstudien, kostenlose Tools und vieles mehr.",
      text_c:"20. September 2022",
      text_d:"Wie man das Beste aus der Personenzählung herausholt",
      text_by:"Von",
      text_f:"People Counting ist die Technologie, die physischen Unternehmen die Möglichkeit gibt, ihre Besucher in Echtzeit zu verfolgen. Auch wenn viele Unternehmen bereits mit Personenzählern vertraut sind und ein Personenzählersystem haben...",
      text_g:"Weiterlesen",
      text_h:"13. September 2022",
      text_i:"Wie können physische Geschäfte die Konkurrenz zurückerobern?",
      text_j:"E-Commerce hat die bisherige Arbeitsweise des stationären Einzelhandels in Frage gestellt. Besseres Verständnis für den Kunden, zielgerichteter Service und Technologie haben es Online-Shops ermöglicht, einen Wettbewerbsvorteil gegenüber...",
      text_k:"Weiterlesen",
      text_l:"8 datengesteuerte Schritte zur Neugestaltung Ihres Shops",
      text_m:"In diesem digitalen Zeitalter von Einzelhandelsgeschäften und E-Commerce ziehen es immer noch 73,4 % der Kunden vor, in physischen Einzelhandelsgeschäften einzukaufen. Daher ist es entscheidend, Ihr Einzelhandelsgeschäft richtig zu gestalten, um Ihre Fläche zu optimieren und zu vergrößern Kunden-Produkt...",
      text_n:"Weiterlesen",
      text_o:"07. September 2022",
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

  const firstBlog = () => {
    Router.push({
      pathname: "/blog/people-counting/",
    });
  };
  const secondBlog = () => {
    Router.push({
      pathname: "/blog/customer-journey-in-winner-store/",
    });
  };
  const thirdblog = () => {
    Router.push({
      pathname: "/blog/redesign-retail-store/",
    });
  };

  return (
    <div className='blog-area pt-80 pb-50'>
      <div className='container'>
        <div className='section-title'>
          <h2>{language.text_a}</h2>
          <div className='bar'></div>
          <p>
          {language.text_b}
          </p>
        </div>

        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6'>
            <div className='single-blog-post' role='button' onClick={firstBlog}>
              <div className='blog-image'>
                <Link href='/blog-details'>
                  <a>
                    <Image
                      priority={false}
                      src='/images/blog-image/exhibition.jpg'
                      alt='image'
                      height={350}
                      width={500}
                    />
                  </a>
                </Link>

                <div className='date'>
                  <Calendar /> {language.text_c}
                </div>
              </div>

              <div className='blog-post-content'>
                <h3>
                  <Link href='/blog/people-counting'>
                    <a>{language.text_d}</a>
                  </Link>
                </h3>

                <span>
                {language.text_by} <a href='/blog/people-counting'>Hasim Koc</a>
                </span>

                <p>
                {language.text_f}
                </p>

                <Link href='/blog/people-counting'>
                  <a className='read-more-btn'>
                  {language.text_g} <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div
              className='single-blog-post'
              role='button'
              onClick={secondBlog}
            >
              <div className='blog-image'>
                <Link href='/blog-details'>
                  <a>
                    <Image
                      priority={false}
                      src='/images/blog-image/store.jpg'
                      alt='image'
                      height={350}
                      width={500}
                    />
                  </a>
                </Link>

                <div className='date'>
                  <Calendar /> {language.text_h}
                </div>
              </div>

              <div className='blog-post-content'>
                <h3>
                  <Link href='/blog/customer-journey-in-winner-store'>
                    <a>{language.text_i}</a>
                  </Link>
                </h3>

                <span>
                  Von{" "}
                  <a href='/blog/customer-journey-in-winner-store'>Hasim Koc</a>
                </span>

                <p>
                {language.text_j}
                </p>

                <Link href='/blog/customer-journey-in-winner-store'>
                  <a className='read-more-btn'>
                  {language.text_k} <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='single-blog-post' role='button' onClick={thirdblog}>
              <div className='blog-image'>
                <Link href='/blog-details'>
                  <a>
                    <Image
                      priority={false}
                      src='/images/blog-image/redesignyourstore.jpg'
                      alt='image'
                      height={350}
                      width={500}
                    />
                  </a>
                </Link>

                <div className='date'>
                  <Calendar /> {language.text_o}
                </div>
              </div>

              <div className='blog-post-content'>
                <h3>
                  <Link href='/blog/redesign-retail-store'>
                    <a>{language.text_l}</a>
                  </Link>
                </h3>

                <span>
                {language.text_by} <a href='redesign-retail-store'>Marketing Team</a>
                </span>

                <p>
                {language.text_m}
                </p>

                <Link href='/blog/redesign-retail-store'>
                  <a className='read-more-btn'>
                  {language.text_n} <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
