import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-cyan-900/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wide drop-shadow-2xl mb-6 font-worksans">
          Tamasya Cerita
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-8 max-w-2xl mx-auto">
          Menjelajahi cerita-cerita tersembunyi Kotagede bersama komunitas lokal
        </p>
        {/* <div className="h-1 w-32 bg-cyan-300 mx-auto rounded-full"></div> */}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-300/15 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-sky-300/15 rounded-full blur-xl"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;