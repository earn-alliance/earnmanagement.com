import React from 'react';
import Discord from '../../static/img/DiscordWhiteIcon';
import { ImageWrapper, DiscordLink } from '../css/homeIndex';
import HomeCarouselWrapper from '../components/HomeCarousel';

const ImageBox = () => (
  <>
    <ImageWrapper>
      <HomeCarouselWrapper />
      <DiscordLink>
        <Discord className="discord_icon" />
        Join Discord
      </DiscordLink>
    </ImageWrapper>
  </>
);
export default ImageBox;