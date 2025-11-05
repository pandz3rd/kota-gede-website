// import React from 'react';

const CraftCulture = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Craft & Culture
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Denyut Nadi Kreativitas dan Rasa
          </p>
        </div>

        <div className="space-y-16">
          {/* Tradisi Perak yang Mendunia */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image - Left side */}
            <div className="relative lg:order-1">
              <div className="aspect-[4/3] bg-gray-300 rounded-xl shadow-xl overflow-hidden border border-gray-200 group">
                <img 
                  src="https://cdn0-production-images-kly.akamaized.net/ymUeM3h2PnR26A5gZozLXqokHSQ=/0x0/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1737743/original/073661300_1507805477-IMG_20171012_142935.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Tradisi Perak Kotagede"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Content - Right side */}
            <div className="space-y-6 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-800">
                Tradisi Perak yang Mendunia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kotagede adalah rumah bagi perak. Sejak ratusan tahun, para master perak 
                di sini telah mewariskan teknik-teknik dan generasi ke generasi.
              </p>
            </div>
          </div>

          {/* Surga Kuliner Tradisional */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left side */}
            <div className="space-y-6 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-800">
                Surga Kuliner Tradisional
              </h3>
              <p className="text-gray-600 leading-relaxed">
                rasa otentik Kotagede melalui kuliner legendarisnya seperti Kipo yang manis dan legit, serta Yangko yang kenyal dan berwarna-warni
              </p>
            </div>
            
            {/* Image - Right side */}
            <div className="relative lg:order-2">
              <div className="aspect-[4/3] bg-gray-300 rounded-xl shadow-xl overflow-hidden border border-gray-200 group">
                <img 
                  src="https://img-global.cpcdn.com/recipes/f1e8d2a311d8c3fb/680x482cq70/kue-kipo-khas-kotagede-yogyakarta-foto-resep-utama.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kuliner Tradisional Kotagede"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftCulture;