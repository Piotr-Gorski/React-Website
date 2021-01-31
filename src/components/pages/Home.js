import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import WhoWeAre from '../WhoWeAre.js';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <WhoWeAre />
      <Footer />
    </>
  );
}

export default Home;
