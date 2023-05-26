import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleTwo = () => {
    return (
        <div className="feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Trusted by Industry Leaders</h2>
                    <div className="bar"></div>
                </div>

                <div className="testimonials-slides-box">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="testimonials-slides"
                    >
                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info align-items-center">
                                    <div className="image">
                                        <img 
                                            src="/images/client-image/praktiker.png"
                                            alt="image"
                                        />
                                    </div>

                                    <div className="title">
                                        <h3>Praktiker</h3>
                                        <span>Dimitris Galanis, CEO</span>
                                    </div>
                                </div>

                                <p>With 20% profit increase, we scale it immediately to all of our 16 stores.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info align-items-center">
                                    <div className="image">
                                        <img 
                                            src="/images/client-image/oecenter.png"
                                            alt="image"
                                        />
                                    </div>

                                    <div className="title">
                                        <h3>Ö-Center</h3>
                                        <span>Thomas Grabert, Managing Director</span>
                                    </div>
                                </div>

                                <p>When they said: We are the Google Analytics of the physical world, they were not kidding!</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info align-items-center">
                                    <div className="image">
                                        <img 
                                            src="/images/client-image/sandiego.png"
                                            alt="image"
                                        />
                                    </div>

                                    <div className="title">
                                        <h3>San Diego Airport</h3>
                                        <span>Gina Jacobs, Business Development Manager</span>
                                    </div>
                                </div>

                                <p>A truly plug-n-play solution! I did the installation myself!</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info align-items-center">
                                    <div className="image">
                                        <img 
                                            src="/images/client-image/weko.png"
                                            alt="image"
                                        />
                                    </div>

                                    <div className="title">
                                        <h3>Weko</h3>
                                        <span>Rainer Latzlsperger, Executive Board</span>
                                    </div>
                                </div>

                                <p>We recorded the ROI already in the first month with a 40% increase in product revenue!</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.png" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="shape" />
            </div>
            <div className="shape5">
                <img src="/images/shape5.png" alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src="/images/shape4.png" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.png" alt="shape" />
            </div>
        </div>
    );
}

export default FeedbackStyleTwo;
