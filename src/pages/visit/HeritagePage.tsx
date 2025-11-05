import Layout from '../../components/layout/Layout';
import { ArrowLeft, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeritagePage = () => {
  const highlights = [
    {
      title: "Masjid Gedhe Mataram",
      description: "The grand mosque built during the Mataram Kingdom era, showcasing Islamic-Javanese architecture",
      image: "https://telusuri.id/wp-content/uploads/2019/10/pintu-masuk-masjid.jpg"
    },
    {
      title: "Royal Cemetery Complex",
      description: "Sacred burial grounds of Mataram royalty, including the tomb of Panembahan Senopati",
      image: "https://seputarjogja.id/wp-content/uploads/2022/08/medium_3690.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Traditional Javanese Houses",
      description: "Well-preserved joglo and limasan houses with intricate wooden carvings",
      image: "https://kotagede.org/wp-content/uploads/2025/08/rumah-joglo.jpg"
    },
    {
      title: "Ancient City Walls",
      description: "Remnants of the protective walls that once surrounded the royal capital",
      image: "https://visitingjogja.jogjaprov.go.id/en/wp-content/uploads/2020/12/tembok-gede.jpg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const walkingRoutes = [
    {
      name: "Royal Heritage Route",
      duration: "2-3 hours",
      difficulty: "Easy",
      description: "Visit the main royal sites including the mosque, cemetery, and palace ruins"
    },
    {
      name: "Architecture Discovery Route", 
      duration: "1.5-2 hours",
      difficulty: "Easy",
      description: "Explore traditional Javanese houses and colonial-era buildings"
    },
    {
      name: "Complete Heritage Circuit",
      duration: "4-5 hours",
      difficulty: "Moderate",
      description: "Comprehensive tour covering all major historical sites and hidden gems"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-300 overflow-hidden">
        <img 
          src="https://lawupos.com/wp-content/uploads/2023/01/Kotagede-01-1024x768.jpg"
          alt="Kotagede Heritage Walk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Heritage Walks</h1>
            <p className="text-xl">Step into the living history of Mataram Kingdom</p>
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
              If you're ever in Yogyakarta and want to slow down a little, Kotagede is the perfect place for a heritage walk. This old town feels like stepping into a time capsule—narrow alleys, traditional Javanese houses with carved wooden doors, and ancient sites where history comes alive.
            </p>
            <p className="text-slate-600 leading-relaxed">
              As you wander around, you'll stumble upon ancient mosques, remnants of the old Mataram Kingdom, and friendly locals who are always ready with a smile or a story. It's not just about visiting historical sites; it's about soaking in the atmosphere, hearing the echoes of the past, and experiencing a side of Yogyakarta that's rich, warm, and beautifully authentic.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Heritage Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
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
                  <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walking Routes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Suggested Walking Routes</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {walkingRoutes.map((route, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{route.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{route.difficulty}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed">{route.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Heritage Walk Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">What to Bring</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Comfortable walking shoes</li>
                <li>• Sun hat and sunscreen</li>
                <li>• Water bottle</li>
                <li>• Camera for capturing architecture</li>
                <li>• Small cash for entrance fees</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Cultural Etiquette</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Dress modestly when visiting religious sites</li>
                <li>• Remove shoes before entering mosques</li>
                <li>• Ask permission before photographing people</li>
                <li>• Speak quietly in sacred areas</li>
                <li>• Greet locals with a friendly smile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Need a Guide?</h2>
          <p className="text-slate-600 mb-8">
            For a more immersive experience, consider joining our guided heritage walks with local community members who can share stories and insights you won't find in guidebooks.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-slate-600">
            <MapPin className="w-5 h-5" />
            <span>Meet at Kotagede Traditional Market</span>
          </div>
          
          <div className="mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us for Guided Tours
            </Link>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default HeritagePage;