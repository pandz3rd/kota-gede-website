// import React from 'react';

const SupportHero = () => {
  return (
    <section className="relative py-32 bg-slate-600 overflow-hidden z-10">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://asiantrails.b-cdn.net/wp-content/uploads/2021/03/yogyakarta-kota-gede-5-1600x900-2.jpg?auto=compress&cs=tinysrgb&w=1600"
          alt="Kotagede Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Support & Get Involved
        </h1>
        
        <div className="mb-16">
          <p className="text-xl text-white/90 mb-12">
            Contribute here
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={() => window.open("https://forms.gle/3QwHvqaugmhN2rBb8", "_blank", "noopener,noreferrer")} className="bg-white hover:bg-slate-100 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 min-w-[200px]">
              Join Volunteer
            </button>
            
            <button className="bg-white hover:bg-slate-100 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 min-w-[200px]">
              Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;