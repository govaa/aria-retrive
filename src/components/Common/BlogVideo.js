import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Blog from "src/pages/blog";

const BlogVideo = () => {
  return (
    <div className='feedback-area ptb-80'>
      <div className='container'>
        <div className='section-title'>
          <h2>Webinar Recording</h2>
          <div className='bar'></div>
        </div>

        <div className='testimonials-slides-box'>
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
                  src='https://www.youtube.com/embed/AKZEIYqrVfs'
                  title='Ariadne - Praktiker Testimonial'
                  width='100%'
                  height='320vh'
                  layout='fixed'
                  allowFullScreen
                ></iframe>

                <p>Georgios Pipelidis, Verlin Youd</p>
              </div>
            </SwiperSlide>
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

export default BlogVideo;
