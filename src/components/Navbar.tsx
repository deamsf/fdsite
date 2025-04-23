import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './shared/Logo';
import { navigation } from '../constants/navigation';
import { ServicesPanel } from './navbar/ServicesPanel';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesPanelOpen, setIsServicesPanelOpen] = React.useState(false);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setIsServicesPanelOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleServicesPanel = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesPanelOpen(!isServicesPanelOpen);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    // Close services panel when toggling mobile menu
    if (isServicesPanelOpen) {
      setIsServicesPanelOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-primary/50 backdrop-blur-md z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <button
                onClick={toggleServicesPanel}
                className="navbar-link text-gray-300 hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors inline-flex items-center gap-1 group"
              >
                Wat ik doe
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesPanelOpen ? 'rotate-180' : ''} group-hover:text-accent`} />
              </button>
              {navigation.links.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="navbar-link text-gray-300 hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-accent p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-primary/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={toggleServicesPanel}
                className="navbar-link text-gray-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
              >
                <span>Wat ik doe</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesPanelOpen ? 'rotate-180' : ''}`} />
              </button>
              {navigation.links.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="navbar-link text-gray-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Services Panel */}
        <ServicesPanel 
          isOpen={isServicesPanelOpen} 
          onClose={() => setIsServicesPanelOpen(false)} 
        />
      </div>
    </nav>
  );
};
