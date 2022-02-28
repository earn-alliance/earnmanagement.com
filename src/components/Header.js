import React from 'react';
// import { Link } from 'react-router-dom';
import {
  HeadSection,
  Navigations,
  NavLink,
  Contact,
  ContactDiscord,
  ContactTwitter,
} from '../css/pageCss';
import LogoImage from '../../static/img/EarnHome.png'
import Discord from '../../static/img/DiscordIcon';
import Twitter from '../../static/img/TwitterIcon';
const Header = () => (
  <HeadSection>
    <img
      src={LogoImage}
      layout="intrinsic"
      width="81"
      height="79"
      alt="Earn Management"
    />
    <Navigations>
      <NavLink>Blog</NavLink>
      <NavLink>Roadmap</NavLink>
      <NavLink>Contact</NavLink>
    </Navigations>
    <Contact>
      <ContactDiscord>
        <Discord className="icon" />
      </ContactDiscord>
      <ContactTwitter>
        <Twitter className="icon" />
      </ContactTwitter>
    </Contact>
  </HeadSection>
);
export default Header;