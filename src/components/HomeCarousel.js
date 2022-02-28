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
  <HomeImageWrapper>
    <Carousel
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs
      emulateTouch
      useKeyboardArrows
      interval={3000}
      infiniteLoop
    >
      {CarouselData.map((item) => (
        <CarouselImage>
          <HomeImageText>
            <HomeImagescreen>
              <img
                className="carousel-img"
                src={item?.src}
                alt=" "
                layout="intrinsic"
                width={item?.width}
                height={item?.height}
              />
            </HomeImagescreen>
            <HomeText>{item?.text}</HomeText>
            <HomePara>{item?.para}</HomePara>
          </HomeImageText>
        </CarouselImage>
      ))}
    </Carousel>
  </HomeImageWrapper>
);

export default HomeCarouselWrapper;
