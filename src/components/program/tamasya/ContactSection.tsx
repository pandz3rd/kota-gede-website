import React from 'react';
import { Phone, MapPin, Instagram, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      text: "081-325-194-102 (Evander)",
      text2: "085-725-922-702 (Primastri)"
    },
    {
      icon: MapPin,
      text: "Purboyo Kol (Kol 122) | RT. 058 RW. 014",
      text2: "Kotagede, Yogyakarta, DIY 55173"
    },
    {
      icon: Instagram,
      text: "@tamasyacerita"
    },
    {
      icon: Mail,
      text: "tamasyacerita@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-bg to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          {/* <div className="w-24 h-1 bg-sky-500 mx-auto"></div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Maps */}
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12043.26813672052!2d110.38817616242443!3d-7.82551473548175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b83b71424c3bd35%3A0xaee76c8a75c4570f!2sKampung%20Wisata%20Purbayan!5e1!3m2!1sid!2sid!4v1757435431771!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kotagede Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-bg transition-colors duration-300 shadow-md">
                  <contact.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-text font-semibold text-lg">{contact.text}</p>
                  {contact.text2 && <p className="text-text font-semibold text-lg">{contact.text2}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;