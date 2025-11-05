import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-bg">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white border-l-4 border-primary rounded-lg p-8 md:p-12 shadow-lg">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-primary" />
          
          <div className="text-center pt-4">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-4">
              <span className="text-primary font-bold text-2xl md:text-3xl">#MenamatkanKotagede</span>
            </p>
            <p className="text-lg md:text-xl text-text leading-relaxed mb-4">
              diambil dari kata "tamat" yang berarti menyelesaikan, membaca menceritakan sampai habis.
            </p>
            <p className="text-lg md:text-xl text-text leading-relaxed">
              Dan kata "mat" yang berarti melihat dengan jelas.
            </p>
          </div>
          
          <Quote className="absolute bottom-6 right-6 w-10 h-10 text-primary rotate-180" />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;