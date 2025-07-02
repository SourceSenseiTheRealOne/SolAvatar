import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Leaf, Clock, Sparkles } from 'lucide-react';

export const SolarNourishmentPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cosmic-purple to-deep-eclipse relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-dawngold mb-4">
            Solar Nourishment Oracle
          </h2>
          <p className="font-cormorant text-xl text-ritual-sand italic mb-2">
            "Eat not by whim — but by the Way of the Sun."
          </p>
          <p className="font-inter text-ritual-sand max-w-2xl mx-auto">
            Receive Rta-aligned, solar-synchronized food guidance personalized to your constitution, 
            location, and light-rhythm.
          </p>
        </motion.div>

        {/* Preview cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dawn meal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dawngold/10 border border-dawngold/30 rounded-3xl p-6 backdrop-blur-sm hover:bg-dawngold/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Sun className="text-dawngold" size={24} />
                <span className="font-cormorant text-dawngold font-semibold text-lg">Dawn</span>
              </div>
              <span className="text-ritual-sand text-sm">6:30 AM</span>
            </div>
            
            <h3 className="font-cormorant text-xl font-semibold text-voidsilver mb-2">
              Solar Kitchari
            </h3>
            <p className="text-ritual-sand text-sm mb-4">
              Grounding solar kitchari with ghee and coriander. Speak grace into the grains before consumption.
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-voidsilver">
              <div className="flex items-center space-x-1">
                <Leaf size={12} />
                <span>Vata Balancing</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={12} />
                <span>Optimal Window</span>
              </div>
            </div>
          </motion.div>

          {/* Zenith meal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-solar-flare/10 border border-solar-flare/30 rounded-3xl p-6 backdrop-blur-sm hover:bg-solar-flare/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Sun className="text-solar-flare" size={24} />
                <span className="font-cormorant text-solar-flare font-semibold text-lg">Zenith</span>
              </div>
              <span className="text-ritual-sand text-sm">12:30 PM</span>
            </div>
            
            <h3 className="font-cormorant text-xl font-semibold text-voidsilver mb-2">
              Fire Bowl
            </h3>
            <p className="text-ritual-sand text-sm mb-4">
              Heaviest meal when digestive fire peaks. Energize Pitta with cooling herbs and proteins.
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-voidsilver">
              <div className="flex items-center space-x-1">
                <Leaf size={12} />
                <span>Pitta Energizing</span>
              </div>
              <div className="flex items-center space-x-1">
                <Sparkles size={12} />
                <span>Peak Digestion</span>
              </div>
            </div>
          </motion.div>

          {/* Dusk meal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-mystic-teal/10 border border-mystic-teal/30 rounded-3xl p-6 backdrop-blur-sm hover:bg-mystic-teal/20 transition-all duration-300 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Sun className="text-mystic-teal" size={24} />
                <span className="font-cormorant text-mystic-teal font-semibold text-lg">Dusk</span>
              </div>
              <span className="text-ritual-sand text-sm">6:30 PM</span>
            </div>
            
            <h3 className="font-cormorant text-xl font-semibold text-voidsilver mb-2">
              Twilight Soup
            </h3>
            <p className="text-ritual-sand text-sm mb-4">
              Soft, cooked, easy to digest. Cool Pitta and soothe Kapha for peaceful rest.
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-voidsilver">
              <div className="flex items-center space-x-1">
                <Leaf size={12} />
                <span>Kapha Soothing</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={12} />
                <span>Rest Prep</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-cormorant text-2xl text-dawngold font-medium mb-8">
            "Live Light. Eat Right. Align with Rta."
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-dawngold/20 rounded-full flex items-center justify-center">
                <Sun className="text-dawngold" size={24} />
              </div>
              <h4 className="font-inter font-semibold text-voidsilver mb-2">Solar Intelligence</h4>
              <p className="text-ritual-sand text-sm">Real-time solar position integration</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-mystic-teal/20 rounded-full flex items-center justify-center">
                <Leaf className="text-mystic-teal" size={24} />
              </div>
              <h4 className="font-inter font-semibold text-voidsilver mb-2">Ayurvedic Wisdom</h4>
              <p className="text-ritual-sand text-sm">Constitutional meal planning</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-solar-flare/20 rounded-full flex items-center justify-center">
                <Sparkles className="text-solar-flare" size={24} />
              </div>
              <h4 className="font-inter font-semibold text-voidsilver mb-2">Sacred Preparation</h4>
              <p className="text-ritual-sand text-sm">Ritualized cooking guidance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};