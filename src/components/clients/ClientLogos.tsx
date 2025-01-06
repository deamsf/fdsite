import React from 'react';
import { clientLogos } from './logos';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-16 text-center font-display">
          Clients
        </h2>
        
        <div className="flex justify-center items-center gap-16">
          {clientLogos.map((logo) => (
            <div 
              key={logo.name}
              className="w-32 h-16 relative opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <logo.Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};