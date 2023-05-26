import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useRouter } from "next/router";

const VideoCarousel = () => {


  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Success Stories",
      text_b:"Understand your ",
      text_c:" journey with Ariadne's",
      text_d:"plug-and-play solution,",
      text_e:"low-cost -",
      text_f:"no app, no network connection, no cameras",
      text_g:", yet fully",
      text_h:"anonymous",
      text_i:"and over",
      text_j:"95% accurate!",
      text_k:"Customer Flow",
      text_l:"Dimitris Galanis, CEO of Praktiker",
      text_m:"Rainer Latzlsperger, Executive Board Member of Weko",
      text_n:"Hans-Peter Weiß, Direcor of City Marketing, Traunstein",
      text_o:"customer",
      text_p:"passenger",
      text_r:"visitor",
      text_s:"shopper",
    },
    de: {
      text_a:"Erfolgsgeschichten",
      text_b:"Verstehen Sie Ihre ",
      text_c:" Reise mit Ariadnes",
      text_d:"Plug-and-Play-Lösung,",
      text_e:"günstig -",
      text_f:"keine App, keine Netzwerkverbindung, keine Kameras",
      text_g:", noch vollständig",
      text_h:"anonym",
      text_i:"und mehr",
      text_j:"zu 95 % genau!",
      text_k:"Kundenfluss",
      text_l:"Dimitris Galanis, CEO von Praktiker",
      text_m:"Rainer Latzlsperger, Mitglied der Geschäftsführung der Weko",
      text_n:"Hans-Peter Weiß, Stadtmarketingleiter Traunstein",
      text_o:"Kunde",
      text_p:"Passagier",
      text_r:"Besucher",
      text_s:"Käufer",
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

  const [wordIndex, setWordIndex] = useState(0);
  const words = [language.text_o, language.text_p, language.text_r, language.text_s];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((index) => (index + 1) % words.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className='feedback-area ptb-80'>
      <div className='container'>
        <div className='section-title'>
          <h2>{language.text_a}</h2>
          <p className='pt-4' style={{ minHeight: "180px" }}>
            {language.text_b}{words[wordIndex]}{language.text_c}{" "}
            <span className='text-velvet'>
              <strong>{language.text_d}</strong>
            </span>{" "}
            {language.text_e}{" "}
            <span className='text-velvet'>
              <strong>{language.text_f}</strong>
            </span>
            {language.text_g}{" "}
            <span className='text-velvet'>
              <strong>{language.text_h}</strong>
            </span>{" "}
            {language.text_i}{" "}
            <span className='text-velvet'>
              <strong>{language.text_j}</strong>
            </span>
          </p>
          <div className='bar'></div>
        </div>

        <div className='testimonials-slides-box' style={{overflowY: "hidden"}}>
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className='testimonials-slides'
          >

            <SwiperSlide>
              <div className='single-feedback-item'>
                <iframe
                  loading='lazy'
                  src='/images/blog-image/visitortrajectories.gif'
                  title='Customer Flow'
                  width='105%'
                  height='370vh'
                  layout='fixed'
                ></iframe>

                <p>{language.text_k}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-feedback-item'>
                <iframe
                  loading='lazy'
                  src='https://www.youtube.com/embed/UObhsmW9RgM'
                  title='Ariadne - Praktiker Testimonial'
                  width='100%'
                  height='320vh'
                  layout='fixed'
                  allowFullScreen
                ></iframe>

                <p>{language.text_l}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-feedback-item'>
                <iframe
                  loading='lazy'
                  src='https://www.youtube.com/embed/ETAISK2zCa0'
                  title='Ariadne - Weko Retailer Testimonial'
                  width='100%'
                  height='320vh'
                  layout='fixed'
                  allowFullScreen
                ></iframe>

                <p>{language.text_m}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-feedback-item'>
                <iframe
                  loading='lazy'
                  src='https://www.youtube.com/embed/SaKZ4rpwdRU'
                  title='Traunstein Smart City Project'
                  width='100%'
                  height='320vh'
                  layout='fixed'
                  allowFullScreen
                ></iframe>

                <p>{language.text_n}</p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
                            <div className="single-feedback-item">

                                <iframe src="https://www.youtube.com/embed/LarUhK6GAmI" title="Ariadne Explainer video" width="100%" height="320vh" layout="fixed" allowFullScreen></iframe>

                                <p>Ariadne Explainer Video</p>
                            </div>
                        </SwiperSlide> */}
          </Swiper>
        </div>
      </div>

      {/* Shape Images */}
      <div className='shape1'>
        <img src='/images/shape1.png' alt='shape' />
      </div>
      <div className='shape2 rotateme'>
        <img src='/images/shape2.png' alt='shape' />
      </div>
      <div className='shape4'>
        <img src='/images/shape4.png' alt='shape' />
      </div>
      <div className='shape5'>
        <img src='/images/shape5.png' alt='shape' />
      </div>
      <div className='shape6 rotateme'>
        <img src='/images/shape4.png' alt='shape' />
      </div>
      <div className='shape7'>
        <img src='/images/shape4.png' alt='shape' />
      </div>
      <div className='shape8 rotateme'>
        <img src='/images/shape2.png' alt='shape' />
      </div>
    </div>
  );
};

export default VideoCarousel;
