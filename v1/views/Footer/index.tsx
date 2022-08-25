import React from 'react';
import Image from 'next/image';
import Twitter from 'public/svg/TwitterIcon';
import Facebook from 'public/svg/FacebookIcon';
import Discord from 'public/svg/DiscordIcon';
import {
  NavSection,
  FooterSection,
  LogoSection,
  SocialSection,
  WhitepaperTitle,
  Navigation,
  Copyrights,
  NavContainer,
  Navlink,
} from 'styles/pages/Home';

const Footer = () => (
  <FooterSection>
    <LogoSection>
      <Image
        priority
        src='/images/Logo.png'
        layout='intrinsic'
        width='177'
        height='73'
        alt='Earn'
      />
      <SocialSection>
        <WhitepaperTitle>Whitepaper</WhitepaperTitle>
        <Twitter className='social_icon' />
        <Facebook className='social_icon' />
        <Discord className='social_icon' />
      </SocialSection>
    </LogoSection>
    <Navigation>
      <Copyrights>All Rights Reserved 2022 Earn Alliance</Copyrights>
      <NavContainer>
        <Navlink>Privacy Policy</Navlink>
        <Navlink>Terms of Use</Navlink>
        <Navlink>Cookies policy</Navlink>
      </NavContainer>
    </Navigation>
  </FooterSection>
);

export default Footer;
