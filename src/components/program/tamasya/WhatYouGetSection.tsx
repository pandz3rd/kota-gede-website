import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatYouGetSection: React.FC = () => {
  const benefits = [
    "Teman jalan warga lokal",
    "Merchandise", 
    "Loyalty card",
    "Dokumentasi"
  ];

  return (
    <section id="what-you-get" className="py-20 px-6 bg-gradient-to-b from-bg to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What you get
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {/* Top Section - Image and Benefits List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Image - Takes more than 50% */}
            <div className="lg:col-span-7">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="What you get"
                  className="w-full aspect-video object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>

            {/* Benefits List - Takes remaining space */}
            <div className="lg:col-span-5 space-y-6">
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-800">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                    <span className="font-medium text-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section - Call to Action */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Daftar Button */}
            <div className="space-y-4">
              <p className="text-text text-lg">
                Mari rasakan experience bersama kami:
              </p>
              
              <button onClick={() => window.open("https://forms.gle/3QwHvqaugmhN2rBb8", "_blank", "noopener,noreferrer")} className="bg-sky-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                Daftar
              </button>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-4">
              <p className="text-text text-lg">
                Konfirmasi setelah daftar dan informasi yg lain:
              </p>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/6281325194102" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110 duration-300"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>
                <a href="https://wa.me/6281325194102" target="_blank" rel="noopener noreferrer">
                  <span className="text-text font-medium text-lg">WA/081325194102</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;