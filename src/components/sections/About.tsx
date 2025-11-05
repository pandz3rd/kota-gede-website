// import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about-section" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl pb-2 font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Welcome to Kotagede
            </h2>
            
            {/* Image pindahkan ke sini di mobile */}
            <div className="relative block lg:hidden">
              <div className="aspect-[4/3] bg-gray-300 rounded-2xl shadow-2xl overflow-hidden group border border-gray-200">
                <img 
                  src="https://kotagede.org/wp-content/uploads/2025/08/49137195976_7f0"
                  alt="Kotagede Heritage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="prose prose-slate prose-lg max-w-none space-y-3">
              <p className="text-gray-600 leading-relaxed">
                Step into a maze of narrow alleys where old Javanese houses stand quietly, silver artisans shape their craft by hand, and the aroma of traditional snacks drifts from small stalls. Time seems slower here, yet life stays vibrant.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This is Kotagede once the royal capital of the Mataram Kingdom, now a living heritage where history, craftsmanship, and community meet. Whether you come to explore ancient sites, taste local flavors, or discover silver artistry, Kotagede invites you to experience Yogyakarta in its most authentic form.
              </p>
            </div>

            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 group shadow-lg"
            >
              See More
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image for desktop */}
          <div className="relative hidden lg:block order-1 lg:order-2">
            <div className="aspect-[4/3] bg-gray-300 rounded-2xl shadow-2xl overflow-hidden group border border-gray-200">
              <img 
                src="https://kotagede.org/wp-content/uploads/2025/08/49137195976_7f0084d94e_b.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Kotagede Heritage"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;