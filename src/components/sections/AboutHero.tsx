// import React from 'react';

const AboutHero = () => {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-96 bg-gray-300 overflow-hidden">
        <img 
          src="http://3.bp.blogspot.com/-rZW0eHp0zIc/VLinLaIfm8I/AAAAAAAAIGo/R5wX7yaWbgM/s1600/kotagede.jpg"
          alt="Kotagede Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/20 to-gray-900/40"></div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 pb-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Kotagede
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none text-center space-y-5">
              <p className="text-gray-600 leading-relaxed">
                Step into a maze of narrow alleys where old Javanese houses stand quietly, silver artisans shape their craft by hand, and the aroma of traditional snacks drifts from small stalls. Time seems slower here, yet life stays vibrant.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This is Kotagede once the royal capital of the Mataram Kingdom, now a living heritage where history, craftsmanship, and community meet. Whether you come to explore ancient sites, taste local flavors, or discover silver artistry, Kotagede invites you to experience Yogyakarta in its most authentic form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 pb-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              KULONUWUN KOTAGEDE
            </h2>
            
            <div className="prose prose-slate prose-lg max-w-none text-center space-y-5">
              <p className="text-gray-600 leading-relaxed">
                The way we introduce Kotagede by KULONUWUN is just like when people knock the door for visiting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;