import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, ArrowRight, Check } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';
import { Vector } from './shared/Vector';
import { vectors } from '../constants/vectors';
import { services } from '../constants/services';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ServiceIcon = ({ Icon }: { Icon: typeof Rocket }) => {
  const iconControls = useAnimationControls();

  const handleHover = async () => {
    await iconControls.start({
      rotate: [0, -5, 5, -3, 3, 0],
      transition: {
        duration: 1.2,
        ease: "easeOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    });
  };

  return (
    <motion.div 
      className="relative w-24 h-24 flex items-center justify-center mb-6"
      onMouseEnter={handleHover}
      animate={iconControls}
      style={{ transformOrigin: "top center" }}
    >
      <Vector 
        viewBox={vectors.serviceCard.viewBox}
        paths={vectors.serviceCard.path}
        className="absolute inset-0 w-full h-full"
        color="text-highlight"
        fill="rgba(242, 211, 172, 0.1)"
      />
      <Icon className="w-10 h-10 text-highlight stroke-[1.25] relative z-10" />
    </motion.div>
  );
};

export const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (path: string, serviceId: string) => {
    sessionStorage.setItem('lastServiceId', serviceId);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section id="services" className="py-20 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">What we do</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.id}
              variants={item}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center mb-8">
                  <ServiceIcon Icon={service.icon} />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-accent mt-2">{service.description}</p>
                  </div>
                </div>

                <p className="text-gray-300">{service.subtext}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-highlight mr-2 shrink-0 mt-0.5 stroke-[1.25]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-highlight hover:bg-highlight/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4 stroke-[1.25]" />
                  </a>
                  <button
                    onClick={() => handleLearnMore(service.path, service.id)}
                    className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 stroke-[1.25]" />
                  </button>
                </div>
              </div>

              <div className={`h-[350px] ${index % 2 === 0 ? 'md:order-last' : 'md:order-first'}`}>
                <div className="relative h-full w-full rounded-lg overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};