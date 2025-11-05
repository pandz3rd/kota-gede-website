// import React from 'react';

const HistoryHeritage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            History & Heritage
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Di sinilah peradaban Mataram Islam bermula. Setiap gang sempit, tembok tinggi, dan bangunan kuno di 
            Kotagede adalah saksi bisu dari sebuah era keemasan.
          </p>
        </div>

        <div className="space-y-16">
          {/* Pusat Kerajaan Mataram Islam */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image - Left side */}
            <div className="relative lg:order-1">
              <div className="aspect-[4/3] bg-gray-300 rounded-xl shadow-xl overflow-hidden border border-gray-200 group">
                <img 
                  src="https://kotagede.org/wp-content/uploads/2025/08/49137195976_7f0084d94e_b.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pusat Kerajaan Mataram Islam"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Content - Right side */}
            <div className="space-y-6 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-800">
                Pusat Kerajaan Mataram Islam
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Didirikan pada abad ke-16 oleh Panembahan Senopati, Kotagede menjadi ibu kota pertama Kerajaan Mataram, cikal bakal Kesultanan Yogyakarta dan Kasunanan Surakarta
              </p>
            </div>
          </div>

          {/* Arsitektur Khas */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left side */}
            <div className="space-y-6 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-800">
                Arsitektur Khas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Arsitektur Kotagede adalah perpaduan harmonis antara gaya Jawa-Hindu dan Islam. labirin gang-gang sempit di antara Tembok Keliling (Cepuri) yang dulunya melindungi pusat keraton. rumah-rumah tradisional Joglo dan Kalang dengan gebyok ukir yang megah, mencerminkan kemakmuran saudagar di masa lampau
              </p>
            </div>
            
            {/* Image - Right side */}
            <div className="relative lg:order-2">
              <div className="aspect-[4/3] bg-gray-300 rounded-xl shadow-xl overflow-hidden border border-gray-200 group">
                <img 
                  src="https://kotagede.org/wp-content/uploads/2025/08/rumah-joglo.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Arsitektur Khas Kotagede"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryHeritage;