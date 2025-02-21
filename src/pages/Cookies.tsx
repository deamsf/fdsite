import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';

const Cookies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <SEO 
        title="Cookie Policy | 3volve - Privacy & Security"
        description="Learn about how we use cookies to improve your experience on 3volve's website. Our cookie policy explains what data we collect and how we use it."
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-accent hover:text-highlight transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Terug naar de homepagina</span>
          </button>

          <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
            <h1 className="text-3xl font-bold text-white mb-6">Cookie Policy</h1>
            <div className="text-gray-300 space-y-4">
              <p>Our cookie policy is currently being updated to ensure transparency about how we use cookies on our website.</p>
              <p>Please check back soon.</p>
              <p>If you have any immediate questions about our use of cookies, please don't hesitate to contact us.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;