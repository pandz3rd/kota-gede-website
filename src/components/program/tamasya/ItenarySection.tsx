import React from 'react';

const ItenarySection: React.FC = () => {
  const itenarySteps = [
    {
      number: 1,
      title: "Jalan",
      description: "Memulai perjalanan menyusuri jalanan bersejarah Kotagede"
    },
    {
      number: 2, 
      title: "Oleh-oleh",
      description: "Mencicipi dan membeli oleh-oleh khas Kotagede"
    },
    {
      number: 3,
      title: "Cerita",
      description: "Mendengarkan cerita-cerita menarik dari komunitas lokal"
    }
  ];

  return (
    <section id="itenary" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Itenary
          </h2>
        </div>

        {/* Desktop Stepper */}
        <div className="hidden md:block">
          <div className="relative max-w-[830px] mx-auto mb-12">
            {/* Connecting Line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-300"></div>
            
            <div className="relative flex justify-between">
              {itenarySteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md bg-primary`}>
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="grid grid-cols-3 gap-8">
            {itenarySteps.map((step, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-text leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden space-y-8">
          {itenarySteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Step Circle */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 bg-sky-500`}>
                {step.number}
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItenarySection;