import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200' : 'bg-transparent'
    } px-2 sm:px-6 lg:px-8`} style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-11 sm:h-14 lg:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-sm sm:text-lg lg:text-xl font-bold font-serif bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Modellaire MGMT
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 min-h-[44px]">
              <Phone className="w-4 h-4 mr-2" />
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-white/95 backdrop-blur-lg border-b border-gray-200 px-2">
          <div className="pt-1 pb-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 block px-2 py-2 text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-2 flex items-center justify-center px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 min-h-[44px]">
              <Phone className="w-3 h-3 mr-1.5" />
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;