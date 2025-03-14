import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-700">विरासत</span>
              <span className="ml-2 text-xl font-semibold">Virasat</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            <button 
              onClick={() => scrollToSection('bridging')} 
              className="text-gray-700 hover:text-orange-600"
            >
              About Us
            </button>
            
            {/* Tourism Link */}
            <Link 
              to="/tourism" 
              className="text-gray-700 hover:text-orange-600"
            >
              Tourism
            </Link>
            
            <button 
              onClick={() => scrollToSection('shop')} 
              className="text-gray-700 hover:text-orange-600"
            >
              Shop
            </button>
            
            <button 
              onClick={() => scrollToSection('newsletter')} 
              className="text-gray-700 hover:text-orange-600"
            >
              Subscribe
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">
              Home
            </Link>
            <button 
              onClick={() => {
                scrollToSection('bridging');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
            >
              About Us
            </button>
            
            <Link 
              to="/tourism"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
            >
              Tourism
            </Link>
            
            <button 
              onClick={() => {
                scrollToSection('shop');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
            >
              Shop
            </button>
            
            <button 
              onClick={() => {
                scrollToSection('newsletter');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;