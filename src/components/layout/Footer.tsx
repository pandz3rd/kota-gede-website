import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, X } from 'lucide-react'; // pakai X, bukan Twitter

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Visit', path: '/visit' },
    { label: 'Programs', path: '/programs' },
    { label: 'Stories', path: '/stories' }
  ];

  const getInvolvedLinks = [
    { label: 'Support', path: '/support' },
    { label: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: X, href: '#', label: 'X (Twitter)' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gradient-to-b from-slate-700 to-slate-800 text-slate-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold text-white mb-4">Kotagede.org</h3>
            
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md text-sm">
              Preserving and celebrating the living heritage of Kotagede, Yogyakarta – where the 
              legacy of the Mataram Kingdom continues to thrive through traditional crafts, culture, 
              and community.
            </p>

            {/* Social Media Links */}
            {/* <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-slate-600 hover:bg-slate-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className='lg:col-span-3'>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className='lg:col-span-3'>
            <h4 className="text-lg font-bold text-white mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              {getInvolvedLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-slate-400 text-xs">
              © 2025 Kotagede.org. All rights reserved. Living Heritage of Yogyakarta.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
