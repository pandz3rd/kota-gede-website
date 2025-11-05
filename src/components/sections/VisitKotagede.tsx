// import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisitKotagede = () => {
  const sections = [
    {
      title: "Heritage Walks",
      content: "If you’re ever in Yogyakarta and want to slow down a little, Kotagede is the perfect place for a heritage walk. This old town feels like stepping into a time capsule—narrow alleys, traditional Javanese houses with carved wooden doors, and silver workshops where artisans still craft beautiful jewelry by hand. As you wander around, you’ll stumble upon ancient mosques, remnants of the old Mataram Kingdom, and friendly locals who are always ready with a smile or a story. It’s not just about visiting historical sites; it’s about soaking in the atmosphere, hearing the echoes of the past, and experiencing a side of Yogyakarta that’s rich, warm, and beautifully authentic",
      link: "/visit/heritage"
    },
    {
      title: "Workshops & Silver Craft",
      content: "Kotagede is famous for its silver craft, and visiting one of the local workshops is a must. Here, you can watch skilled artisans transform simple pieces of silver into intricate jewelry and ornaments using techniques passed down for generations. Many workshops even let visitors try their hand at crafting, making it a fun and memorable way to connect with Yogyakarta’s rich artistic heritage",
      link: "/visit/workshop"
    },
    {
      title: "Market & Food",
      content: "A walk through Kotagede isn’t complete without stopping by its traditional market and food stalls. The market buzzes with locals buying fresh produce, spices, and everyday goods, giving you a real taste of daily life here. Don’t miss trying local treats like kipo, a small green cake filled with sweet coconut, or other traditional Javanese snacks that you’ll only find in this part of Yogyakarta",
      link: "/visit/market"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-16 text-left">
          Visit Kotagede
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className=" bg-slate-300 rounded-2xl shadow-2xl overflow-hidden group">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGhDo7dEomnWd_eHPxPLMO8casFazW9amJgZnfNSQsQMbIb_UfDsxOvhmwurCe2hImsRHCoxqxorfkBGuqztj4Dq3Jl_upB7a06H6xxqNo-Z3w_51iPwovgpnDCf3XBCl83itbJ0seFkc/s1600/rumah+adat+kudusan+tengah+pintu+1.jpg"
                alt="Kotagede Silver Workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-200 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-300 rounded-full opacity-60 blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-600 transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {section.content}
                </p>

                <Link 
                  to={section.link}
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium text-sm transition-colors duration-300 group"
                >
                  See More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {index < sections.length - 1 && (
                  <div className="mt-8 border-b border-slate-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practical Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid lg:grid-cols-4 gap-0 border border-slate-300">
          {/* Left Column - Title */}
          <div className="lg:col-span-1 bg-slate-100 p-8 flex items-center justify-center border-r border-slate-300">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 text-center">
              Practical<br />Information
            </h2>
          </div>

          {/* Right Columns - Content */}
          <div className="lg:col-span-3 grid lg:grid-cols-3 gap-0">
            {/* Transportation */}
            <div className="p-8  last:border-r-0">
              <h3 className="text-lg font-bold text-slate-800 mb-6">
                Transportation
              </h3>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>From Yogyakarta city center (Malioboro, the Palace, Tugu Jogja):</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• By motorbike or car: Around 15-25 minutes via Kusumanegara Street.</li>
                  <li>• By Trans Jogja bus: Hop on route 3A or 3B, get off near Kotagede (just ask the staff—usually it's around Kotagede Market).</li>
                  <li>• By online ride (ojek): Super easy to get, costs about Rp15,000-30,000 from the city center.</li>
                </ul>
                <p>
                  <strong>Tip:</strong> The streets in Kotagede are pretty narrow, so most people park near the market or tourist spots and continue on foot.
                </p>
              </div>
            </div>

            {/* Best Visit Time */}
            <div className="p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6">
                Best Visit Time
              </h3>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <ul className="space-y-3">
                  <li>
                    <strong>• Morning (7-10 AM):</strong> Nice and cool, perfect for strolling through the old alleys and checking out the traditional market.
                  </li>
                  <li>
                    <strong>• Late afternoon (3:30-5:30 PM):</strong> The light's great for snapping photos of the classic buildings and village vibes.
                  </li>
                  <li>
                    <strong>• Monday (11 AM-2 PM):</strong> Get no crowds, it's pretty quiet, especially if you're walking around.
                  </li>
                  <li>
                    <strong>• Sunday morning:</strong> The Kotagede market is extra lively with lots of traditional snacks to try.
                  </li>
                </ul>
              </div>
            </div>

            {/* Local Etic */}
            <div className="p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6">
                Local Etic
              </h3>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <ul className="space-y-3">
                  <li>
                    <strong>• Dress politely:</strong> Kotagede's full of historic spots and old mosques, so skip anything too revealing.
                  </li>
                  <li>
                    <strong>• Say hello:</strong> The locals are super friendly and smile goes a long way. A simple "please/go ahead" goes a long way.
                  </li>
                  <li>
                    <strong>• Don't litter:</strong> Keep the alleys and royal cemetery area tidy.
                  </li>
                  <li>
                    <strong>• Taking photos of houses:</strong> If people still live there, it's best to ask first.
                  </li>
                  <li>
                    <strong>• Shopping & haggling:</strong> Feel free to bargain at the market, just keep it friendly and don't push too hard.
                  </li>
                  <li>
                    <strong>• Respect religious spaces:</strong> If you're going into a mosque or cemetery, follow the rules—like taking off your shoes and staying quiet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitKotagede;