import React from 'react';

const GlimpseSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-bg from-white to-sky-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          Glimpse of Tamasya Cerita
        </h2>
        {/* <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div> */}
        <p className="text-xl md:text-2xl text-secondary font-medium tracking-wide leading-relaxed">
          Local communities shows and tells local stories
        </p>
      </div>
    </section>
  );
};

export default GlimpseSection;