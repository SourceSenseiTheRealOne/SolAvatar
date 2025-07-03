import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export const WaitlistSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    birthTime: '',
    location: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist submission:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-32 relative" id="waitlist">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-cosmic-blue/30 backdrop-blur-sm rounded-3xl p-12 border border-solar-gold/50"
          >
            <div className="w-24 h-24 mx-auto mb-8 bg-solar-gold/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Sparkles className="text-solar-gold animate-neural-pulse" size={48} />
            </div>
            <h3 className="font-display text-4xl font-bold text-solar-gold mb-6">
              Your light has been received.
            </h3>
            <p className="font-body text-xl text-stellar-silver leading-relaxed mb-8">
              Welcome to the Solar Renaissance. You are now among the chosen 111. 
              Your SolAvatar is forming in the cosmic matrix.
            </p>
            <div className="space-y-4 text-stellar-silver">
              <p className="font-body">✦ Expect your Solar Codex within 48 hours</p>
              <p className="font-body">✦ Early access to SuryaWell app</p>
              <p className="font-body">✦ Personalized AI onboarding with HeliOS</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 relative" id="waitlist">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-solar-gold opacity-5 rounded-full blur-3xl animate-float-cosmic"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-mystic-teal opacity-10 rounded-full blur-2xl animate-float-cosmic" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-solar-gradient mb-8">
            Join the First 111
          </h2>
          <p className="font-body text-2xl text-stellar-silver max-w-3xl mx-auto mb-6">
            The first 111 SolAvatars shall receive the First Solar Scroll: 
            a ritual map, AI onboarding, and early access to the app and elixirs.
          </p>
          <p className="font-display text-xl text-solar-gold italic">
            Enter your solar details. Become one of the 111.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-cosmic-blue/30 backdrop-blur-sm rounded-3xl p-8 border border-solar-gold/30 space-y-6"
          >
            {/* Name field */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-solar-gold group-focus-within:scale-110 transition-transform">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your sacred name"
                required
                className="w-full pl-12 pr-4 py-4 bg-deep-space/50 border border-solar-gold/30 rounded-2xl text-radiant-white placeholder-stellar-silver focus:border-solar-gold focus:bg-deep-space/70 transition-all duration-300 font-body backdrop-blur-sm"
              />
            </div>

            {/* Email field */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-solar-gold group-focus-within:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your digital portal"
                required
                className="w-full pl-12 pr-4 py-4 bg-deep-space/50 border border-solar-gold/30 rounded-2xl text-radiant-white placeholder-stellar-silver focus:border-solar-gold focus:bg-deep-space/70 transition-all duration-300 font-body backdrop-blur-sm"
              />
            </div>

            {/* Birth details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-deep-space/50 border border-solar-gold/30 rounded-2xl text-radiant-white focus:border-solar-gold focus:bg-deep-space/70 transition-all duration-300 font-body backdrop-blur-sm"
                />
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-solar-gold group-focus-within:scale-110 transition-transform">
                  <Clock size={20} />
                </div>
                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-deep-space/50 border border-solar-gold/30 rounded-2xl text-radiant-white focus:border-solar-gold focus:bg-deep-space/70 transition-all duration-300 font-body backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Location field */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-solar-gold group-focus-within:scale-110 transition-transform">
                <MapPin size={20} />
              </div>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your earthly coordinates"
                className="w-full pl-12 pr-4 py-4 bg-deep-space/50 border border-solar-gold/30 rounded-2xl text-radiant-white placeholder-stellar-silver focus:border-solar-gold focus:bg-deep-space/70 transition-all duration-300 font-body backdrop-blur-sm"
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-solar-gradient text-cosmic-blue py-5 rounded-2xl font-body font-bold text-lg hover:shadow-2xl hover:shadow-solar-gold/50 transition-all duration-500 transform flex items-center justify-center space-x-3 group"
            >
              <span>Join the SolWaitlist</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </motion.button>

            {/* Privacy note */}
            <p className="text-center text-stellar-silver text-sm font-body opacity-70">
              Your sacred data is protected by cosmic law and quantum encryption
            </p>
          </form>
        </motion.div>

        {/* Sacred geometry decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center items-center space-x-4"
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