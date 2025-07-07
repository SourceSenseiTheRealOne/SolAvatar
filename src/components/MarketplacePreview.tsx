import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Leaf, Zap } from 'lucide-react';

export const MarketplacePreview: React.FC = () => {
  const products = [
    {
      name: "Solar Dawn Elixir",
      description: "Adaptogenic morning blend synchronized to your circadian peak",
      price: "$89",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "border-solar-gold"
    },
    {
      name: "Cosmic Clarity Kit",
      description: "Neural enhancement supplements timed to your solar profile",
      price: "$156",
      image: "https://images.pexels.com/photos/6207433/pexels-photo-6207433.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "border-mystic-teal"
    },
    {
      name: "Ritual Renewal Set",
      description: "Sacred tools and aromatics for daily solar ceremonies",
      price: "$234",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "border-dawn-pink"
    }
  ];

  return (
    <section className="py-32 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-blue/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dawn-pink to-mystic-teal mb-8">
            Offerings of the Solar Path
          </h2>
          <p className="font-body text-2xl text-stellar-silver max-w-3xl mx-auto mb-4">
            Discover wellness products crafted in alignment with the Sun's rhythms and the Earth's intelligence.
          </p>
        </motion.div>

        {/* Product showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group bg-cosmic-blue/30 backdrop-blur-sm rounded-2xl overflow-hidden border-2 ${product.color} hover:scale-105 transition-all duration-500 cursor-pointer`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Sparkles className="text-solar-gold animate-pulse" size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-radiant-white mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-stellar-silver text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-2xl font-bold text-solar-gold">
                    {product.price}
                  </span>
                  <button className="bg-solar-gold/20 text-solar-gold px-4 py-2 rounded-full font-body font-medium hover:bg-solar-gold hover:text-cosmic-blue transition-all duration-300">
                    Add to Kit
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: ShoppingBag,
              title: "Personalized Curation",
              description: "AI-selected products based on your unique solar profile"
            },
            {
              icon: Zap,
              title: "Quantum Timing",
              description: "Delivery synchronized with your optimal absorption windows"
            },
            {
              icon: Leaf,
              title: "Sacred Sourcing",
              description: "Ethically harvested ingredients from solar-aligned farms"
            },
            {
              icon: Sparkles,
              title: "Ritual Integration",
              description: "QR-guided preparation ceremonies for maximum potency"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-solar-gold/20 rounded-full flex items-center justify-center animate-pulse-glow">
                <feature.icon className="text-solar-gold" size={24} />
              </div>
              <h4 className="font-body text-lg font-semibold text-radiant-white mb-2">
                {feature.title}
              </h4>
              <p className="font-body text-stellar-silver text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="font-display text-3xl text-solar-gold font-medium mb-8 italic">
            "Receive what your soul prescribes."
          </p>
          <button className="bg-gradient-to-r from-solar-gold to-dawn-pink text-cosmic-blue px-8 py-4 rounded-full font-body font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-solar-gold/50">
            Explore Sacred Commerce
          </button>
        </motion.div>
      </div>
    </section>
  );
};