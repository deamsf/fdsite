import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary pt-16 relative">
      <HeroBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-tertiary font-medium mb-4">Product management at your service</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          We help you turn market insights into product excellence
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover. Design. Delight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-highlight hover:bg-highlight/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
          >
            Contact Us
            <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => scrollToSection('cases')}
            className="border border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg font-semibold transition-all"
          >
            View Cases
          </button>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Hero;