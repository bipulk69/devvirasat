import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { saveContactSubmission } from '../services/firebaseService';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await saveContactSubmission(formData);
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError('There was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <section id="contact" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Have questions about our heritage experiences or products? We'd love to hear from you!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> We've received your message and will get back to you soon.</span>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                  id="message"
                  placeholder="Tell us how we can help you..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-gray-600">contact@virasat.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Visit Us</h4>
                    <p className="text-gray-600">
                      Virasat Heritage Center<br />
                      123 Cultural Street<br />
                      New Delhi, 110001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-600 rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Our Mission</h3>
              <p className="mb-4">
                We're dedicated to preserving and promoting India's rich cultural heritage 
                through immersive experiences and authentic products.
              </p>
              <p>
                Join us in celebrating the traditions that make our culture unique!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;