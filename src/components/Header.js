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
  <div className='header-container'>
    <a href="/">
    <img
      src={LogoImage}
      layout="intrinsic"
      className='header-image'
      alt="Earn Management"
    />
    </a>
    <div className='navigationDiv'>
      <div className='nav-links'><a href="/blog" className='nav-links-anchor'>Blog</a></div>
      <div className='nav-links'><a href="https://roadmap.earnmanagement.com" className='nav-links-anchor'>Roadmap</a></div>
      <div className='nav-links'><a href="/contact" className='nav-links-anchor'>Contact</a></div>
    </div>
    <div className='contact-div'>
      <div className='contact-discord'>
        <Discord className="icon" />
      </div>
      <div className='twitter-div'>
        <Twitter className="icon" />
      </div>
    </div>
  </div>
);
export default Header;