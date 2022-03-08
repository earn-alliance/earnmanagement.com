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
      width='70em'
    />
    </a>
    <div className='navigationDiv'>
      <div className='nav-links'><a href="/blog" className='nav-links-anchor'>Blog</a></div>
      <div className='nav-links'><a href="https://roadmap.earnalliance.com" className='nav-links-anchor'>Roadmap</a></div>
      <div className='nav-links'><a href="/contact" className='nav-links-anchor'>Contact</a></div>
    </div>
    <div className='contact-div'>
      <div className='contact-discord'>
        <a href='https://discord.com/invite/EmGzug9FKd' target='_blank'>
        <Discord className="icon" />
        </a>
      </div>
      <div className='twitter-div'>
      <a href='https://twitter.com/earnalliance' target='_blank'>
        <Twitter className="icon" />
        </a>
      </div>
    </div>
  </div>
);
export default Header;