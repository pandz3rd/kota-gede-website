import { useRef } from 'react';

const Hero = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="http://3.bp.blogspot.com/-rZW0eHp0zIc/VLinLaIfm8I/AAAAAAAAIGo/R5wX7yaWbgM/s1600/kotagede.jpg"
          alt="Kotagede Heritage Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Centered */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight text-white">
            Living Heritage of{" "}
            <span className="relative inline-block">
              Yogyakarta
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
            </span>
          </h1>

          <button 
            onClick={handleExploreClick}
            className="bg-gradient-to-r from-gray-100 to-white hover:from-white hover:to-gray-100 text-gray-800 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none border border-gray-200"
          >
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
