import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { SolarQuiz } from './components/SolarQuiz';
import { TrinitumSection } from './components/TrinitumSection';
import { MythSection } from './components/MythSection';
import { SolarNourishmentPreview } from './components/SolarNourishmentPreview';
import { WaitlistSection } from './components/WaitlistSection';

type CurrentView = 'home' | 'quiz' | 'waitlist';

function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('home');

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleJoinWaitlist = () => {
    setCurrentView('waitlist');
  };

  const handleQuizComplete = () => {
    setCurrentView('waitlist');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentView === 'quiz') {
    return (
      <SolarQuiz 
        onComplete={handleQuizComplete}
        onBack={handleBackToHome}
      />
    );
  }

  if (currentView === 'waitlist') {
    return (
      <div>
        <WaitlistSection />
        <div className="fixed bottom-8 left-8 z-50">
          <button
            onClick={handleBackToHome}
            className="bg-dawngold text-deep-eclipse px-6 py-3 rounded-full font-inter font-semibold hover:bg-solar-flare transition-all duration-300 shadow-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection 
        onStartQuiz={handleStartQuiz}
        onJoinWaitlist={scrollToWaitlist}
      />
      <TrinitumSection />
      <SolarNourishmentPreview />
      <MythSection />
      <WaitlistSection />
      
      {/* Floating navigation */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-3">
        <button
          onClick={handleStartQuiz}
          className="bg-dawngold text-deep-eclipse p-4 rounded-full font-inter font-semibold hover:bg-solar-flare transition-all duration-300 shadow-lg hover:shadow-dawngold/30"
          title="Start Solar Quiz"
        >
          ✦
        </button>
        <button
          onClick={scrollToWaitlist}
          className="bg-mystic-teal text-white p-4 rounded-full font-inter font-semibold hover:bg-dawngold hover:text-deep-eclipse transition-all duration-300 shadow-lg"
          title="Join Waitlist"
        >
          ⋆
        </button>
      </div>
    </div>
  );
}

export default App;