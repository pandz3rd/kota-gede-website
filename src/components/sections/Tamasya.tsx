import { ArrowRight } from "lucide-react";

const Tamasya = () => {
  return (
    <section className="py-20 bg-slate-50 border-t-4 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Tamasya
          </h2>
          
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed">
              Kotagede offers historical tours that take visitors deep into the legacy of Yogyakarta's first royal capital. These tours guide guests through ancient mosques, royal cemeteries, and traditional Javanese houses, while also exploring hidden alleys that reveal the daily life of the past. By joining a historical tour, visitors not only witness the architectural beauty and cultural treasures of Kotagede but also gain a deeper understanding of the stories, traditions, and values that shaped the identity of this historic town.
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <button onClick={() => window.open('/programs/tamasya-cerita', '_blank')} className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none group shadow-lg">
              See More
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tamasya;