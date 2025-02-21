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
        title="Cookie Policy | 3volve Consulting"
        description="Lees meer over hoe we cookies gebruiken om uw ervaring op de website van 3volve Consulting te verbeteren. Ons cookiebeleid legt uit welke gegevens we verzamelen en hoe we deze gebruiken."
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
              <p>Ons cookiebeleid wordt momenteel ontwikkeld.</p>
              <p>Kijk binnenkort nog eens terug.</p>
              <p>Als je vragen hebt, aarzel dan niet om contact met ons op te nemen.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
