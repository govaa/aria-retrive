import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const BasicVideoCarousel = () => {
    return (
        <div className="feedback-area ptb-80">
            <div className="container">
                

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

                                <iframe src="https://www.youtube.com/embed/UObhsmW9RgM" title="Ariadne - Praktiker Testimonial" width="100%" height="320vh" layout="fixed" allowFullScreen></iframe>

                                <p>Dimitris Galanis, CEO of Praktiker</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">

                                <iframe src="https://www.youtube.com/embed/xFkPAAUrFAA" title="Ariadne - Weko Retailer Testimonial" width="100%" height="320vh" layout="fixed" allowFullScreen></iframe>
  
                                <p>Rainer Latzlsperger, Executive Board Member of Weko</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">

                                <iframe src="https://www.youtube.com/embed/tWzIRapoac8" title="Marienplatz Smart City Project" width="100%" height="320vh" layout="fixed" allowFullScreen></iframe>

                                <p>Marienplatz Smart City Project</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-feedback-item">

                                <iframe src="https://www.youtube.com/embed/LarUhK6GAmI" title="Ariadne Explainer video" width="100%" height="320vh" layout="fixed" allowFullScreen></iframe>

                                <p>Ariadne Explainer Video</p>
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

export default BasicVideoCarousel;
