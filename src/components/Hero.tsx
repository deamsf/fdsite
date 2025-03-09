import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import HeroBackground from './HeroBackground';

interface HeroProps {
  carouselDelay?: number;
}

const Hero: React.FC<HeroProps> = ({ carouselDelay = 2500 }) => {
  const subtitleWords = ['strategy', 'product', 'presence', 'communication', 'success'];
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitleWords.length);
    }, carouselDelay);

    return () => clearInterval(subtitleInterval);
  }, [carouselDelay]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary animate-gradient">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="text-tertiary font-medium mb-6 tracking-wide animate-fade-in relative h-6">
            Shaping your digital{' '}
            <span className="relative inline-block w-24">
              <span className="absolute inset-0 flex items-center justify-start">
                {subtitleWords.map((word, index) => (
                  <span
                    key={word}
                    className="absolute transition-all duration-300 transform whitespace-nowrap"
                    style={{
                      opacity: currentSubtitleIndex === index ? 1 : 0,
                      transform: `translateY(${currentSubtitleIndex === index ? '0' : '20px'})`,
                      transitionDelay: '150ms'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
              <span className="invisible">{subtitleWords[0]}</span>
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            We help you turn market insights into digital excellence
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl">
            
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="w-full sm:w-auto bg-highlight hover:bg-highlight/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              Contacteer ons
              <MessageSquare className="w-5 h-5" />
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="w-full sm:w-auto border border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Onze diensten
            </a>
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </div>
  );
};

export default Hero;
