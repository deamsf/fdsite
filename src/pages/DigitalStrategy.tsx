import React, { useEffect } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServicesSection } from '../components/services/ServicesSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';

const DigitalStrategy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const serviceId = sessionStorage.getItem('lastServiceId') || 'digitale-strategie';
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById('additional-services')?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <SEO 
        title="Digitale Product en Marketing Strategie | 3volve Consulting"
        description="Bepaal je digitale toekomst met onze uitgebreide strategische diensten. We helpen bedrijven duidelijke, haalbare roadmaps te ontwikkelen voor hun digitale producten en diensten."
      />
      <div className="min-h-screen bg-primary py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-accent hover:text-highlight transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Terug naar onze diensten</span>
          </button>

          <h1 className="text-4xl font-bold text-white mb-6">Digitale Strategie</h1>
          <div className="prose prose-invert">
            <h2 className="text-gray-300 text-lg mb-8">
              Vorm je digitale toekomst met onze uitgebreide strategieën op jouw maat
            </h2>

            <div className="text-gray-300 mb-12">
              <p>
                Wij helpen je om marktinzichten om te zetten in productexcellentie. We helpen bedrijven duidelijke, haalbare en vooral doelgerichte roadmaps te ontwikkelen voor hun digitale producten en diensten. 
                Onze aanpak combineert diepgaand inzicht verwerven met strategische planning om ervoor te zorgen dat je digitale initiatieven échte waarde leveren.
              </p>
            </div>
          </div>
        </div>

        <ServicesSection />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="space-y-8">
            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
              <h2 className="text-2xl font-bold text-white mb-6">Wat je krijgt</h2>
              <ul className="space-y-4">
                {[
                  'Uitgebreide digitale strategie en roadmap',
                  'Duidelijke visie en missieverklaring voor je digitale initiatieven',
                  'Gedetailleerde gebruikerspersona\'s en customer journeymapping',
                  'Concurrentieanalyse en marktpositionering',
                  'Haalbaar implementatieplan met duidelijke mijlpalen',
                  'KPI-raamwerk om succes te meten',
                  'Regelmatige strategiereview en aanpassingssessies'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
              <h2 className="text-2xl font-bold text-white mb-6">Waarom voor ons kiezen?</h2>
              <ul className="space-y-4">
                {[
                  'Diepgaande expertise in digitale productstrategie en marktanalyse',
                  'Bewezen methode die gebruikersbehoeften combineert met bedrijfsdoelen',
                  'Focus op haalbare, meetbare resultaten',
                  'Flexibele aanpak die zich aanpast aan jouw bedrijfscontext',
                  'Continue ondersteuning tijdens de implementatie van de strategie'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-highlight shrink-0">🔹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-300 text-lg mb-8">
                Klaar om je digitale strategie te ontwikkelen en je producten en diensten een boost te geven? Laten we samen zitten!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default DigitalStrategy;
