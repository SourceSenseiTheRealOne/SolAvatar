import React from 'react';
import { motion } from 'framer-motion';

interface SolarFlareProps {
  size?: number;
  className?: string;
}

export const SolarFlare: React.FC<SolarFlareProps> = ({ size = 200, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width={size} height={size} viewBox="0 0 200 200" className="drop-shadow-2xl">
          <defs>
            <radialGradient id="solarCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="30%" stopColor="#FFA500" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#FF6347" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF4500" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="solarFlare" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Outer flare */}
          <circle cx="100" cy="100" r="90" fill="url(#solarFlare)" className="animate-pulse-glow" />
          
          {/* Solar rays */}
          <g stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.7">
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x1 = 100 + Math.cos(angle) * 60;
              const y1 = 100 + Math.sin(angle) * 60;
              const x2 = 100 + Math.cos(angle) * 85;
              const y2 = 100 + Math.sin(angle) * 85;
              return (
                <motion.line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </g>
          
          {/* Core sun */}
          <circle cx="100" cy="100" r="40" fill="url(#solarCore)" />
          
          {/* Inner core */}
          <circle cx="100" cy="100" r="20" fill="#FFFFFF" opacity="0.9" />
          <circle cx="100" cy="100" r="8" fill="#FFD700" />
        </svg>
      </motion.div>
    </div>
  );
};