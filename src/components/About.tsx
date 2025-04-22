import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { Vector } from './shared/Vector';
import { vectors } from '../constants/vectors';
import Capabilities from './Capabilities';
import frank from '../assets/images/frank-orig-s.png?auto=format&fit=crop';


const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Over mij</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ik geloof in "de gevoelige snaar" en in "geef een man geen vis"
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/3 flex items-center">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 animate-float">
                  <img
                    src={frank}
                    alt="Frank Damen"
                    className="w-full h-full object-cover"
                    style={{
                      clipPath: "path('M 4 80 Q 110 7 220 20 Q 218 130 135 226 Q 41 173 4 80 Z')"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
                    style={{
                      clipPath: "path('M 4 80 Q 110 7 220 20 Q 218 130 135 226 Q 41 173 4 80 Z')"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-2/3 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-4"> </h3>
                <p className="text-gray-300">Hallo, ik ben Frank, product manager en digitaal omnivoor. Mijn habitat is in de doorsnede van business, technologie en communicatie. Mijn missie? Jou strategisch versterken en je digitale ambities waarmaken.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent mb-4"> </h3>
                <p className="text-gray-300">
                   Ik help bedrijven impact maken met een doordachte strategie en doelgerichte productontwikkeling, zodat geen middelen verloren gaan aan digitale initiatieven zonder effect. Daarnaast help ik kleine ondernemingen een stevige plek vinden in het digitale landschap met een unieke, betaalbare website zonder gedoe en helder advies op maat – zonder verborgen kosten of lopende facturen. Geen vis, maar een hengel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;