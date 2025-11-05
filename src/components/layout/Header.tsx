// import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from '../../images/kotagede.png';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Visit', path: '/visit' },
    { label: 'Programs', path: '/programs' },
    { label: 'Stories', path: '/stories' },
    { label: 'Support', path: '/support' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <header className="bg-gradient-to-r from-slate-50 to-gray-50 shadow-lg border-b border-gray-200 relative z-50 backdrop-blur-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo/Brand */}
          <Link to="/" onClick={handleLinkClick} className="text-gray-700 text-lg font-bold hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            <img src={Logo} alt="Kotagede Logo" className='w-12 h-auto outline-1 outline-gray-900' />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={handleLinkClick}
                className={`text-gray-600 hover:text-gray-800 font-semibold text-sm transition-all duration-300 relative group ${
                  location.pathname === item.path ? 'text-gray-800' : ''
                }`}
              >
                {item.label}
                <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transform transition-transform duration-300 origin-left ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? 'text-gray-800 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;