import React from 'react';
import { Container } from '../styles/pages/Home';
import Navbar from 'views/Navbar';
import AboutSection from 'views/AboutSection';
import Mission from 'views/OurMission';
import Footer from 'views/Footer';

const HomePage = () => (
  <Container>
    <Navbar />
    <AboutSection />
    <Mission />
    <Footer />
  </Container>
);

export default HomePage;
