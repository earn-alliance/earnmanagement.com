import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  HomeText,
  HomeImageWrapper,
  HomePara,
  HomeImageText,
  CarouselImage,
  HomeImagescreen,
} from '../css/CarouselHomeCarousel';
import CarouselData from '../components/HomeCarouselData';

const HomeCarouselWrapper = () => (
  <div className='home-image-wrapper'>
    <Carousel
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      emulateTouch
      useKeyboardArrows
      interval={3000}
      infiniteLoop
    >
      {CarouselData.map((item) => (
        <div>
          {/* <HomeImageText> */}
            {/* <HomeImagescreen> */}
              <img
                className="carousel-img"
                src={item?.src}
                alt=" "
                layout="intrinsic"
                // width={item?.width}
                // height={item?.height}
              />
              <div className="legend">
              <h4 className='home-carousel-text'>{item?.text}</h4>
            <p className='home-carousel-para'>{item?.para}</p>
              </div>
              
            {/* </HomeImagescreen> */}
            
          {/* </HomeImageText> */}
        </div>
      ))}
    </Carousel>
  </div>
);

export default HomeCarouselWrapper;
