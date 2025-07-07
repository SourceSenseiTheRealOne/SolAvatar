import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sunrise, Moon, Mountain, Waves, Flame, Wind, Sparkles, Clock, Utensils, Activity } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    icon?: React.ReactNode;
  }[];
}

interface SolarQuizProps {
  onComplete: (profile: any) => void;
  onBack: () => void;
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "When do you feel most alive and vibrant?",
    options: [
      { text: "Just before dawn (Pre-sunrise)", value: "pre-dawn", icon: <Sunrise size={24} /> },
      { text: "Morning (6–10am)", value: "morning", icon: <Sunrise size={24} /> },
      { text: "Afternoon (10am–2pm)", value: "afternoon", icon: <Flame size={24} /> },
      { text: "Evening (5–9pm)", value: "evening", icon: <Moon size={24} /> },
      { text: "Late night (After midnight)", value: "late-night", icon: <Moon size={24} /> }
    ]
  },
  {
    id: 2,
    question: "How does your energy feel during the day?",
    options: [
      { text: "Steady and strong like a midday sun", value: "steady", icon: <Flame size={24} /> },
      { text: "Rising slowly like the early dawn", value: "rising", icon: <Sunrise size={24} /> },
      { text: "Intense bursts, followed by lulls", value: "bursts", icon: <Wind size={24} /> },
      { text: "Calm and reflective like sunset", value: "calm", icon: <Moon size={24} /> },
      { text: "Unpredictable, like shifting clouds", value: "unpredictable", icon: <Waves size={24} /> }
    ]
  },
  {
    id: 3,
    question: "Your sleep pattern most resembles:",
    options: [
      { text: "Early to bed, early to rise (like a yogi)", value: "early-bird", icon: <Sunrise size={24} /> },
      { text: "Night owl, alive in the dark hours", value: "night-owl", icon: <Moon size={24} /> },
      { text: "Sleep comes easy, but mornings feel heavy", value: "heavy-sleeper", icon: <Mountain size={24} /> },
      { text: "Sleep varies wildly with no fixed schedule", value: "variable", icon: <Wind size={24} /> }
    ]
  },
  {
    id: 4,
    question: "Your ideal meal timing feels aligned when:",
    options: [
      { text: "Breakfast is hearty and energizing", value: "hearty-breakfast", icon: <Utensils size={24} /> },
      { text: "A light lunch sustains you best", value: "light-lunch", icon: <Utensils size={24} /> },
      { text: "Dinner is the main meal of the day", value: "main-dinner", icon: <Utensils size={24} /> },
      { text: "Small meals throughout feel natural", value: "small-meals", icon: <Utensils size={24} /> }
    ]
  },
  {
    id: 5,
    question: "Your ideal movement feels like:",
    options: [
      { text: "Energizing sun salutations at dawn", value: "dawn-movement", icon: <Activity size={24} /> },
      { text: "Midday power exercises", value: "power-exercise", icon: <Activity size={24} /> },
      { text: "Slow evening stretches/yoga", value: "evening-yoga", icon: <Activity size={24} /> },
      { text: "Randomized bursts when energy strikes", value: "random-bursts", icon: <Activity size={24} /> }
    ]
  }
];

const archetypes = {
  "Solar Flare": {
    title: "Solar Flare",
    subtitle: "Pitta Dominant",
    description: "You are the midday Sun — intense, vibrant, purpose-driven. Balance your fire with cooling practices and lunar rituals.",
    constitution: "Pitta-dominant with strong digestive fire",
    chronotype: "Peak energy during midday hours",
    element: "Fire + Earth",
    rituals: ["Cooling breath practices", "Midday power meditation", "Moon water ceremonies", "Grounding earth connection"],
    color: "text-solar-gold"
  },
  "Dawn Bloom": {
    title: "Dawn Bloom", 
    subtitle: "Kapha Dominant",
    description: "You are the gentle dawn — nurturing, grounded, steady. Awaken with invigorating rituals to spark vitality.",
    constitution: "Kapha-dominant with stable, grounding energy",
    chronotype: "Slow to wake, steady throughout day",
    element: "Earth + Water",
    rituals: ["Energizing morning breath", "Warming spice ceremonies", "Movement activation", "Solar charging practices"],
    color: "text-dawn-pink"
  },
  "Twilight Breeze": {
    title: "Twilight Breeze",
    subtitle: "Vata Dominant", 
    description: "You are the shifting twilight — creative, free-spirited, quick-moving. Anchor with grounding rituals and warmth.",
    constitution: "Vata-dominant with variable, creative energy",
    chronotype: "Variable energy patterns, evening creativity",
    element: "Air + Space",
    rituals: ["Grounding meditation", "Warm oil ceremonies", "Rhythmic breathing", "Sacred routine building"],
    color: "text-mystic-teal"
  },
  "Cosmic Weaver": {
    title: "Cosmic Weaver",
    subtitle: "Tri-Doshic Balance",
    description: "You embody the cosmic balance — adaptable, intuitive, flowing with natural rhythms. Your path is one of harmonious integration.",
    constitution: "Balanced tri-doshic constitution",
    chronotype: "Adaptable to natural light cycles",
    element: "All Elements in Harmony",
    rituals: ["Seasonal adaptation practices", "Intuitive movement", "Elemental balancing", "Cosmic alignment ceremonies"],
    color: "text-dusk-lavender"
  }
};

