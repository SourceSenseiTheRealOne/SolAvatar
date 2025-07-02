import React from 'react';
import { motion } from 'framer-motion';
import { SolarIcon } from './SolarIcon';
import { ArrowRight, Clock } from 'lucide-react';

interface HeroSectionProps {
  onStartQuiz: () => void;
  onJoinWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuiz, onJoinWaitlist }) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <section className="min-h-screen bg-gradient-to-br from-deep-eclipse via-cosmic-purple to-deep-eclipse relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-dawngold opacity-10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-solar-flare opacity-15 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-dawn-sky opacity-20 rounded-full blur-lg animate-float delay-2000"></div>
      </div>
      
      {/* Solar hour indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 right-8 flex items-center space-x-2 text-dawngold bg-black bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm"
      >
        <Clock size={16} />
        <span className="text-sm font-inter">{currentTime}</span>
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Solar sigil */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <SolarIcon size={120} className="animate-solar-pulse" />
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-cormorant text-5xl md:text-7xl font-bold text-dawngold mb-6 animate-glow"
        >
          Sunborn Wellness
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-cormorant text-2xl md:text-3xl text-ritual-sand mb-4"
        >
          AI-Powered. Planet-Aligned.
        </motion.div>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-inter text-lg md:text-xl text-voidsilver mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Enter the Solar Renaissance. Create your SolProfile.<br />
          <span className="text-dawngold font-medium">AI meets Ayurveda. Light meets Lifestyle. Myth meets Molecule.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button 
            onClick={onStartQuiz}
            className="group bg-dawngold text-deep-eclipse px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-solar-flare transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-dawngold/30 flex items-center space-x-2"
          >
            <span>Begin Solar Quiz</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button 
            onClick={onJoinWaitlist}
            className="group border-2 border-dawngold text-dawngold px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-dawngold hover:text-deep-eclipse transition-all duration-300 transform hover:scale-105"
          >
            Join Waitlist
          </button>
        </motion.div>

        {/* Mystical tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="font-cormorant text-ritual-sand italic text-lg mt-12 opacity-80"
        >
          SolAvatar is your solar self — decoded, ritualized, reawakened.
        </motion.p>
      </div>
    </section>
  );
};