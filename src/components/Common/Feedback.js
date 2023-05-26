import React from "react";
import Slider from "react-slick";
import { ArrowRight, ArrowLeft } from "react-feather";
import Image from "next/image";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className='next-arrow slick-arrow' onClick={onClick}>
      <ArrowRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className='prev-arrow slick-arrow' onClick={onClick}>
      <ArrowLeft />
    </button>
  );
};

class Feedback extends React.Component {
  state = {
    imagesSlider: null,
    thumbnailsSlider: null,
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0,
  };

  componentDidMount() {
    this.setState({
      imagesSlider: this.slider1,
      thumbnailsSlider: this.slider2,
    });
  }

  
  renderSliderFullContent = () => {
    return DEFAULT_PROPS.map(({ name, profession, image, content }) => {
      return (
        <div key={name}>
          <div className='item'>
            <div className='single-feedback'>
              <div className='client-img'>
                <Image width={100} height={100} src={image} alt='image' />
              </div>
              <h3>{name}</h3>
              <span className='fw-bold'>{profession}</span>
              <span>{content}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  renderSliderImages = () => {
    return DEFAULT_PROPS.map(({ name, image }) => {
      return (
        <div key={name}>
          <div className='item'>
            <div className='img-fill'>
              <Image width={150} height={150} src={image} alt='client' />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    const sliderSettings1 = {
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      fade: true,
      autoplay: true,
      draggable: true,
      asNavFor: this.state.thumbnailsSlider,
      draggable: false,
      arrows: false,
      nextArrow: false,
      prevArrow: false,
    };
    

    const sliderSettings2 = {
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
      centerMode: true,
      draggable: false,
      focusOnSelect: true,
      asNavFor: this.state.imagesSlider,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: (current) => this.setState({ activeSlide2: current }),
    };

    return (
      <section className='feedback-area ptb-80 bg-f7fafd'>
        <div className='container'>
          <div className='section-title'>
            <h2>Trusted by industry leaders</h2>
            <div className='bar'></div>
            {/* <p>Ariadne works with the industry leaders to automate their processes and use their resources for the best returns.</p> */}
          </div>

          <div className='feedback-slides'>
            <div className='client-feedback'>
              <div>
                <Slider
                  ref={(slider) => (this.slider1 = slider)}
                  {...sliderSettings1}
                >
                  {this.renderSliderFullContent()}
                </Slider>
              </div>
            </div>

            <div className='client-thumbnails'>
              <div>
                <Slider
                  ref={(slider) => (this.slider2 = slider)}
                  {...sliderSettings2}
                >
                  {this.renderSliderImages()}
                </Slider>
              </div>
            </div>
          </div>
        </div>

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
      </section>
    );
  }
}

const DEFAULT_PROPS = [
  {
    name: "Praktiker",
    profession: "Dimitris Galanis, CEO",
    image: "/images/client-image/praktiker.png",
    content:
      "With 20% profit increase, we scale it immediately to all of our 17 stores.",
  },
  {
    name: "Ö-Center",
    profession: "Thomas Grabert, Managing Director",
    image: "/images/client-image/oecenter.png",
    content:
      "When they said: We are the Google Analytics of the physical world, they were not kidding!",
  },
  {
    name: "San Diego International Airport",
    profession: "Gina Jacobs, Business Development Manager",
    image: "/images/client-image/sandiego.png",
    content: "A truly plug-n-play solution! I did the installation myself!",
  },
  {
    name: "Weko",
    profession: "Rainer Latzlsperger, Executive Board",
    image: "/images/client-image/weko.png",
    content:
      "We recorded the ROI already in the first month with a 40% increase in product revenue!",
  },
  // {
  //     name: 'Gennady Korotkevich',
  //     profession: 'Sport Programmer',
  //     image: '/images/client-image/client3.jpg',
  //     content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  // },
  // {
  //     name: 'Petr Mitrichev',
  //     profession: 'Russian Programmer',
  //     image: '/images/client-image/client3.jpg',
  //     content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  // },
  // {
  //     name: 'Reid W. Barton',
  //     profession: 'Mathematics',
  //     image: '/images/client-image/client2.jpg',
  //     content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  // },
  {
    name: "Glasgow Airport",
    profession: "Gordon Bain, Group Head of Project Delivery",
    image: "/images/client-image/glasgow.png",
    content:
      "Real time notifications on waiting time provided by Ariadne surveyors, enabled Glasgow Airport to reduce our passengers' complaints, increase the time they spend in retail area and as a result, to increase our revenue through the extended period that customers spend in retail area, rather than queues.",
  },
];

export default Feedback;
