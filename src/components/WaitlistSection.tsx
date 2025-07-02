import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Clock, MapPin, Sparkles } from 'lucide-react';

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
    // Here you would integrate with your email service (ConvertKit, etc.)
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
      <section className="py-20 bg-gradient-to-b from-deep-eclipse to-cosmic-purple relative">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-12 border border-dawngold/30"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-dawngold/20 rounded-full flex items-center justify-center">
              <Sparkles className="text-dawngold animate-pulse" size={40} />
            </div>
            <h3 className="font-cormorant text-3xl font-bold text-dawngold mb-4">
              Your light has been received.
            </h3>
            <p className="font-inter text-ritual-sand text-lg leading-relaxed">
              Welcome to the Solar Renaissance. You are now among the chosen 111. 
              Your SolAvatar is forming in the cosmic matrix. Prepare for illumination.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-deep-eclipse to-cosmic-purple relative" id="waitlist">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-dawngold opacity-5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-mystic-teal opacity-10 rounded-full blur-xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-dawngold mb-6">
            Join the First 111
          </h2>
          <p className="font-inter text-lg text-ritual-sand leading-relaxed max-w-lg mx-auto">
            The first 111 SolAvatars shall receive the First Solar Scroll: a ritual map, 
            AI onboarding, and early access to the app and elixirs.
          </p>
          <p className="font-cormorant text-xl text-dawngold mt-4 italic">
            Enter your solar details. Become one of the 111.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 border border-dawngold/30 space-y-6"
        >
          {/* Name field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dawngold">
              <User size={20} />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your sacred name"
              required
              className="w-full pl-12 pr-4 py-4 bg-dawngold/10 border border-dawngold/30 rounded-2xl text-voidsilver placeholder-ritual-sand focus:border-dawngold focus:bg-dawngold/20 transition-all duration-300 font-inter"
            />
          </div>

          {/* Email field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dawngold">
              <Mail size={20} />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your digital portal"
              required
              className="w-full pl-12 pr-4 py-4 bg-dawngold/10 border border-dawngold/30 rounded-2xl text-voidsilver placeholder-ritual-sand focus:border-dawngold focus:bg-dawngold/20 transition-all duration-300 font-inter"
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
                placeholder="Birth date"
                className="w-full px-4 py-4 bg-dawngold/10 border border-dawngold/30 rounded-2xl text-voidsilver placeholder-ritual-sand focus:border-dawngold focus:bg-dawngold/20 transition-all duration-300 font-inter"
              />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dawngold">
                <Clock size={20} />
              </div>
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleChange}
                placeholder="Birth time"
                className="w-full pl-12 pr-4 py-4 bg-dawngold/10 border border-dawngold/30 rounded-2xl text-voidsilver placeholder-ritual-sand focus:border-dawngold focus:bg-dawngold/20 transition-all duration-300 font-inter"
              />
            </div>
          </div>

          {/* Location field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dawngold">
              <MapPin size={20} />
            </div>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Your earthly coordinates"
              className="w-full pl-12 pr-4 py-4 bg-dawngold/10 border border-dawngold/30 rounded-2xl text-voidsilver placeholder-ritual-sand focus:border-dawngold focus:bg-dawngold/20 transition-all duration-300 font-inter"
            />
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-dawngold text-deep-eclipse py-4 rounded-2xl font-inter font-semibold text-lg hover:bg-solar-flare transition-all duration-300 transform hover:shadow-lg hover:shadow-dawngold/30"
          >
            Join the SolWaitlist
          </motion.button>

          {/* Privacy note */}
          <p className="text-center text-ritual-sand text-sm font-inter opacity-70">
            Your sacred data is protected by cosmic law and modern encryption
          </p>
        </motion.form>

        {/* Sacred geometry decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex justify-center items-center space-x-2"
        >
          <div className="w-1 h-1 bg-dawngold rounded-full"></div>
          <div className="w-2 h-2 bg-mystic-teal rounded-full"></div>
          <div className="w-3 h-3 bg-solar-flare rounded-full"></div>
          <div className="w-2 h-2 bg-mystic-teal rounded-full"></div>
          <div className="w-1 h-1 bg-dawngold rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};