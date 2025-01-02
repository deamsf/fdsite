import React from 'react';
import { motion } from 'framer-motion';
import { icons } from '../shared/icons';
import { Pointer } from 'lucide-react';
import { Vector } from '../shared/Vector';
import { vectors } from '../../constants/vectors';
import type { Service } from './types';

interface ServiceCardProps extends Service {
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}

export const ServiceCardNew: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  icon,
  description,
  isActive,
  onClick,
}) => {
  const Icon = icons[icon];

  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className={`
          group relative p-8 rounded-lg cursor-pointer border-2 transition-colors h-full
          ${isActive 
            ? 'bg-secondary/30 border-accent shadow-lg shadow-accent/20' 
            : 'bg-secondary/20 border-transparent hover:border-accent/30'}
        `}
        onClick={onClick}
        layout
      >
        <div className="relative flex justify-center mb-6">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <Vector 
              viewBox={vectors.serviceCard.viewBox}
              paths={vectors.serviceCard.path}
              className="absolute inset-0 w-full h-full transition-all duration-300"
              color="text-highlight"
              fill={isActive ? "rgba(242, 211, 172, 0.2)" : "transparent"}
            />
            <Icon 
              className="w-8 h-8 text-highlight stroke-1 relative z-10 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>
          <p className="text-tertiary text-sm mb-4 text-center">{subtitle}</p>
          <p className="text-gray-300 text-center">{description}</p>
        </div>
        
        <div className="md:hidden absolute bottom-2 right-2 opacity-30 pointer-events-none">
          <Pointer className="w-4 h-4 text-accent" />
        </div>
      </motion.div>
    </motion.div>
  );
};