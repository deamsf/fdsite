import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const DigitalStrategy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const serviceId = sessionStorage.getItem('lastServiceId') || 'digital-strategy';
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById('additional-services')?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    document.title = "Digital Strategy | 3volve - Product Management Consultancy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Shape your digital future with our comprehensive strategy services. We help businesses develop clear, actionable roadmaps for their digital products and services.');
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-accent hover:text-highlight transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </button>

          <h1 className="text-4xl font-bold text-white mb-6">Digital Strategy</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300 text-lg mb-8">
              Shape your digital future with our comprehensive strategy services. We help businesses 
              develop clear, actionable roadmaps for their digital products and services.
            </p>

            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300">
                We're currently working on creating detailed information about our Digital Strategy services. 
                In the meantime, please contact us to learn more about how we can help transform your digital presence.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-highlight hover:bg-highlight/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors mb-12"
            >
              Contact Us
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default DigitalStrategy;