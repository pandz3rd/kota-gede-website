import Layout from '../../components/layout/Layout';
import { ArrowLeft, Clock, Users, Star, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkshopPage = () => {
  const workshops = [
    {
      name: "UD Tombo Ati",
      specialty: "Traditional Silver Jewelry",
      experience: "3rd Generation Family Business",
      description: "Watch master craftsmen create intricate silver jewelry using traditional techniques passed down through generations.",
      image: "https://cdn0-production-images-kly.akamaized.net/ymUeM3h2PnR26A5gZozLXqokHSQ=/0x0/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1737743/original/073661300_1507805477-IMG_20171012_142935.jpg",
      activities: ["Watch craftsmen at work", "Try basic silver shaping", "Learn about traditional tools", "Purchase authentic pieces"]
    },
    {
      name: "Kerajinan Perak Kotagede",
      specialty: "Decorative Silver Items",
      experience: "50+ Years of Excellence",
      description: "Specializing in decorative silver items including traditional Javanese ornaments and modern designs.",
      image: "https://i2.wp.com/www.balistarisland.com/wp-content/uploads/2016/09/kotagede5.jpg?ssl=1?auto=compress&cs=tinysrgb&w=800",
      activities: ["Hands-on silver crafting", "Design your own piece", "Learn engraving techniques", "Take home your creation"]
    },
    {
      name: "Sanggar Seni Perak",
      specialty: "Silver Art & Sculpture",
      experience: "Contemporary Silver Art",
      description: "Modern approach to traditional silver crafting, creating artistic pieces and sculptures.",
      image: "https://yogyakartatour.com/wp-content/uploads/2025/04/visit-kotagede-jewelry.jpg?auto=compress&cs=tinysrgb&w=800",
      activities: ["Artistic silver techniques", "Sculpture basics", "Modern design concepts", "Gallery exhibition"]
    }
  ];

  const craftingProcess = [
    {
      step: "1",
      title: "Design & Planning",
      description: "Craftsmen sketch the design and plan the silver piece, considering traditional motifs and customer preferences."
    },
    {
      step: "2", 
      title: "Silver Preparation",
      description: "Pure silver is melted and shaped into basic forms using traditional tools and techniques."
    },
    {
      step: "3",
      title: "Shaping & Forming",
      description: "Using hammers and specialized tools, the silver is carefully shaped into the desired form."
    },
    {
      step: "4",
      title: "Detail Work & Engraving",
      description: "Intricate patterns and details are added through careful engraving and embossing work."
    },
    {
      step: "5",
      title: "Finishing & Polishing",
      description: "The piece is refined, polished, and given final touches to achieve the perfect finish."
    }
  ];

  const workshopPackages = [
    {
      name: "Silver Discovery Tour",
      duration: "1-2 hours",
      price: "Free",
      includes: ["Workshop visit", "Craftsman demonstration", "Traditional tools explanation", "Photo opportunities"]
    },
    {
      name: "Hands-On Experience",
      duration: "2-3 hours", 
      price: "Rp 150,000 - 300,000",
      includes: ["Basic silver crafting lesson", "Create simple jewelry piece", "Take home your creation", "Certificate of participation"]
    },
    {
      name: "Master Class",
      duration: "Half day",
      price: "Rp 500,000 - 800,000", 
      includes: ["Advanced techniques", "Personal mentoring", "Complex piece creation", "Traditional lunch", "Workshop materials"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-slate-300 overflow-hidden">
        <img 
          src="https://cdn0-production-images-kly.akamaized.net/ymUeM3h2PnR26A5gZozLXqokHSQ=/0x0/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1737743/original/073661300_1507805477-IMG_20171012_142935.jpg"
          alt="Silver Workshop Kotagede"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Workshops & Silver Craft</h1>
            <p className="text-xl">Experience the artistry of traditional silver craftsmanship</p>
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
              Kotagede is famous for its silver craft, and visiting one of the local workshops is a must. Here, you can watch skilled artisans transform simple pieces of silver into intricate jewelry and ornaments using techniques passed down for generations.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Many workshops even let visitors try their hand at crafting, making it a fun and memorable way to connect with Yogyakarta's rich artistic heritage. From simple observation tours to hands-on masterclasses, there's something for every level of interest.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Featured Silver Workshops</h2>
          
          <div className="space-y-12">
            {workshops.map((workshop, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={workshop.image}
                      alt={workshop.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{workshop.name}</h3>
                    <p className="text-slate-500 font-medium">{workshop.specialty}</p>
                    <p className="text-sm text-slate-400">{workshop.experience}</p>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">{workshop.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">What You Can Do:</h4>
                    <ul className="space-y-2">
                      {workshop.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center gap-2 text-slate-600">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crafting Process */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">The Silver Crafting Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftingProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{process.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Workshop Packages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Workshop Packages</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {workshopPackages.map((package_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{package_.name}</h3>
                  <div className="flex items-center justify-center gap-4 text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{package_.duration}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-800">{package_.price}</div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {package_.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-slate-600">
                        <Hammer className="w-4 h-4 text-slate-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Workshop Visit Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Morning (8-11 AM): Most active crafting time</li>
                <li>• Weekdays: Less crowded, more personal attention</li>
                <li>• Avoid lunch hours (12-1 PM)</li>
                <li>• Call ahead for hands-on workshops</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">What to Expect</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Friendly, welcoming artisans</li>
                <li>• Traditional tools and techniques</li>
                <li>• Opportunity to purchase authentic pieces</li>
                <li>• Photo opportunities (ask permission first)</li>
                <li>• Basic English communication available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Ready to Create?</h2>
          <p className="text-slate-600 mb-8">
            Book your silver crafting experience and take home a piece of Kotagede's artistic heritage.
          </p>
          
          <div className="mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Your Workshop Experience
            </Link>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default WorkshopPage;