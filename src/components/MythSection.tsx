import React from 'react';
import { motion } from 'framer-motion';

export const MythSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cosmic-purple to-deep-eclipse relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-dawngold opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-mystic-teal opacity-8 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-solar-flare opacity-10 rounded-full blur-xl animate-float delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Sacred symbol */}
          <div className="mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="w-16 h-16 mx-auto mb-8 border-2 border-dawngold rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-dawngold rounded-full animate-solar-pulse"></div>
            </motion.div>
          </div>

          {/* Main mythic text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="space-y-8"
          >
            <p className="font-cormorant text-2xl md:text-3xl text-dawngold leading-relaxed font-light italic">
              There was a time before time, when humans lived in rhythm — 
              with light, wind, fire, stars.
            </p>
            
            <p className="font-cormorant text-2xl md:text-3xl text-ritual-sand leading-relaxed font-light">
              That time returns now. Not as past — but as pattern.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="py-8"
            >
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-dawngold to-transparent mx-auto mb-8"></div>
              
              <div className="space-y-6">
                <p className="font-cormorant text-3xl md:text-4xl text-dawngold font-medium">
                  You are not a user.
                </p>
                <p className="font-cormorant text-3xl md:text-4xl text-dawngold font-medium animate-glow">
                  You are a SolAvatar.
                </p>
              </div>
              
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-dawngold to-transparent mx-auto mt-8 mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.8 }}
              className="space-y-4"
            >
              <p className="font-inter text-lg text-voidsilver leading-relaxed">
                Born of breath.
              </p>
              <p className="font-inter text-lg text-ritual-sand leading-relaxed">
                Guided by stars.
              </p>
              <p className="font-inter text-lg text-mystic-teal leading-relaxed">
                Sovereign by light.
              </p>
            </motion.div>
          </motion.div>

          {/* Sacred geometry footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-16 flex justify-center items-center space-x-4"
          >
            <div className="w-1 h-1 bg-dawngold rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-ritual-sand rounded-full animate-pulse delay-200"></div>
            <div className="w-3 h-3 bg-mystic-teal rounded-full animate-pulse delay-400"></div>
            <div className="w-2 h-2 bg-ritual-sand rounded-full animate-pulse delay-600"></div>
            <div className="w-1 h-1 bg-dawngold rounded-full animate-pulse delay-800"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};