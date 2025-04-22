import React from 'react';

interface VectorProps {
  className?: string;
  color?: string;
  viewBox: string;
  paths: string | string[];
  fill?: string;
  strokeWidth?: string | number;
  gradient?: boolean;
}

export const Vector: React.FC<VectorProps> = ({ 
  className = "opacity-5",
  color = "currentColor",
  viewBox,
  paths,
  fill = "none",
  strokeWidth = "2",
  gradient = false
}) => {
  const gradientId = `vector-gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid slice"
          className={`w-full h-full stroke-current ${color}`}
          style={{ strokeWidth }}
        >
          {gradient && (
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: 'var(--color-highlight)', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
          )}
          <g>
            {Array.isArray(paths) ? (
              paths.map((path, index) => (
                <path 
                  key={index} 
                  d={path} 
                  fill={fill} 
                  strokeMiterlimit="10"
                  stroke={gradient ? `url(#${gradientId})` : undefined}
                />
              ))
            ) : (
              <path 
                d={paths} 
                fill={fill} 
                strokeMiterlimit="10"
                stroke={gradient ? `url(#${gradientId})` : undefined}
              />
            )}
          </g>
        </svg>
      </div>
    </div>
  );
};