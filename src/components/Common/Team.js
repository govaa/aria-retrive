import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Team = () => {

  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
        text_a:"Ariadne Team",
        text_b:"Meet the Ariadne team from all over the world!",
    },
    de: {
        text_a:"Ariadne-Team",
        text_b:"Lernen Sie das Ariadne-Team aus der ganzen Welt kennen!",
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
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>{language.text_a}</h2>
                    <div className="bar"></div>
                    <p>{language.text_b}</p>
                </div>
            </div>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1500: {
                        slidesPerView: 5,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="team-slider"
            >
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/georgios.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Dr. Georgios Pipelidis</h3>
                                <span>CEO & Co-Founder</span>
                            </div>

                            {/* <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul> 

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p> */}
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/nikos.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Nikos Tsiamitros</h3>
                                <span>CTO & Co-Founder</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/nam.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Nam Le Duc</h3>
                                <span>Senior Software Engineer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/hasim.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Hasim Koc</h3>
                                <span>Marketing Manager</span>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/mustafa.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Mustafa Parlak</h3>
                                <span>Business Development Manager</span>
                            </div>
{/* 
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p> */}
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/wasiq.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Wasiq Rumaney</h3>
                                <span>Senior Data Scientist</span>
                            </div>

                            {/* <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p> */}
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/pati.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Pati Flannery</h3>
                                <span>Strategic Partnerships, N. America</span>
                            </div>

                            {/* <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p> */}
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/francesco.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Francesco Vasta</h3>
                                <span>Global Key Account Manager</span>
                            </div>

                            {/* <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p> */}
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/victoria.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Victoria Tsiamitrou</h3>
                                <span>Country Manager (Greece R&D)</span>
                            </div>

                            {/* <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p> */}
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/georgek.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>George Kanellopoulos</h3>
                                <span>Head of Finance</span>
                            </div>

                            {/* <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/kostast.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Kostas Theocharoulis</h3>
                                <span>Data Engineer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/thanasios.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Athanasios Brianis</h3>
                                <span>UX Data Engineer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/kostasz.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Kostas Ziampakas</h3>
                                <span>Onboarder</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/kostask.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Kostas Kitsikidis</h3>
                                <span>Key Account Manager</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/shahabuddin.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Md Shahabuddin</h3>
                                <span>Embedded Systems Engineer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/precious.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Precious Adipere</h3>
                                <span>Procurement Specialist</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/mahade.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Mahade Sarkar</h3>
                                <span>Embedded Systems Engineer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/kristina.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Kristina Kllogjeri</h3>
                                <span>Administrative Assistant</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/elli.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Elli Dimopoulou</h3>
                                <span>Data Scientist</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/roman.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Roman Kees</h3>
                                <span>Data Engineer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/aykut.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Aykut Öngel</h3>
                                <span>Senior Embedded Software Engineer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/max.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Max Dorfmeister</h3>
                                <span>Key Account Manager</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/sebastian.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Sebastian Deppe</h3>
                                <span>Vice President DACH</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/ted.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Ted Polykandriotis</h3>
                                <span>Business Officer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/sean.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Sean-Ethan Sahai</h3>
                                <span>Key Account Manager</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/indra.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Indraditya Bhattacharyya</h3>
                                <span>Data Scientist Intern</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/panagiotis.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Panagiotis Chatzimichos</h3>
                                <span>Software Engineer Intern</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                   
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/govarthan.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Govarthan Natarajan</h3>
                                <span>Digital Marketing Intern</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/stavroula.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Stavroula Sarri</h3>
                                <span>Data Scientist Intern</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/rizanne.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Rizanne Elbakly</h3>
                                <span>ML & Localization Engineer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/antonis.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Antonis Vogiatris</h3>
                                <span>Data Scientist</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/andy.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>An T. Nguyen</h3>
                                <span>Frontend Developer Intern</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/georgeg.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>George Georgiopoulos</h3>
                                <span>Chief Commercial Officer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/verlin.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Verlin Youd</h3>
                                <span>SVP of Sales America</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/kalliopi.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Kalliopi Pipelidou</h3>
                                <span>Graphic Designer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/dimitris.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Dimitris Makris</h3>
                                <span>Head of Customer Success (East)</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/karan.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Karan Shankar</h3>
                                <span>Business Development Manager India</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/tsotsos.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Georgios Tsotsos</h3>
                                <span>Head of Data Science</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/haris.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Haris Latinopoulos</h3>
                                <span>Senior Data Scientist</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/yannis.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Yannis Chatzimichos</h3>
                                <span>Head of DevOps</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/thanh.png" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Thanh Cong Nguyen</h3>
                                <span>Software Developer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Team;
