import React from 'react';

interface LogoProps {
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center gap-2">
      <a 
        href="/"
        className="text-gray-300 hover:text-accent transition-colors"
        aria-label="Go to homepage"
      >
        <div className="h-10 w-auto relative bg-white/80 rounded-lg p-2 transition-colors group-hover:bg-accent/60">
          <img 
            src="/img/logo/3volve-logo-web.svg" 
            alt="3volve Home"
            title="3volve Home"
            className="h-full w-auto"
          />
        </div>
      </a>
      <div className="flex items-center gap-1 bg-accent/10 px-2 py-0.5 rounded text-[10px] text-accent">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span>Under Construction</span>
      </div>
    </div>
  );
};