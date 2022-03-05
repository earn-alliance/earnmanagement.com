import React from 'react';
import Discord from '../../static/img/DiscordWhiteIcon';
import { ImageWrapper, DiscordLink } from '../css/homeIndex';
import HomeCarouselWrapper from '../components/HomeCarousel';

const ImageBox = () => (
  <>
    <div className='image-wrapper'>
      <HomeCarouselWrapper />
      {/* <DiscordLink>
        <Discord className="discord_icon" />
        Join Discord
      </DiscordLink> */}
    </div>
  </>
);
export default ImageBox;