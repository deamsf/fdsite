import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';

const BusinessAudit = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const serviceId = sessionStorage.getItem('lastServiceId') || 'consulting-advies';
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
        title="Digitale consulting & advies | 3volve Consulting"
        description="Het digitale landschap kan overweldigend zijn en vol uitdagingen zitten, maar biedt ook volop opportuniteiten. Optimaliseer je business met onze inzichten en strategische ondersteuning."
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

          <h1 className="text-4xl font-bold text-white mb-6">Optimaliseer je digitale business met ons advies</h1>
          <div className="prose prose-invert">
            <h2 className="text-gray-300 text-lg mb-8">
              Leg inefficiënties bloot, ontdek digitale opportuniteiten en creëer ruimte om te groeien.
            </h2>

            <div className="space-y-8">
              <div className="text-gray-300">
                <p className="mb-6">
                  Veel bedrijven worstelen met verouderde processen en missen kansen in hun markt. Ons advies helpt je bij het identificeren van frictiepunten en adviseert je bij het optimaliseren van je processen. Geen hoogdravende blabla. Wel praktische ideeën, oplossingen en andere bootsts voor je efficiëntie, groei en succes op lange termijn.
                </p>
              </div>

              <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
                <h2 className="text-2xl font-bold text-white mb-6">Wat we bieden</h2>
                <ul className="space-y-6">
                  <li className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Analyse</h3>
                        <p className="text-gray-300">We analyseren je digitale middelen</p>
                      </div>
                    </div>
                  </li>
                  <li className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Optimalisaties</h3>
                        <p className="text-gray-300">We werken een strategische aanpak uit en plannen je volgende stappen</p>
                      </div>
                    </div>
                  </li>
                  <li className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Implementatie</h3>
                        <p className="text-gray-300">We adviseren jou en je team bij de implementatie van de nieuwigheden</p>
                      </div>
                    </div>
                  </li>
                  <li className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Communicatie</h3>
                        <p className="text-gray-300">Ook je communicatie naar je klant of gebruiker kan op onze expertise rekenen.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
                <h2 className="text-2xl font-bold text-white mb-6">Waarom kiezen voor ons?</h2>
                <ul className="space-y-4">
                  {[
                    'Praktische inzichten – Geen vage aanbevelingen, alleen duidelijke, bruikbare strategieën die je kunt implementeren.',
                    'Gepersonaliseerde aanpak – Elk bedrijf is uniek, dus stemmen we ons advies af op jouw specifieke behoeften.',
                    'Efficiëntiegericht – We helpen je verspilling te elimineren, middelen te optimaliseren en winstgevendheid te maximaliseren.',
                    'Toekomstgericht – Onze strategieën gaan niet alleen over het oplossen van de problemen van vandaag, maar zorgen ook voor langetermijnsucces.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-highlight shrink-0">🔹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-300 text-lg mb-8">
                Wil je het volledige potentieel van je bedrijf benutten? Laat van je horen!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default BusinessAudit;
