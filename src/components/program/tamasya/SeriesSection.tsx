import React from 'react';

interface SeriesItem {
  id: number;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
}

const SeriesSection: React.FC = () => {
  const seriesImages = [
    'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/2901208/pexels-photo-2901208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1659436/pexels-photo-1659436.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/2901207/pexels-photo-2901207.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1659435/pexels-photo-1659435.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/2901206/pexels-photo-2901206.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1659435/pexels-photo-1659435.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ];

  const seriesData: SeriesItem[] = [
    {
      id: 1,
      title: "Catur Gatra Tunggal",
      description: "Menceritakan tata ruang Mataram Islam yang terdiri dari pasar, masjid, alun alun, dan kraton.",
      imagePosition: 'left'
    },
    {
      id: 2,
      title: "Tokoh",
      description: "Mengenali jejak kontribusi tokoh-tokoh penting dalam sejarah dan perkembangan Kotagede.",
      imagePosition: 'right'
    },
    {
      id: 3,
      title: "Artisan",
      description: "Menghidupkan tradisi kriya dan kerajinan tangan yang diwarsakan turun temurun di Kotagede.",
      imagePosition: 'left'
    },
    {
      id: 4,
      title: "Arsitektur",
      description: "Menyusuri ragam arsitektur Jawa, kolonial, dan modern yang membentuk wajah Kotagede.",
      imagePosition: 'right'
    },
    {
      id: 5,
      title: "Kuliner",
      description: "Mengecap cita rasa khas kuliner lokal Kotagede yang menyimpan cerita budaya.",
      imagePosition: 'left'
    },
    {
      id: 6,
      title: "Toponim Kampung",
      description: "Menggali asal-usul nama kampung dan makamnya dalam identitas sosial Kotagede.",
      imagePosition: 'right'
    },
    {
      id: 7,
      title: "Muhammadiyah",
      description: "Menelusuri jejak lahirnya Muhammadiyah dan perannya dalam pendidikan serta gerakan sosial.",
      imagePosition: 'left'
    },
    {
      id: 8,
      title: "Kotagede Merah",
      description: "Mengupas sejarah pergolakan politik \"merah\" yang tumbuh di Kotagede.",
      imagePosition: 'right'
    },
    {
      id: 9,
      title: "Makam ke Makam",
      description: "Menelusuri makam-makam bersejarah untuk menggali spiritualitas dan nilai baik leluhur.",
      imagePosition: 'left'
    }
  ];

  return (
    <section id="series" className="py-20 px-6 bg-gradient-to-b from-white to-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary     mb-4">
            Our Series
          </h2>
          {/* <div className="w-24 h-1 bg-sky-500 mx-auto"></div> */}
        </div>

        {/* Series Items */}
        <div className="space-y-20">
          {seriesData.map((item) => ( 
            <div
              key={item.id}
              className={`flex flex-col ${
                item.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-8 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <img 
                    src={seriesImages[item.id - 1]}
                    alt={item.title}
                    className="w-full aspect-video object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* <div className="flex items-center gap-4">
                  {/* <span className="text-4xl font-bold text-sky-500">0{item.id}</span> */}
                  {/* <div className="h-px bg-sky-300 flex-1"></div> */}
                {/* </div> */}
                <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                  {item.title}
                </h3>
                <p className="text-text leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeriesSection;