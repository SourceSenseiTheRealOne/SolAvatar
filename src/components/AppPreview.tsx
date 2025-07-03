import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Sun, Moon, Zap, Heart, Brain } from 'lucide-react';

export const AppPreview: React.FC = () => {
  return (
    <section className="py-32 relative">
      {/* Background neural network */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-neural-grid bg-neural"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-teal to-solar-gold mb-8">
            SuryaWell
          </h2>
          <p className="font-body text-2xl text-stellar-silver max-w-3xl mx-auto">
            Where technology becomes liturgy. Your personal solar oracle in your pocket.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[640px] bg-gradient-to-b from-cosmic-blue to-deep-space rounded-[3rem] border-4 border-stellar-silver shadow-2xl overflow-hidden">
              {/* Phone frame */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-deep-space rounded-full"></div>
              
              {/* App content */}
              <div className="pt-16 px-6 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <Sun className="text-solar-gold animate-solar-flare" size={24} />
                    <span className="font-display text-radiant-white text-lg">Solar Sync</span>
                  </div>
                  <div className="text-stellar-silver font-mono text-sm">6:42 AM</div>
                </div>

                {/* Solar position indicator */}
                <div className="bg-solar-gold/10 rounded-2xl p-6 mb-6 border border-solar-gold/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-radiant-white">Dawn Phase</span>
                    <div className="w-8 h-8 bg-solar-gold rounded-full animate-pulse-glow"></div>
                  </div>
                  <p className="text-stellar-silver text-sm">
                    Your inner fire awakens. Time for solar meditation and breath alignment.
                  </p>
                </div>

                {/* Ritual cards */}
                <div className="space-y-4">
                  <div className="bg-mystic-teal/10 rounded-xl p-4 border border-mystic-teal/30">
                    <div className="flex items-center space-x-3">
                      <Heart className="text-mystic-teal" size={20} />
                      <div>
                        <div className="font-body text-radiant-white text-sm font-medium">Breath Ritual</div>
                        <div className="text-stellar-silver text-xs">5 minutes</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dawn-pink/10 rounded-xl p-4 border border-dawn-pink/30">
                    <div className="flex items-center space-x-3">
                      <Brain className="text-dawn-pink" size={20} />
                      <div>
                        <div className="font-body text-radiant-white text-sm font-medium">Neural Sync</div>
                        <div className="text-stellar-silver text-xs">AI Guidance Ready</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-solar-gold/10 rounded-xl p-4 border border-solar-gold/30">
                    <div className="flex items-center space-x-3">
                      <Zap className="text-solar-gold" size={20} />
                      <div>
                        <div className="font-body text-radiant-white text-sm font-medium">Solar Nourishment</div>
                        <div className="text-stellar-silver text-xs">Meal guidance active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements around phone */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-solar-gold/20 rounded-full animate-float-cosmic"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-mystic-teal/20 rounded-full animate-float-cosmic" style={{ animationDelay: '2s' }}></div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="font-display text-4xl font-bold text-radiant-white">
                Your Solar Operating System
              </h3>
              <p className="font-body text-xl text-stellar-silver leading-relaxed">
                Breath-led journaling, solar meditations, doshic guidance, and light-phase-aligned planning. 
                Rituals arise as the sun rises.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Sun,
                  title: "Circadian Intelligence",
                  description: "Real-time solar positioning guides your daily rhythm and energy optimization."
                },
                {
                  icon: Brain,
                  title: "AI Oracle Integration",
                  description: "HeliOS learns your patterns and provides personalized wellness guidance."
                },
                {
                  icon: Moon,
                  title: "Sacred Timing",
                  description: "Meal planning, movement, and rest aligned with cosmic cycles."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-solar-gold/20 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                    <feature.icon className="text-solar-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-body text-lg font-semibold text-radiant-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-body text-stellar-silver">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};