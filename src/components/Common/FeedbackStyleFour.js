import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleFour = () => {
    return (
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Tusted by Industry Leaders</h2>
                    <div className="bar"></div>
                </div>

                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="ml-feedback-slides"
                >
                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src="/images/client-image/praktiker.png" alt="image" />
                                <h3>Praktiker</h3>
                            </div>
                            <p>With 20% profit increase, we scale it immediately to all of our 16 stores.</p>

                            <div className="rating">
                            <span>Dimitris Galanis, CEO</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src="/images/client-image/oecenter.png" alt="image" />
                                <h3>Ö-Center</h3>
                            </div>
                            <p>When they said: We are the Google Analytics of the physical world, they were not kidding!</p>

                            <div className="rating">
                            <span>Thomas Grabert, Managing Director</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src="/images/client-image/sandiego.png" alt="image" />
                                <h3>San Diego Airport</h3>
                            </div>
                            <p>A truly plug-n-play solution! I did the installation myself!</p>

                            <div className="rating">
                            <span>Gina Jacobs, Business Development Manager</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src="/images/client-image/weko.png" alt="image" />
                                <h3>Weko</h3>
                            </div>
                            <p>We recorded the ROI already in the first month with a 40% increase in product revenue!</p>

                            <div className="rating">
                            <span>Rainer Latzlsperger, Executive Board</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.png" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.png" alt="shape" />
            </div>
            <div className="shape4">
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

export default FeedbackStyleFour;