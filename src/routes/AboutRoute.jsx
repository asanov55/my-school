import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { About } from '../components/About/About';
import { Footer } from '../components/Footer/Footer';

export const AboutRoute = () => {
  return (
    <>
      <Navigation />
      <About />
      <Footer />
    </>
  );
};
