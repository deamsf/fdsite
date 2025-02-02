import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import HeroBackground from './HeroBackground';

interface HeroProps {
  carouselDelay?: number; // Delay in milliseconds between word changes
}

const Hero: React.FC<HeroProps> = ({ carouselDelay = 2500 }) => {
  const words = ['strategy', 'digital', 'product', 'business'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, carouselDelay);

    return () => clearInterval(interval);
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
          <p className="text-tertiary font-medium mb-6 tracking-wide animate-fade-in">
            Shaping your digital success
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            We help you turn market insights into{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 flex items-center justify-center">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className="absolute transition-all duration-300 transform"
                    style={{
                      opacity: currentWordIndex === index ? 1 : 0,
                      transform: `translateY(${currentWordIndex === index ? '0' : '20px'})`,
                      transitionDelay: '150ms'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
              <span className="invisible">{words[0]}</span>
            </span>{' '}excellence
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl">
            
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-highlight hover:bg-highlight/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto border border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </div>
  );
};

export default Hero;