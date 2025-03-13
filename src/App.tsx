import React from 'react';
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
  Mail
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-700">विरासत</span>
              <span className="ml-2 text-xl font-semibold">Virasat</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">About Us</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">Our Mission</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">Cultural Experiences</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">Contact Us</a>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80"
            alt="Indian Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Discover India's Rich Cultural Heritage</h1>
            <p className="text-xl mb-8">Experience traditions that have stood the test of time, reimagined for the modern world.</p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors flex items-center">
              Explore Heritage
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bridging Past and Present</h2>
            <p className="text-lg text-gray-600 mb-8">
              Virasat seeks to reintroduce cultural elements into daily life, making Indian traditions more accessible and relevant in the modern world. We believe that our heritage is not just about preservation—it's about living, breathing culture that evolves with us.
            </p>
          </div>
        </div>
      </section>

      {/* Our Objectives Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Core Objectives</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cultural Tourism</h3>
              <p className="text-gray-600">Curated experiences that connect you with authentic Indian traditions and heritage sites.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Regional Festivals</h3>
              <p className="text-gray-600">Immersive participation in traditional festivals and cultural practices across India.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <Gift className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cultural Products</h3>
              <p className="text-gray-600">Authentic heritage products that bring traditional elements into modern lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Featured Heritage Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Jal Netri', 'Shankh', 'Mudgar'].map((product) => (
              <div key={product} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`https://images.unsplash.com/photo-1590136019939-18b15dcd71d4?auto=format&fit=crop&q=80`}
                  alt={product}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product}</h3>
                  <p className="text-gray-600 mb-4">Traditional {product.toLowerCase()} crafted by skilled artisans.</p>
                  <button className="text-orange-600 font-semibold flex items-center hover:text-orange-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To become India's premier platform for authentic cultural experiences, making heritage accessible to all while preserving its essence for future generations.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">विरासत Virasat</h3>
              <p className="text-gray-400 mb-6">Connecting hearts through heritage</p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full text-gray-900"
                />
                <button className="bg-orange-600 hover:bg-orange-700 px-6 rounded-r-md flex items-center">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2025 Virasat. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;