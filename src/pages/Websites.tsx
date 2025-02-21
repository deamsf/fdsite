import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';

const Websites = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const serviceId = sessionStorage.getItem('lastServiceId') || 'websites';
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
        title="Kleine professionele websites zonder zorgen | 3volve Consulting"
        description="Professionele websites die resultaat opleveren. Perfect voor kleine bedrijven en starters die op zoek zijn naar een sterke online aanwezigheid zonder gedoe of lock-in."
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

          <h1 className="text-4xl font-bold text-white mb-6">Websites voor kleine ondernemingen</h1>
          <div className="prose prose-invert">
            <div className="space-y-8">
              <div className="text-gray-300">
                <h2 className="text-gray-300 text-lg mb-8">
                  Veel kleine bedrijven worstelen met sterk verouderde websites en/of dure ontwikkelingskosten.
                </h2>
              </div>

              <div className="text-gray-300">
                <p className="mb-6">
                  Wij bieden een strakke one-pager website-oplossing, perfect voor kleine ondernemingen die een heldere, effectieve online aanwezigheid nodig hebben voor een betaalbare en transparante prijs. Geen gedoe, geen geheimen!
                </p>
              </div>

              <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
                <h2 className="text-2xl font-bold text-white mb-6">Wat je krijgt</h2>
                <ul className="space-y-4">
                  {[
                  'A moderne, professionele en gestroomlijnde onepager-website, gebouwd voor waarde en efficiëntie',
'Op maat gemaakte one-page website afgestemd op jouw merk',
'Op maat gemaakt ontwerp & inhoud voor een professionele uitstraling',
'Eén intakegesprek en één revisieronde',
'Geen ingewikkelde systemen, gewoon een strakke, moderne website die doet wat hij moet doen',
'Snelle laadtijd & mobielvriendelijk voor de beste gebruikerservaring',
'Geen rommel, geen gedoe, geen verborgen kosten'

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
                'We verkopen geen onnodige extra\'s. Je krijgt een eenvoudige, aantrekkelijke website voor jouw budget die doet wat hij moet doen.',
'We zijn hier om te helpen. Wil je nieuwe of extra inhoud? Je krijgt een eerlijke offerte voor uurtariefwerk.',
'We zetten je niet vast. Jij bezit je website en domeinnaam.'

                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-highlight shrink-0">🔹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-300 text-lg mb-8">
                Een nieuwe website die gewoon doet wat moet, zonder zorgen? Laten we kennismaken! 
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

export default Websites;
