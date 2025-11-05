import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              9 seri cerita
            </h3>
            {/* <div className="w-16 h-1 bg-sky-500 mb-6"></div> */}
            {/* <div className="w-16 h-1 bg-cyan-500 mb-6"></div> */}
            <p className="text-xl text-secondary mb-8 leading-relaxed font-medium">
              Dari kelahiran, kejayaan, hingga kematian
            </p>
          
            <div className="space-y-6 text-lg">
              <p className="text-text leading-relaxed">
                Kotagede, tempat kami tumbuh, berserikat dan hidup-bergantung dengan konteks: sosial, sejarah, komunitas dan pariwisata.
              </p>
            
              <p className="text-text leading-relaxed">
                Bersama kami - komunitas lokal Kotagede, mengajak anda tamasya berbagi genuine living memories tentang apa yang kami alami, pelajari dan rasakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;