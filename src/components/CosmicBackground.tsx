import React from 'react';
import { motion } from 'framer-motion';

export const CosmicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base cosmic gradient */}
      <div className="absolute inset-0 bg-cosmic-gradient"></div>
      
      {/* Neural grid overlay */}
      <div className="absolute inset-0 bg-neural-grid bg-neural opacity-30"></div>
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-solar-gold rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`
          }}
          animate={{
            y: [window.innerHeight, -100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15
          }}
        />
      ))}
      
      {/* Aurora effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-aurora-gradient opacity-20 animate-aurora blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-mystic-teal/20 to-transparent animate-aurora blur-xl" style={{ animationDelay: '5s' }}></div>
      
      {/* Orbiting elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2">
        <div className="w-1 h-1 bg-dawn-pink rounded-full animate-orbit"></div>
      </div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2">
        <div className="w-1 h-1 bg-dusk-lavender rounded-full animate-orbit" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};