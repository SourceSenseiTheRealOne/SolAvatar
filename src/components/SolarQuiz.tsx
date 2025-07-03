import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sunrise, Moon, Mountain, Waves, Flame, Wind, Sparkles } from 'lucide-react';

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
    question: "When does your inner fire burn brightest?",
    options: [
      { text: "Dawn breaks and I rise fresh", value: "dawn", icon: <Sunrise size={24} /> },
      { text: "Midday sun at its peak", value: "midday", icon: <Flame size={24} /> },
      { text: "Evening twilight whispers", value: "evening", icon: <Moon size={24} /> },
      { text: "Deep night when the world sleeps", value: "night", icon: <Moon size={24} /> }
    ]
  },
  {
    id: 2,
    question: "How does your breath respond to life's storms?",
    options: [
      { text: "Quick and light, like a bird", value: "quick", icon: <Wind size={24} /> },
      { text: "Slow and deep, like the ocean", value: "deep", icon: <Waves size={24} /> },
      { text: "I hold my breath and pause", value: "hold", icon: <Mountain size={24} /> },
      { text: "I forget to breathe entirely", value: "forget", icon: <Wind size={24} /> }
    ]
  },
  {
    id: 3,
    question: "Which realm calls to your soul?",
    options: [
      { text: "Desert of infinite light", value: "desert", icon: <Sunrise size={24} /> },
      { text: "Forest of ancient wisdom", value: "forest", icon: <Mountain size={24} /> },
      { text: "Ocean of endless depth", value: "ocean", icon: <Waves size={24} /> },
      { text: "Mountain of sacred silence", value: "mountain", icon: <Mountain size={24} /> }
    ]
  },
  {
    id: 4,
    question: "What is your elemental essence?",
    options: [
      { text: "Fire - Transformation & Power", value: "fire", icon: <Flame size={24} /> },
      { text: "Air - Movement & Inspiration", value: "air", icon: <Wind size={24} /> },
      { text: "Water - Flow & Intuition", value: "water", icon: <Waves size={24} /> },
      { text: "Earth - Stability & Grounding", value: "earth", icon: <Mountain size={24} /> }
    ]
  },
  {
    id: 5,
    question: "Choose your SolAvatar path:",
    options: [
      { text: "The Solar Seer - Vision & Prophecy", value: "seer", icon: <Sunrise size={24} /> },
      { text: "The Dawn Dancer - Joy & Movement", value: "dancer", icon: <Wind size={24} /> },
      { text: "The Still Flame - Peace & Presence", value: "flame", icon: <Flame size={24} /> },
      { text: "The Light Weaver - Creation & Art", value: "weaver", icon: <Waves size={24} /> }
    ]
  }
];

const archetypes = {
  "Solar Seer": {
    title: "The Solar Seer",
    description: "You are a vessel of ancient wisdom, attuned to the cosmic rhythms that others cannot perceive. Your path is one of vision and intuitive knowing.",
    constitution: "Primarily Vata with Pitta influence",
    chronotype: "Dawn-oriented with natural circadian sensitivity",
    element: "Fire + Air",
    rituals: ["Dawn meditation", "Solar gazing", "Breathwork at sunrise", "Intuitive journaling"],
    color: "text-solar-gold"
  },
  "Dawn Dancer": {
    title: "The Dawn Dancer", 
    description: "Movement is your prayer, and joy flows through you like sunlight through crystal. You embody the playful spirit of awakening life.",
    constitution: "Balanced Pitta-Vata with strong Agni",
    chronotype: "Early riser with peak energy at dawn",
    element: "Air + Fire",
    rituals: ["Moving meditation", "Solar salutations", "Rhythmic breathing", "Celebration practices"],
    color: "text-dawn-pink"
  },
  "Still Flame": {
    title: "The Still Flame",
    description: "In your stillness burns the steady flame of presence. You are the calm center around which the world can find its balance.",
    constitution: "Kapha-dominant with stable Pitta",
    chronotype: "Steady throughout the day",
    element: "Earth + Fire", 
    rituals: ["Silent meditation", "Candle contemplation", "Grounding practices", "Sacred holding space"],
    color: "text-mystic-teal"
  },
  "Light Weaver": {
    title: "The Light Weaver",
    description: "You transform the mundane into the magical, weaving light and beauty into everything you touch. Creativity is your spiritual practice.",
    constitution: "Pitta-Vata with artistic temperament",
    chronotype: "Variable, responds to inspiration",
    element: "Water + Fire",
    rituals: ["Creative expression", "Color meditation", "Sacred crafting", "Beauty cultivation"],
    color: "text-dusk-lavender"
  }
};

export const SolarQuiz: React.FC<SolarQuizProps> = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnswer = (value: string) => {
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
    
    if (values.includes('seer') || (values.includes('dawn') && values.includes('desert'))) {
      return archetypes["Solar Seer"];
    } else if (values.includes('dancer') || (values.includes('quick') && values.includes('midday'))) {
      return archetypes["Dawn Dancer"];
    } else if (values.includes('flame') || (values.includes('hold') && values.includes('mountain'))) {
      return archetypes["Still Flame"];
    } else {
      return archetypes["Light Weaver"];
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

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
            <h2 className={`font-display text-5xl md:text-6xl font-bold ${result.color} mb-6`}>
              {result.title}
            </h2>
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
              <span>Get Your Ritual Map</span>
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