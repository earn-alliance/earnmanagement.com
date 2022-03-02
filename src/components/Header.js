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
      
      alt="Earn Management"
    />
    <Navigations>
      <NavLink><a href="/blog">Blog</a></NavLink>
      <NavLink><a href="https://roadmap.earnmanagement.com">Roadmap</a></NavLink>
      <NavLink><a href="/contact">Contact</a></NavLink>
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