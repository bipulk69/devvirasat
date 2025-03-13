import React, { useState } from 'react';
import {
  Menu,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  MapPin,
  Calendar,
  Gift,
  ArrowRight,
  Mail,
  ChevronDown
} from 'lucide-react';

// Add this component for the navigation with dropdown
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-700">विरासत</span>
            <span className="ml-2 text-xl font-semibold">Virasat</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">About Us</a>
            
            {/* Tourism Dropdown */}
            <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
              <button 
                className="text-gray-700 hover:text-orange-600 flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                Tourism <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a 
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Festivals
                  </a>
                  <a 
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Cultural Heritage
                  </a>
                </div>
              )}
            </div>
            
            <a href="#" className="text-gray-700 hover:text-orange-600">Shop</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact Us</a>
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
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">
              About Us
            </a>
            
            {/* Mobile Tourism Dropdown */}
            <div>
              <button 
                className="flex justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Tourism</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              
              {isOpen && (
                <div className="pl-4">
                  <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">
                    Festivals
                  </a>
                  <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">
                    Cultural Heritage
                  </a>
                </div>
              )}
            </div>
            
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">
              Shop
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;