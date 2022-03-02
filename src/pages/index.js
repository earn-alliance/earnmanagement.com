import React from 'react';
import { Container } from '../css/pageCss';
import Header from '../components/Header';
import ContentSection from '../components/ContentSection';
import Discord from '../../static/img/DiscordWhiteIcon';
import { DiscordLink } from '../../src/css/homeIndex';
const Home = () => (
  <>
    <Container>
      <Header />
      <ContentSection />
    </Container>
  </>
);
export default Home;