export const SolarQuiz: React.FC<SolarQuizProps> = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(-1); // Start with intro screen
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnswer = (value: string) => {
    if (currentQuestion === -1) {
      setCurrentQuestion(0);
      return;
    }

    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const profile = calculateProfile(newAnswers);
      setResult(profile);
      setShowResult(true);
    }
  };

  const calculateProfile = (answers: Record<number, string>) => {
    const values = Object.values(answers);
    
    // Solar Flare (Pitta) - midday energy, steady, power exercises
    if (values.includes('afternoon') || values.includes('steady') || values.includes('power-exercise')) {
      return archetypes["Solar Flare"];
    }
    // Dawn Bloom (Kapha) - heavy sleeper, hearty breakfast, slow rising
    else if (values.includes('heavy-sleeper') || values.includes('hearty-breakfast') || values.includes('rising')) {
      return archetypes["Dawn Bloom"];
    }
    // Twilight Breeze (Vata) - variable, unpredictable, random bursts
    else if (values.includes('variable') || values.includes('unpredictable') || values.includes('random-bursts')) {
      return archetypes["Twilight Breeze"];
    }
    // Default to Cosmic Weaver
    else {
      return archetypes["Cosmic Weaver"];
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentQuestion === 0) {
      setCurrentQuestion(-1);
    } else {
      onBack();
    }
  };

  // Intro screen
  if (currentQuestion === -1) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center bg-cosmic-blue/30 backdrop-blur-sm rounded-3xl p-12 border border-solar-gold/50"
        >
          <div className="w-32 h-32 mx-auto mb-8 bg-solar-gold/20 rounded-full flex items-center justify-center animate-pulse-glow">
            <Sparkles className="text-solar-gold animate-neural-pulse" size={64} />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-solar-gold mb-6">
            Which Solar Archetype Guides Your Wellness Path?
          </h1>
          
          <p className="font-body text-xl text-stellar-silver mb-8 leading-relaxed">
            Discover your unique solar essence and awaken your circadian intelligence.
          </p>
          
          <div className="bg-deep-space/50 rounded-2xl p-8 mb-8 border border-solar-gold/30">
            <p className="font-display text-2xl text-radiant-white mb-4 italic">
              "Welcome, Seeker."
            </p>
            <p className="font-body text-lg text-stellar-silver leading-relaxed">
              Within you lies a rhythm ancient as the stars. This journey will unveil your Solar Archetype — 
              guiding you to align with your highest energy flow.
            </p>
          </div>

          <button
            onClick={() => handleAnswer('')}
            className="bg-solar-gradient text-cosmic-blue px-10 py-4 rounded-full font-body font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto shadow-lg hover:shadow-solar-gold/50"
          >
            <span>Begin</span>
            <ArrowRight size={24} />
          </button>
        </motion.div>
      </section>
    );
  }

  if (showResult) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center bg-cosmic-blue/30 backdrop-blur-sm rounded-3xl p-12 border border-solar-gold/50"
        >
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 bg-solar-gold/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Sparkles className="text-solar-gold animate-neural-pulse" size={64} />
            </div>
            <h2 className={`font-display text-5xl md:text-6xl font-bold ${result.color} mb-4`}>
              {result.title}
            </h2>
            <h3 className="font-body text-xl text-stellar-silver mb-6">
              {result.subtitle}
            </h3>
            <p className="font-body text-xl text-stellar-silver leading-relaxed max-w-3xl mx-auto">
              {result.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-solar-gold/10 rounded-2xl p-6 border border-solar-gold/30">
              <h4 className="font-display text-solar-gold font-semibold text-xl mb-3">Constitution</h4>
              <p className="font-body text-radiant-white">{result.constitution}</p>
            </div>
            <div className="bg-mystic-teal/10 rounded-2xl p-6 border border-mystic-teal/30">
              <h4 className="font-display text-mystic-teal font-semibold text-xl mb-3">Chronotype</h4>
              <p className="font-body text-radiant-white">{result.chronotype}</p>
            </div>
            <div className="bg-dawn-pink/10 rounded-2xl p-6 border border-dawn-pink/30">
              <h4 className="font-display text-dawn-pink font-semibold text-xl mb-3">Element</h4>
              <p className="font-body text-radiant-white">{result.element}</p>
            </div>
            <div className="bg-dusk-lavender/10 rounded-2xl p-6 border border-dusk-lavender/30">
              <h4 className="font-display text-dusk-lavender font-semibold text-xl mb-3">Sacred Rituals</h4>
              <div className="text-radiant-white space-y-2">
                {result.rituals.map((ritual: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-dusk-lavender rounded-full"></div>
                    <span className="font-body text-sm">{ritual}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onComplete(result)}
              className="bg-solar-gradient text-cosmic-blue px-10 py-4 rounded-full font-body font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-solar-gold/50"
            >
              <span>Begin Your Journey</span>
              <ArrowRight size={24} />
            </button>
            <button 
              onClick={() => onComplete(result)}
              className="border-2 border-solar-gold text-solar-gold px-10 py-4 rounded-full font-body font-bold text-lg hover:bg-solar-gold hover:text-cosmic-blue transition-all duration-300"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-3xl mx-auto w-full">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <span className="font-body text-stellar-silver">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-body text-stellar-silver">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-deep-space rounded-full h-2 overflow-hidden">
            <motion.div 
              className="bg-solar-gradient h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-cosmic-blue/30 backdrop-blur-sm rounded-3xl p-10 border border-solar-gold/30"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-radiant-white mb-12 text-center leading-tight">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-6 bg-deep-space/50 hover:bg-solar-gold/10 border border-solar-gold/30 hover:border-solar-gold/60 rounded-2xl transition-all duration-300 text-left group backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-solar-gold group-hover:scale-110 transition-transform flex-shrink-0">
                      {option.icon}
                    </div>
                    <span className="font-body text-lg text-stellar-silver group-hover:text-radiant-white transition-colors">
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 text-stellar-silver hover:text-solar-gold transition-colors font-body"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </div>
    </section>
  );
};