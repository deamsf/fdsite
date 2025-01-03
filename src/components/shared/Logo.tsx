import React from 'react';

export const Logo = () => {
  return (
    <a 
      href="#" 
      className="group transition-opacity hover:opacity-80"
      aria-label="Go to homepage"
    >
      <div className="h-10 w-auto relative bg-white/80 rounded-lg p-2 transition-colors group-hover:bg-accent/60">
        <img 
          src="/img/logo/3volve-logo-web.svg" 
          alt="3volve Logo"
          title="3volve Logo"
          className="h-full w-auto"
        />
      </div>
    </a>
  );
};