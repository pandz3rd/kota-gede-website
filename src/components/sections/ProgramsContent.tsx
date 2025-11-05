import React from 'react';

const ProgramsContent = () => {
  const programs = [
    {
      title: "Conservation Projects",
      content: "This initiative focuses on protecting and revitalizing Kotagede's unique legacy, including its traditional Javanese houses, historic mosques, royal cemetery, and renowned silver craftsmanship. Our conservation efforts combine restoration of architectural landmarks with community-based programs that encourage residents to maintain local traditions, ensuring that future generations can continue enjoying this vibrant and enjoy Kotagede's cultural treasures while supporting the local economy and safeguarding our heritage for future generations.",
      imagePosition: "left"
    },
    {
      title: "Youth & Education",
      content: "We place strong emphasis on youth education and historical awareness. Through workshops, cultural programs, and educational tours, we inspire the younger generation to learn about Kotagede's rich past, from its royal legacy to its artistic traditions. These initiatives not only foster pride and identity among local youth but also ensure that the knowledge and values of Kotagede are carried forward into the future.",
      imagePosition: "right"
    },
    {
      title: "Community Empowerment",
      content: "We are dedicated to empowering our local community through programs that strengthen cultural traditions, support small businesses, and encourage active participation in heritage conservation. By involving residents in education, entrepreneurship, and cultural activities, we ensure that the people of Kotagede remain at the heart of preserving and promoting our living heritage.",
      imagePosition: "left"
    },
    {
      title: "Cultural Events",
      content: "We continue to promote cultural events that celebrate our rich history and traditions. From traditional Javanese performances and religious ceremonies to local art exhibitions and community festivals, these events serve as a bridge between generations while attracting visitors to experience Kotagede's unique identity. Through these celebrations, we preserve cultural values, strengthen community pride, and showcase Kotagede as a vibrant heritage destination.",
      imagePosition: "right"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {programs.map((program, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              program.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`relative ${
                program.imagePosition === 'right' ? 'lg:col-start-2' : ''
              }`}>
                <div className="aspect-[4/3] bg-slate-300 rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className={`space-y-6 ${
                program.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                <h3 className="text-2xl font-bold text-slate-800">
                  {program.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {program.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsContent;