import React from 'react';

interface SolarIconProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export const SolarIcon: React.FC<SolarIconProps> = ({ 
  size = 64, 
  className = '', 
  animate = true 
}) => {
  return (
    <div className={`${className} ${animate ? 'animate-solar-rotate' : ''}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="drop-shadow-lg"
      >
        {/* Outer rays */}
        <g stroke="#FFD700" strokeWidth="2" fill="none">
          <line x1="50" y1="5" x2="50" y2="15" />
          <line x1="71" y1="12" x2="67" y2="21" />
          <line x1="88" y1="29" x2="79" y2="33" />
          <line x1="95" y1="50" x2="85" y2="50" />
          <line x1="88" y1="71" x2="79" y2="67" />
          <line x1="71" y1="88" x2="67" y2="79" />
          <line x1="50" y1="95" x2="50" y2="85" />
          <line x1="29" y1="88" x2="33" y2="79" />
          <line x1="12" y1="71" x2="21" y2="67" />
          <line x1="5" y1="50" x2="15" y2="50" />
          <line x1="12" y1="29" x2="21" y2="33" />
          <line x1="29" y1="12" x2="33" y2="21" />
        </g>
        
        {/* Inner circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="20" 
          fill="url(#solarGradient)" 
          stroke="#FFD700" 
          strokeWidth="2"
        />
        
        {/* Sacred geometry center */}
        <circle cx="50" cy="50" r="8" fill="#FF8800" opacity="0.8" />
        <circle cx="50" cy="50" r="4" fill="#FFD700" />
        
        <defs>
          <radialGradient id="solarGradient">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FF8800" />
            <stop offset="100%" stopColor="#D4A574" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};