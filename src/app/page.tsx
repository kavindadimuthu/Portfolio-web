import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  );
};

export default Home;

