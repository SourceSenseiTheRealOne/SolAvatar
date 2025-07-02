import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Smartphone, ShoppingBag, Sparkles, Zap, Leaf } from 'lucide-react';

export const TrinitumSection: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: "HeliOS",
      subtitle: "The Solar Mind",
      description: "An AI oracle attuned to your light rhythm. HeliOS learns your circadian code, breath patterns, and biofrequency to guide daily rituals, sleep cycles, focus zones, and mood tides — in solar sync.",
      color: "text-mystic-teal",
      bgColor: "bg-mystic-teal/10",
      borderColor: "border-mystic-teal/30"
    },
    {
      icon: Smartphone,
      title: "SuryaWell",
      subtitle: "The Ritual App",
      description: "Where technology becomes liturgy. Breath-led journaling, solar meditations, doshic guidance, and light-phase-aligned planning. Rituals arise as the sun rises.",
      color: "text-dawngold",
      bgColor: "bg-dawngold/10",
      borderColor: "border-dawngold/30"
    },
    {
      icon: ShoppingBag,
      title: "SolTerra",
      subtitle: "The Planet-Aligned Market",
      description: "Receive what your SolProfile prescribes. Biohacked elixirs, solar supplements, and sacred wellness kits, timed to your chart and delivered with AI-personalized QR guidance.",
      color: "text-solar-flare",
      bgColor: "bg-solar-flare/10",
      borderColor: "border-solar-flare/30"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-eclipse to-cosmic-purple relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-dawngold opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-mystic-teal opacity-10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-dawngold mb-4">
            The Trinitum
          </h2>
          <p className="font-inter text-ritual-sand text-lg max-w-2xl mx-auto">
            Three sacred pillars unite to form your complete solar ecosystem
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`${pillar.bgColor} ${pillar.borderColor} border backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
            >
              {/* Icon */}
              <div className={`${pillar.color} ${pillar.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon size={32} />
              </div>

              {/* Title */}
              <h3 className={`font-cormorant text-2xl font-bold ${pillar.color} mb-2`}>
                {pillar.title}
              </h3>

              {/* Subtitle */}
              <h4 className="font-inter text-ritual-sand text-sm uppercase tracking-wider mb-4 opacity-80">
                {pillar.subtitle}
              </h4>

              {/* Description */}
              <p className="font-inter text-voidsilver leading-relaxed">
                {pillar.description}
              </p>

              {/* Decorative elements */}
              <div className="flex justify-between mt-6 opacity-40 group-hover:opacity-70 transition-opacity">
                <Sparkles size={16} className={pillar.color} />
                <Zap size={16} className={pillar.color} />
                <Leaf size={16} className={pillar.color} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sacred geometry decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-2 h-2 bg-dawngold rounded-full"></div>
          <div className="w-1 h-1 bg-ritual-sand rounded-full mx-4 mt-0.5"></div>
          <div className="w-2 h-2 bg-mystic-teal rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};