import React from 'react';
import { Vector } from './Vector';
import { vectors } from '../../constants/vectors';

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 relative">
        <Vector 
          className="opacity-100" 
          color="text-accent"
          viewBox={vectors.logo.viewBox}
          paths={vectors.logo.paths}
        />
      </div>
      <div>
        <span className="text-white text-2xl font-bold font-['Exo']">3volve</span>
        <span className="text-highlight text-base ml-2 hidden sm:inline font-['Exo'] tracking-widest">
          Discover. Design. Delight.
        </span>
      </div>
    </div>
  );
};