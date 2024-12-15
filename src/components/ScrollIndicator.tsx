import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      onClick={scrollToContent}
    >
      <ChevronDown 
        size={32} 
        className="text-accent hover:text-highlight transition-colors"
      />
    </div>
  );
};

export default ScrollIndicator;