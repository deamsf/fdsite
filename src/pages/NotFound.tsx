import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Search, Compass } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Vector } from '../components/shared/Vector';
import { vectors } from '../constants/vectors';

const NotFound = () => {
  const navigate = useNavigate();

  const suggestions = [
    {
      title: 'Digitale Strategie',
      description: 'Ontwikkel een future-proof digitale strategie',
      path: '/digitale-strategie',
      icon: Compass
    },
    {
      title: 'Websites',
      description: 'Jouw onepager website, zonder gedoe',
      path: '/websites',
      icon: Search
    }
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <SEO 
        title="Pagina Niet Gevonden | 3volve Consulting"
        description="Sorry, we kunnen de pagina die je zoekt niet vinden. Ontdek onze andere diensten of ga terug naar de homepagina."
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32 mx-auto mb-8"
            >
              <Vector 
                viewBox={vectors.serviceCard.viewBox}
                paths={vectors.serviceCard.path}
                className="absolute inset-0 w-full h-full"
                color="text-highlight"
                fill="rgba(242, 211, 172, 0.1)"
              />
              <div className="absolute inset-0 flex items-center justify-center text-highlight text-6xl font-bold">
                404
              </div>
            </motion.div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oeps! Deze pagina bestaat niet.
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Het lijkt erop dat je een pagina probeert te bereiken die niet (meer) bestaat. 
              Geen zorgen, we helpen je graag verder!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center gap-2 bg-highlight hover:bg-highlight/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Naar de homepagina</span>
              </button>
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 border border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Ga terug</span>
              </button>
            </div>

            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
              <h2 className="text-xl font-semibold text-white mb-6">
                Misschien ben je hierin geïnteresseerd?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {suggestions.map((suggestion) => (
                  <motion.div
                    key={suggestion.path}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-primary/50 rounded-lg cursor-pointer hover:bg-primary/70 transition-colors"
                    onClick={() => navigate(suggestion.path)}
                  >
                    <suggestion.icon className="w-8 h-8 text-highlight mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {suggestion.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {suggestion.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
