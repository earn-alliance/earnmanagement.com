import React from 'react';
import { Container } from '../css/pageCss';
import Header from '../components/Header';
import ContentSection from '../components/ContentSection';
import Discord from '../../static/img/DiscordWhiteIcon';
import { DiscordLink } from '../../src/css/homeIndex';
const Home = () => (
  <>
    <div className='containerHome'>
      <Header />
      <ContentSection />
      <div className='foot-note'>
            Note: Earn Alliance and its subsidiaries are not affiliated with
            Axie Infinity.
          </div>
    </div>
  </>
);
export default Home;