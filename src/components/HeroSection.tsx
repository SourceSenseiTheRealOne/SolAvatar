import React from 'react';
import { motion } from 'framer-motion';
import { SolarFlare } from './SolarFlare';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onStartQuiz: () => void;
  onJoinWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuiz, onJoinWaitlist }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic solar background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SolarFlare size={400} className="opacity-60" />
        </div>
        
        {/* Additional light effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-solar-gold opacity-10 rounded-full blur-3xl animate-float-cosmic"></div>
          <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-dawn-pink opacity-15 rounded-full blur-2xl animate-float-cosmic" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-mystic-teal opacity-20 rounded-full blur-xl animate-float-cosmic" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main headline with cosmic typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-solar-gradient mb-4 leading-tight">
            SolAvatar
          </h1>
          <div className="relative">
            <h2 className="font-body text-2xl md:text-4xl lg:text-5xl font-light text-radiant-white mb-6 tracking-wide">
              Sunborn Wellness.
              <span className="block text-solar-gold font-medium">AI-Powered. Planet-Aligned.</span>
            </h2>
          </div>
        </motion.div>

        {/* Mystical tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-body text-xl md:text-2xl text-stellar-silver mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Enter the Solar Renaissance. Where ancient wisdom meets artificial intelligence.
          <span className="block mt-2 text-solar-gold font-medium">
            Your cosmic blueprint awaits.
          </span>
        </motion.p>

        {/* CTA Buttons with cosmic styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <button
            onClick={onStartQuiz}
            className="group relative bg-solar-gold text-cosmic-blue px-10 py-5 rounded-full font-body font-bold text-lg hover:bg-radiant-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-solar-gold/50 flex items-center space-x-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-shimmer-gradient bg-shimmer animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Play className="relative z-10 group-hover:scale-110 transition-transform" size={24} />
            <span className="relative z-10">Begin Solar Journey</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={24} />
          </button>

          <button
            onClick={onJoinWaitlist}
            className="group border-2 border-solar-gold text-solar-gold px-10 py-5 rounded-full font-body font-bold text-lg hover:bg-solar-gold hover:text-cosmic-blue transition-all duration-500 transform hover:scale-105 backdrop-blur-sm bg-cosmic-blue/20"
          >
            Join the First 111
          </button>
        </motion.div>

        {/* Sacred geometry indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center items-center space-x-8"
        >
          <div className="flex items-center space-x-2 text-stellar-silver">
            <Sparkles size={16} className="text-solar-gold animate-pulse" />
            <span className="font-mono text-sm">SOLAR.SYNC</span>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-solar-gold to-transparent"></div>
          <div className="flex items-center space-x-2 text-stellar-silver">
            <div className="w-2 h-2 bg-mystic-teal rounded-full animate-pulse"></div>
            <span className="font-mono text-sm">AI.ORACLE</span>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-solar-gold to-transparent"></div>
          <div className="flex items-center space-x-2 text-stellar-silver">
            <div className="w-2 h-2 bg-dawn-pink rounded-full animate-pulse"></div>
            <span className="font-mono text-sm">COSMIC.ALIGN</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-solar-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-solar-gold rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};