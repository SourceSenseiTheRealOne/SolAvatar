import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe } from 'lucide-react';

export const StorytellingSection: React.FC = () => {
  return (
    <section className="py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/8 w-96 h-96 bg-nebula-purple opacity-5 rounded-full blur-3xl animate-float-cosmic"></div>
        <div className="absolute bottom-1/4 right-1/8 w-64 h-64 bg-aurora-green opacity-10 rounded-full blur-2xl animate-float-cosmic" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-solar-gold via-dawn-pink to-mystic-teal mb-8">
            A New Dawn for Humanity
          </h2>
          <p className="font-body text-2xl md:text-3xl text-stellar-silver max-w-4xl mx-auto leading-relaxed">
            SOLAVATAR is not merely a wellness brand.
          </p>
        </motion.div>

        {/* Mythic narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="space-y-8">
            <p className="font-display text-3xl md:text-4xl text-radiant-white leading-relaxed">
              It is a living system — a cosmic convergence of ancient wisdom and cutting-edge AI — 
              designed to restore sacred alignment between body, mind, and planet.
            </p>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-solar-gold to-transparent mx-auto my-12"></div>
            
            <div className="space-y-6">
              <p className="font-display text-2xl md:text-3xl text-stellar-silver leading-relaxed">
                We awaken your innate rhythm through:
              </p>
              <div className="space-y-4 text-xl md:text-2xl">
                <p className="text-solar-gold font-medium">Solar-synced rituals</p>
                <p className="text-mystic-teal font-medium">AI-guided wellness journeys</p>
                <p className="text-dawn-pink font-medium">Products aligned with Rta — the Cosmic Order</p>
              </div>
            </div>

            <div className="py-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
              >
                <div className="w-24 h-24 border-2 border-solar-gold rounded-full flex items-center justify-center mb-8 mx-auto animate-pulse-glow">
                  <div className="w-3 h-3 bg-solar-gold rounded-full animate-neural-pulse"></div>
                </div>
              </motion.div>
              
              <h3 className="font-display text-3xl md:text-5xl font-bold text-stellar-silver mb-4">
                This is more than health.
              </h3>
              <h3 className="font-display text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-solar-gradient">
                This is your Solar Renaissance.
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Three pillars of transformation */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              icon: Brain,
              title: "HELIOS – The AI Oracle",
              description: "A hyper-personalized intelligence guiding you in real-time with solar attunement, circadian awareness, and planetary timing.",
              color: "text-mystic-teal"
            },
            {
              icon: Zap,
              title: "SURYAWELL – The Ritual App",
              description: "Your portable sacred space, offering daily rituals, sun-synced practices, and biofeedback-based recommendations.",
              color: "text-solar-gold"
            },
            {
              icon: Globe,
              title: "MYTHIC MARKETPLACE – Planet-Aligned Goods",
              description: "Solar elixirs. Bioresonant wearables. Circadian supplements. Curated for harmony with your unique solar code.",
              color: "text-dawn-pink"
            }
          ].map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full border-2 border-current ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                <pillar.icon size={32} />
              </div>
              <h4 className="font-display text-2xl font-bold text-radiant-white mb-4">
                {pillar.title}
              </h4>
              <p className="font-body text-stellar-silver leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sacred geometry footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex justify-center items-center space-x-6"
        >
          <div className="w-2 h-2 bg-solar-gold rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-mystic-teal rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-4 h-4 bg-dawn-pink rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="w-3 h-3 bg-mystic-teal rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-2 h-2 bg-solar-gold rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </motion.div>
      </div>
    </section>
  );
};