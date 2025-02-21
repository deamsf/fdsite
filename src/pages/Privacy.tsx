import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <SEO 
        title="Privacy Policy | 3volve Consulting"
        description="Lees hoe we uw persoonlijke gegevens beschermen en behandelen bij 3volve. Ons privacybeleid beschrijft onze toewijding aan gegevensbescherming en privacy van gebruikers."
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
            <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
            <div className="text-gray-300 space-y-4">
              <p>Ons privacybeleid wordt momenteel ontwikkeld.</p>
              <p>Kijk binnenkort nog eens terug.</p>
              <p>Als je intussen vragen hebt, aarzel dan niet om contact met ons op te nemen.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
