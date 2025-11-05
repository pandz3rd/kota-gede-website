// import React from 'react';

const CommunityToday = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            Community Today
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Kehangatan dalam Balutan Tradisi
          </p>
        </div>

        <div className="space-y-16">
          {/* Warga yang Ramah dan Terbuka */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image - Left side */}
            <div className="relative lg:order-1">
              <div className="aspect-[4/3] bg-slate-300 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://www.arkomindonesia.id/wp-content/uploads/2023/07/IMG20230706161012-1024x744.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Warga Kotagede"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content - Right side */}
            <div className="space-y-6 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-800">
                Warga yang Ramah dan Terbuka
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Masyarakat Kotagede (sering disebut Wong Gede) dikenal dengan keramahannya. Mereka bangga akan sejarah dan warisan mereka, dan sering kali dengan senang hati berbagi cerita dengan para pengunjung
              </p>
            </div>
          </div>

          {/* Nilai yang Terus Dijaga */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left side */}
            <div className="space-y-6 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-800">
                Nilai yang Terus Dijaga
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Semangat gotong royong (kerja sama komunal) dan guyub (kerukunan) masih sangat kental. Masyarakat menjaga tradisi tidak hanya dalam bentuk kriya, tetapi juga dalam upacara adat dan kegiatan keagamaan. Inilah fondasi yang membuat Kotagede tetap menjadi komunitas yang kuat, berakar pada masa lalu namun tetap hidup di masa kini
              </p>
            </div>
            
            {/* Image - Right side */}
            <div className="relative lg:order-2">
              <div className="aspect-[4/3] bg-slate-300 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://cdn.idntimes.com/content-images/post/20220913/screenshot-2022-0913-115544-1b5debadee20d27460907eb898fa610a.png?auto=compress&cs=tinysrgb&w=800"
                  alt="Nilai Tradisi Kotagede"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityToday;  