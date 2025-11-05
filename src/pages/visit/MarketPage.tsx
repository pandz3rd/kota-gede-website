import Layout from '../../components/layout/Layout';
import { ArrowLeft, Clock, MapPin, ShoppingBag} from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketPage = () => {
  const marketHighlights = [
    {
      title: "Traditional Market",
      description: "Experience the bustling atmosphere of a traditional Javanese market with fresh produce, spices, and local goods",
      image: "https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=800",
      bestTime: "Early morning (6-9 AM)"
    },
    {
      title: "Street Food Stalls",
      description: "Discover authentic local flavors from various food stalls scattered throughout the market area",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      bestTime: "Morning & evening"
    },
    {
      title: "Spice Corner",
      description: "Aromatic spices and traditional herbs used in Javanese cooking, perfect for culinary enthusiasts",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      bestTime: "All day"
    }
  ];

  const localTreats = [
    {
      name: "Kipo",
      description: "Small green cake made from rice flour filled with sweet coconut and palm sugar. A signature Kotagede treat.",
      price: "Rp 2,000 - 3,000 per piece",
      image: "https://img-global.cpcdn.com/recipes/f1e8d2a311d8c3fb/680x482cq70/kue-kipo-khas-kotagede-yogyakarta-foto-resep-utama.jpg"
    },
    {
      name: "Yangko",
      description: "Colorful, chewy rice cake with various flavors. Traditional Javanese sweet that's been made for generations.",
      price: "Rp 15,000 - 25,000 per pack",
      image: "https://bobobox.com/blog/wp-content/uploads/2023/10/Yangko-2.webp?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Geplak",
      description: "Sweet coconut candy available in different colors and flavors. Perfect souvenir from Kotagede.",
      price: "Rp 10,000 - 20,000 per pack",
      image: "https://www.tuguwisata.com/wp-content/uploads/2017/10/chefjourneys_3_10_2017_14_6_38_173.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Jadah Tempe",
      description: "Traditional rice cake served with fermented soybean. A hearty local breakfast option.",
      price: "Rp 15,000 - 25,000 per pack",
      image: "https://paxelmarket.co/wp-content/uploads/2022/03/SmartSelect_20220316-210754_WhatsAppBusiness-768x1082.jpg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const marketSections = [
    {
      area: "Fresh Produce Section",
      items: ["Tropical fruits", "Fresh vegetables", "Local herbs", "Seasonal specialties"],
      tips: "Best visited early morning for freshest items"
    },
    {
      area: "Spice & Seasoning Area", 
      items: ["Traditional spices", "Herbal medicines", "Cooking ingredients", "Aromatic herbs"],
      tips: "Ask vendors about usage and recipes"
    },
    {
      area: "Prepared Food Zone",
      items: ["Ready-to-eat meals", "Traditional snacks", "Fresh beverages", "Local desserts"],
      tips: "Try small portions to sample different flavors"
    },
    {
      area: "Craft & Souvenir Stalls",
      items: ["Handmade crafts", "Traditional textiles", "Small silver items", "Local artwork"],
      tips: "Bargaining is expected and welcomed"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-300 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Kotagede Traditional Market"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Market & Food</h1>
            <p className="text-xl">Taste the authentic flavors of Kotagede</p>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/visit"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Visit
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              A walk through Kotagede isn't complete without stopping by its traditional market and food stalls. The market buzzes with locals buying fresh produce, spices, and everyday goods, giving you a real taste of daily life here.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Don't miss trying local treats like kipo, a small green cake filled with sweet coconut, or other traditional Javanese snacks that you'll only find in this part of Yogyakarta. The market is not just a place to shop—it's a cultural experience that connects you with the heart of the community.
            </p>
          </div>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Market Highlights</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {marketHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] bg-slate-200">
                  <img 
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{highlight.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{highlight.description}</p>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{highlight.bestTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Treats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Must-Try Local Treats</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {localTreats.map((treat, index) => (
              <div key={index} className="flex gap-6 p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-slate-200 rounded-lg overflow-hidden">
                    <img 
                      src={treat.image}
                      alt={treat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{treat.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{treat.description}</p>
                  <div className="flex items-center gap-2 text-slate-500">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="text-sm font-medium">{treat.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Sections */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Market Layout & Sections</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {marketSections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{section.area}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-700 mb-2">What you'll find:</h4>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm text-slate-600">
                    <span className="font-medium">Tip:</span> {section.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Schedule & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Market Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Operating Hours</h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span className="font-medium">5:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Peak hours</span>
                  <span className="font-medium">6:00 AM - 10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Food stalls</span>
                  <span className="font-medium">6:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Visitor Tips</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Bring small bills for easier transactions</li>
                <li>• Try bargaining politely at non-food stalls</li>
                <li>• Bring your own shopping bag</li>
                <li>• Sample before buying (when offered)</li>
                <li>• Ask locals for recommendations</li>
                <li>• Be respectful when taking photos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Getting There */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Location & Getting There</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-slate-600 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Pasar Kotagede</h3>
                <p className="text-slate-600">Jl. Kemasan, Purbayan, Kotagede, Yogyakarta</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Transportation Options</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Trans Jogja bus (Route 3A/3B)</li>
                  <li>• Online motorcycle taxi (ojek)</li>
                  <li>• Private car/motorcycle</li>
                  <li>• Walking from heritage sites</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Nearby Attractions</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Silver workshops (5 min walk)</li>
                  <li>• Masjid Gedhe Mataram (10 min walk)</li>
                  <li>• Royal cemetery (15 min walk)</li>
                  <li>• Traditional houses (throughout area)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Ready to Explore?</h2>
          <p className="text-slate-600 mb-8">
            Join us for a guided market tour and food tasting experience to discover the authentic flavors of Kotagede.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-slate-600 mb-8">
            <Utensils className="w-5 h-5" />
            <span>Food tours available daily</span>
          </div>
          
          <div className="mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Your Market & Food Tour
            </Link>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default MarketPage;