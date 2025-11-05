// import React from 'react';

const Partner = () => {
  // Create array of 10 partner placeholders
  const partners = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Partner ${index + 1}`,
    logo: `https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=150`
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            Partner
          </h2>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-slate-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Partner;