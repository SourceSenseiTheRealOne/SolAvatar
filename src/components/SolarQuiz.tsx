import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sunrise, Moon, Mountain, Waves, Flame, Wind } from 'lucide-react';

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
      { text: "Dawn breaks and I rise fresh", value: "dawn", icon: <Sunrise size={20} /> },
      { text: "Midday sun at its peak", value: "midday", icon: <Flame size={20} /> },
      { text: "Evening twilight whispers", value: "evening", icon: <Moon size={20} /> },
      { text: "Deep night when the world sleeps", value: "night", icon: <Moon size={20} /> }
    ]
  },
  {
    id: 2,
    question: "How does your breath respond to life's storms?",
    options: [
      { text: "Quick and light, like a bird", value: "quick", icon: <Wind size={20} /> },
      { text: "Slow and deep, like the ocean", value: "deep", icon: <Waves size={20} /> },
      { text: "I hold my breath and pause", value: "hold", icon: <Mountain size={20} /> },
      { text: "I forget to breathe entirely", value: "forget", icon: <Wind size={20} /> }
    ]
  },
  {
    id: 3,
    question: "Which realm calls to your soul?",
    options: [
      { text: "Desert of infinite light", value: "desert", icon: <Sunrise size={20} /> },
      { text: "Forest of ancient wisdom", value: "forest", icon: <Mountain size={20} /> },
      { text: "Ocean of endless depth", value: "ocean", icon: <Waves size={20} /> },
      { text: "Mountain of sacred silence", value: "mountain", icon: <Mountain size={20} /> }
    ]
  },
  {
    id: 4,
    question: "What is your elemental essence?",
    options: [
      { text: "Fire - Transformation & Power", value: "fire", icon: <Flame size={20} /> },
      { text: "Air - Movement & Inspiration", value: "air", icon: <Wind size={20} /> },
      { text: "Water - Flow & Intuition", value: "water", icon: <Waves size={20} /> },
      { text: "Earth - Stability & Grounding", value: "earth", icon: <Mountain size={20} /> }
    ]
  },
  {
    id: 5,
    question: "Choose your SolAvatar path:",
    options: [
      { text: "The Solar Seer - Vision & Prophecy", value: "seer", icon: <Sunrise size={20} /> },
      { text: "The Dawn Dancer - Joy & Movement", value: "dancer", icon: <Wind size={20} /> },
      { text: "The Still Flame - Peace & Presence", value: "flame", icon: <Flame size={20} /> },
      { text: "The Light Weaver - Creation & Art", value: "weaver", icon: <Waves size={20} /> }
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
    rituals: ["Dawn meditation", "Solar gazing", "Breathwork at sunrise", "Intuitive journaling"]
  },
  "Dawn Dancer": {
    title: "The Dawn Dancer", 
    description: "Movement is your prayer, and joy flows through you like sunlight through crystal. You embody the playful spirit of awakening life.",
    constitution: "Balanced Pitta-Vata with strong Agni",
    chronotype: "Early riser with peak energy at dawn",
    element: "Air + Fire",
    rituals: ["Moving meditation", "Solar salutations", "Rhythmic breathing", "Celebration practices"]
  },
  "Still Flame": {
    title: "The Still Flame",
    description: "In your stillness burns the steady flame of presence. You are the calm center around which the world can find its balance.",
    constitution: "Kapha-dominant with stable Pitta",
    chronotype: "Steady throughout the day",
    element: "Earth + Fire", 
    rituals: ["Silent meditation", "Candle contemplation", "Grounding practices", "Sacred holding space"]
  },
  "Light Weaver": {
    title: "The Light Weaver",
    description: "You transform the mundane into the magical, weaving light and beauty into everything you touch. Creativity is your spiritual practice.",
    constitution: "Pitta-Vata with artistic temperament",
    chronotype: "Variable, responds to inspiration",
    element: "Water + Fire",
    rituals: ["Creative expression", "Color meditation", "Sacred crafting", "Beauty cultivation"]
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
      // Calculate result based on answers
      const profile = calculateProfile(newAnswers);
      setResult(profile);
      setShowResult(true);
    }
  };

  const calculateProfile = (answers: Record<number, string>) => {
    // Simplified archetype calculation
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
      <section className="min-h-screen bg-gradient-to-br from-deep-eclipse via-cosmic-purple to-deep-eclipse flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 border border-dawngold/30"
        >
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-dawngold/20 rounded-full flex items-center justify-center">
              <Flame className="text-dawngold" size={40} />
            </div>
            <h2 className="font-cormorant text-4xl font-bold text-dawngold mb-4">
              {result.title}
            </h2>
            <p className="font-inter text-ritual-sand text-lg leading-relaxed mb-6">
              {result.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="bg-dawngold/10 rounded-2xl p-4">
              <h4 className="font-cormorant text-dawngold font-semibold mb-2">Constitution</h4>
              <p className="font-inter text-voidsilver text-sm">{result.constitution}</p>
            </div>
            <div className="bg-mystic-teal/10 rounded-2xl p-4">
              <h4 className="font-cormorant text-mystic-teal font-semibold mb-2">Chronotype</h4>
              <p className="font-inter text-voidsilver text-sm">{result.chronotype}</p>
            </div>
            <div className="bg-solar-flare/10 rounded-2xl p-4">
              <h4 className="font-cormorant text-solar-flare font-semibold mb-2">Element</h4>
              <p className="font-inter text-voidsilver text-sm">{result.element}</p>
            </div>
            <div className="bg-ritual-sand/20 rounded-2xl p-4">
              <h4 className="font-cormorant text-ritual-sand font-semibold mb-2">Sacred Rituals</h4>
              <div className="text-voidsilver text-sm">
                {result.rituals.map((ritual: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2 mb-1">
                    <div className="w-1 h-1 bg-ritual-sand rounded-full"></div>
                    <span>{ritual}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onComplete(result)}
              className="bg-dawngold text-deep-eclipse px-8 py-3 rounded-full font-inter font-semibold hover:bg-solar-flare transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Your Ritual Map</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={onComplete}
              className="border border-dawngold text-dawngold px-8 py-3 rounded-full font-inter font-semibold hover:bg-dawngold hover:text-deep-eclipse transition-all duration-300"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-deep-eclipse via-cosmic-purple to-deep-eclipse flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="font-inter text-ritual-sand text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-inter text-ritual-sand text-sm">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-deep-eclipse rounded-full h-2">
            <div 
              className="bg-dawngold h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 border border-dawngold/30"
          >
            <h2 className="font-cormorant text-3xl font-bold text-dawngold mb-8 text-center">
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
                  className="w-full p-4 bg-dawngold/10 hover:bg-dawngold/20 border border-dawngold/30 hover:border-dawngold/60 rounded-2xl transition-all duration-300 text-left group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-dawngold group-hover:scale-110 transition-transform">
                      {option.icon}
                    </div>
                    <span className="font-inter text-voidsilver group-hover:text-dawngold transition-colors">
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 text-ritual-sand hover:text-dawngold transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-inter">Back</span>
          </button>
        </div>
      </div>
    </section>
  );
};