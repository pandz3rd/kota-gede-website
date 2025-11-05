// import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import VisitKotagede from '../components/sections/VisitKotagede';
// import Partner from '../components/sections/Partner';
import Contact from '../components/sections/Contact';
import SupportPartners from '../components/sections/SupportPartners';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <VisitKotagede />
      <SupportPartners />
      <Contact />
    </Layout>
  );
};

export default HomePage;