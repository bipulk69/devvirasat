import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Navigation from './Navigation';

const TourismPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Reuse the Navigation component */}
      <Navigation />
      
      {/* Tourism Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&q=80"
            alt="Indian Cultural Tourism"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Tourism</h1>
            <p className="text-xl font-bold mb-2">We're bringing cultural and heritage based tourism to you very shortly. </p>
            <p className='font-bold text-xl mb-4'>Stay tuned !</p>
            
            {/* Waitlist Section */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
              
              {submitted ? (
                <div className="bg-green-700/80 text-white px-4 py-3 rounded mb-4">
                  <p>Thank you for joining our waitlist! We'll notify you when we launch.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="waitlist-email" className="block text-m font-medium mb-2">
                  If the beauty of our culture speaks to your soul and you’re ready to live it firsthand..
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded text-gray-800 focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Join Waitlist
                </button>
              </form>
            </div>
            <div className='text-xl mb-2'></div>
          </div>
        </div>
      </div>
      
      {/* Love for Culture Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience the Beauty of Our Culture</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you are someone who loves the beauty of our culture and wants to experience it firsthand, 
              our upcoming cultural tourism experiences are designed just for you.
            </p>
            <p className="text-lg text-gray-600">
              From ancient temples to traditional art forms, from folk music to culinary delights — 
              we're preparing immersive journeys that will connect you with the true essence of India's heritage.
            </p>
          </div>
        </div>
      </section>
      
      {/* What to Expect Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Authentic Experiences</h3>
              <p className="text-gray-600">
                Carefully curated journeys designed to immerse you in genuine cultural experiences.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Expert Guides</h3>
              <p className="text-gray-600">
                Local experts who bring stories and traditions to life with their knowledge and passion.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Responsible Tourism</h3>
              <p className="text-gray-600">
                Tourism that respects and contributes to local communities and preserves our heritage.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Footer - Reuse the same footer from your main page */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2025 Virasat. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TourismPage;