import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Rocket, Globe, LineChart, Sparkles } from 'lucide-react';

const services = [
  {
    id: "digitale-strategie",
    icon: Rocket,
    title: "Digitale strategie",
    description: "Ontwikkel een future-proof digitale strategie",
    tagline: "Van marktinzicht naar productexcellentie",
    keywords: ["Strategische planning", "Roadmapping", "Product Vision"],
    path: "/digitale-strategie"
  },
  {
    id: "websites",
    icon: Globe,
    title: "Websites",
    description: "Jouw onepager website, zonder gedoe",
    tagline: "Professioneel, uniek en betaalbaar",
    keywords: ["Modern Design", "SEO-Optimized", "Mobile-First"],
    path: "/websites"
  },
  {
    id: "consulting",
    icon: LineChart,
    title: "Consulting & advies",
    description: "Optimaliseer je business met onze inzichten",
    tagline: "Expert advies voor digitale groei",
    keywords: ["Business Analysis", "Process Optimization", "Growth Strategy"],
    path: "/consulting-advies"
  },
  {
    id: "ai-training",
    icon: Sparkles,
    title: "AI Training",
    description: "Leer AI inzetten om je ideeën te realiseren",
    tagline: "Van idee naar prototype zonder code",
    keywords: ["AI Tools Mastery", "Prompt Engineering", "Rapid Prototyping"],
    path: "/ai-training"
  }
];

interface ServicesPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServicesPanel: React.FC<ServicesPanelProps> = ({ isOpen, onClose }) => {
  const handleServiceClick = (path: string) => {
    onClose();
    window.location.href = path;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      transition={{ duration: 0.2 }}
      className={`absolute top-full left-0 right-0 bg-secondary z-50 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="py-4 px-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service.path)}
              className="w-full text-left py-3 text-white hover:text-accent transition-colors flex items-center justify-between"
            >
              <span>{service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
        className="hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                className="group cursor-pointer h-full"
                onClick={() => handleServiceClick(service.path)}
              >
                <div className="bg-primary h-full rounded-lg p-8 transition-all duration-300 hover:bg-primary/80">
                  <div className="flex items-start justify-between mb-6">
                    <service.icon className="w-10 h-10 text-highlight" />
                    <ArrowRight className="w-6 h-6 text-accent opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-accent font-medium">
                      {service.tagline}
                    </p>

                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>

                    <div className="pt-4 border-t border-accent/10">
                      <div className="flex flex-wrap gap-2 items-center">
                        {service.keywords.map((keyword, index) => (
                          <React.Fragment key={keyword}>
                            <span className="text-gray-400 text-sm whitespace-nowrap">
                              {keyword}
                            </span>
                            {index < service.keywords.length - 1 && (
                              <span className="text-gray-600">•</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};