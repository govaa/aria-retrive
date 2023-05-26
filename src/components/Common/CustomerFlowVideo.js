import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const CustomerFlowVideo = () => {

  return (
    <div className='feedback-area ptb-80'>
      <div className='container'>
        <div className='section-title'>
          <h2>Besucherströme</h2>
          
          <div className='bar'></div>
        </div>

        <div className='testimonials-slides-box'>
        <div className='single-feedback-item'>
                <iframe
                  loading='lazy'
                  src='https://www.youtube.com/embed/vinKZgXlaS8'
                  title='Customer Flow | Ariadne'
                  height='450vh'
                  width="100%"
                  layout='fixed'
                  allowFullScreen
                ></iframe>
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

export default CustomerFlowVideo;
