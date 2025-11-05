// import React from 'react';
import Layout from '../components/layout/Layout';
import SupportHero from '../components/sections/SupportHero';
import SupportPartners from '../components/sections/SupportPartners';

const SupportPage = () => {
  return (
    <Layout>
      <SupportHero />
      <SupportPartners />
    </Layout>
  );
};

export default SupportPage;