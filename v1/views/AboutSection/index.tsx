import React from 'react';
import Image from 'next/image';
import Discord from 'public/svg/DiscordButtonIcon';
import Arrow from 'public/svg/DesignSymbol';
import {
  AboutContainer,
  DiscoverTitle,
  AboutDescription,
} from 'styles/pages/Home';
import Button from 'components/button';

const AboutSection = () => (
  <>
    <AboutContainer>
      <Image
        priority
        src='/images/Logo.png'
        layout='intrinsic'
        width='255'
        height='105'
        alt='Earn'
      />
      <DiscoverTitle>
        <Arrow className='arrow' />
        DISCOVER OUR <span className='universe'>UNIVERSE</span>
        <Arrow />
      </DiscoverTitle>
      <AboutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
        hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod
        tortor vestibulum ut. In lobortis at justo in efficitur.
      </AboutDescription>
      <Button
        content={
          <>
            <Discord className='discord_icon' />
            Join Our Discord
          </>
        }
      />
      <hr />
    </AboutContainer>
  </>
);

export default AboutSection;
