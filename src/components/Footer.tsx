import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, BookOpen } from 'lucide-react';
import { landingPages } from '../constants/landing-pages';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'X (Twitter)' },
    { icon: BookOpen, href: '#', label: 'Medium' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  // Split landing pages into 3 columns
  const chunkSize = Math.ceil(landingPages.length / 3);
  const columns = Array.from({ length: 3 }, (_, i) => 
    landingPages.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <>
      {/* Subfooter with landing pages */}
      <div className="bg-secondary/10 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white text-center mb-8">Meer lezen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {columns.map((column, colIndex) => (
              <div key={`col-${colIndex}`} className="flex flex-col items-center md:items-start gap-4">
                {column.map((page, pageIndex) => (
                  <Link
                    key={`${page.href}-${colIndex}-${pageIndex}`}
                    to={page.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                    title={page.description}
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <footer className="bg-primary/95 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} 3volve Consulting (BE1018741807). Alle rechten voorbehouden. </span>
              <span>•</span>
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/cookies" className="hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
