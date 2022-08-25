import React from 'react';
import Image from 'next/image';
import Twitter from 'public/svg/TwitterIcon';
import Facebook from 'public/svg/FacebookIcon';
import Discord from 'public/svg/DiscordIcon';
import {
  NavSection,
  LogoSection,
  SocialSection,
  WhitepaperTitle,
} from 'styles/pages/Home';

const Navbar = () => (
  <NavSection>
    <LogoSection>
      <Image
        priority
        src='/images/Logo.png'
        layout='intrinsic'
        width='122'
        height='50'
        alt='Earn'
      />
    </LogoSection>
    <SocialSection>
      <WhitepaperTitle>Whitepaper</WhitepaperTitle>
      <Twitter className='social_icon' />
      <Facebook className='social_icon' />
      <Discord className='social_icon' />
    </SocialSection>
    <hr />
  </NavSection>
);

export default Navbar;
