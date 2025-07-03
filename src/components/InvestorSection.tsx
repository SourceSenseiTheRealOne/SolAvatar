import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';

export const InvestorSection: React.FC = () => {
  const metrics = [
    { label: "Market Size", value: "$4.5T", description: "Global wellness economy" },
    { label: "AI Health Market", value: "$102B", description: "By 2028 projection" },
    { label: "Circadian Tech", value: "$2.1B", description: "Emerging category" },
    { label: "Target Users", value: "50M+", description: "Wellness-conscious millennials" }
  ];

  const testimonials = [
    {
      quote: "SolAvatar represents the convergence of ancient wisdom and cutting-edge AI. This is the future of personalized wellness.",
      author: "Dr. Sarah Chen",
      title: "Stanford Circadian Research Lab",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The solar synchronization technology is revolutionary. We're seeing unprecedented user engagement and health outcomes.",
      author: "Marcus Rodriguez",
      title: "Former Tesla Health Division",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cosmic-blue/20 to-deep-space/40"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-solar-gold opacity-5 rounded-full blur-3xl animate-float-cosmic"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-solar-gold to-mystic-teal mb-8">
            The Solar Economy
          </h2>
          <p className="font-body text-2xl text-stellar-silver max-w-4xl mx-auto mb-8">
            Harmonizing Solar Wisdom + AI for the 21st Century Wellness Economy
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-solar-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Market metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center bg-cosmic-blue/30 backdrop-blur-sm rounded-2xl p-6 border border-solar-gold/30 hover:border-solar-gold/60 transition-all duration-300"
            >
              <div className="font-display text-4xl font-bold text-solar-gold mb-2">
                {metric.value}
              </div>
              <div className="font-body text-lg font-semibold text-radiant-white mb-1">
                {metric.label}
              </div>
              <div className="font-body text-sm text-stellar-silver">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-4xl md:text-5xl font-bold text-radiant-white mb-8 leading-tight">
              We're not building an app.
              <span className="block text-transparent bg-clip-text bg-solar-gradient">
                We're architecting a solar civilization.
              </span>
            </h3>
            <p className="font-body text-xl text-stellar-silver leading-relaxed">
              SolAvatar represents the convergence of three massive trends: AI personalization, 
              circadian health optimization, and the $4.5 trillion wellness economy. 
              Our platform creates a new category: Solar Intelligence.
            </p>
          </div>
        </motion.div>

        {/* Key differentiators */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h4 className="font-display text-3xl font-bold text-radiant-white">
              Competitive Advantages
            </h4>
            
            {[
              {
                icon: TrendingUp,
                title: "First-Mover in Solar AI",
                description: "Proprietary algorithms combining circadian science with real-time solar positioning"
              },
              {
                icon: Users,
                title: "Mythic Brand Positioning",
                description: "Premium lifestyle brand that transcends traditional wellness apps"
              },
              {
                icon: Globe,
                title: "Global Scalability",
                description: "Solar synchronization works anywhere on Earth, unlimited geographic expansion"
              },
              {
                icon: Zap,
                title: "Multi-Revenue Streams",
                description: "App subscriptions, AI coaching, commerce platform, and enterprise licensing"
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-solar-gold/20 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <advantage.icon className="text-solar-gold" size={24} />
                </div>
                <div>
                  <h5 className="font-body text-lg font-semibold text-radiant-white mb-2">
                    {advantage.title}
                  </h5>
                  <p className="font-body text-stellar-silver">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <h4 className="font-display text-3xl font-bold text-radiant-white">
              Expert Validation
            </h4>
            
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="bg-cosmic-blue/30 backdrop-blur-sm rounded-2xl p-6 border border-mystic-teal/30"
              >
                <p className="font-body text-stellar-silver italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-body font-semibold text-radiant-white">
                      {testimonial.author}
                    </div>
                    <div className="font-body text-sm text-mystic-teal">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Media logos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-stellar-silver mb-8">Featured In</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="font-mono text-lg text-stellar-silver">TECHCRUNCH</div>
            <div className="font-mono text-lg text-stellar-silver">WIRED</div>
            <div className="font-mono text-lg text-stellar-silver">FORBES</div>
            <div className="font-mono text-lg text-stellar-silver">FAST COMPANY</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};