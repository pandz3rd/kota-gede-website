// import React from 'react';
import Layout from '../components/layout/Layout';
import AboutHero from '../components/sections/AboutHero';
import HistoryHeritage from '../components/sections/HistoryHeritage';
import CraftCulture from '../components/sections/CraftCulture';
import CommunityToday from '../components/sections/CommunityToday';

const AboutPage = () => {
  return (
    <Layout>
      <AboutHero />
      <HistoryHeritage />
      <CraftCulture />
      <CommunityToday />
    </Layout>
  );
};

export default AboutPage;