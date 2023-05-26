import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper";
import YouTubePlayer from "react-player/youtube";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";
const MainBanner = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const isMobile = useMediaQuery("(max-width:600px)");

  const translations = {
    en: {
      text_a: "From People Flow To Actionable Insights",
      text_b: "Identify the moment when your visitors become your customers!",
      text_c: "Get Started",
    },
    de: {
      text_a: "Vom Personenfluss zu umsetzbaren Erkenntnissen",
      text_b:
        "Identifizieren Sie den Moment, in dem Ihre Besucher zu Ihren Kunden werden!",
      text_c: "Loslegen!",
    },
  };

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
      <div className='main-banner'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container'>
              <div className='row h-100 justify-content-center align-items-center'>
                <div className='col-lg-5'>
                  <div className='hero-content'>
                    <h1>{language.text_a}</h1>
                    <p>{language.text_b}</p>

                    <Link href='/contact'>
                      <a className='btn btn-primary'>{language.text_c}</a>
                    </Link>
                  </div>
                </div>

                <div
                  className='col-lg-6 offset-lg-1'
                  style={{ maxWidth: "100vw" }}
                >
                  <div
                    className='video-carousel-box '
                    style={{ maxWidth: "100vw" }}
                  >
                    <Swiper
                      spaceBetween={50}
                      style={{ maxWidth: "100vw" }}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
                      modules={[Pagination, Autoplay]}
                      className='video-carousel'
                    >
                      <SwiperSlide>
                        <Box
                          sx={{ py: isMobile ? 1 : 4 }}
                          className='hero-video-item'
                        >
                          <Image
                            src='/images/blog-image/visitortrajectories.gif'
                            width={600}
                            height={isMobile ? 575 : 320}
                          />
                        </Box>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Box
                          sx={{ py: isMobile ? 3 : 4 }}
                          className='hero-video-item'
                        >
                          <iframe
                            src='https://www.youtube.com/embed/ec5EaaxbbkE?rel=0'
                            title='Ariadne - Leader in Shopper Flow Analytics'
                            width='100%'
                            height={320}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          ></iframe>
                        </Box>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className='shape1'>
          <img src='/images/shape1.png' alt='shape' />
        </div>
        <div className='shape2 rotateme'>
          <img src='/images/shape2.png' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/images/shape3.png' alt='shape' />
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
    </>
  );
};

export default MainBanner;
