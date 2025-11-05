// import React from 'react';
import Layout from '../components/layout/Layout';
import ProgramsHero from '../components/sections/ProgramsHero';
import ProgramsContent from '../components/sections/ProgramsContent';
import Tamasya from '../components/sections/Tamasya';

const ProgramsPage = () => {
  return (
    <Layout>
      <ProgramsHero />
      <ProgramsContent />
      <Tamasya />
    </Layout>
  );
};

export default ProgramsPage;