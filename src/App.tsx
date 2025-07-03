import React, { useState } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { HeroSection } from './components/HeroSection';
import { StorytellingSection } from './components/StorytellingSection';
import { AppPreview } from './components/AppPreview';
import { MarketplacePreview } from './components/MarketplacePreview';
import { InvestorSection } from './components/InvestorSection';
import { WaitlistSection } from './components/WaitlistSection';
import { SolarQuiz } from './components/SolarQuiz';

type CurrentView = 'home' | 'quiz' | 'waitlist';

function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('home');

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleJoinWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuizComplete = () => {
    setCurrentView('waitlist');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  if (currentView === 'quiz') {
    return (
      <div className="min-h-screen relative">
        <CosmicBackground />
        <SolarQuiz 
          onComplete={handleQuizComplete}
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  if (currentView === 'waitlist') {
    return (
      <div className="min-h-screen relative">
        <CosmicBackground />
        <WaitlistSection />
        <div className="fixed bottom-8 left-8 z-50">
          <button
            onClick={handleBackToHome}
            className="bg-solar-gold text-cosmic-blue px-6 py-3 rounded-full font-body font-bold hover:bg-radiant-white transition-all duration-300 shadow-lg hover:shadow-solar-gold/50"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      
      <HeroSection 
        onStartQuiz={handleStartQuiz}
        onJoinWaitlist={handleJoinWaitlist}
      />
      
      <StorytellingSection />
      <AppPreview />
      <MarketplacePreview />
      <InvestorSection />
      <WaitlistSection />
      
      {/* Floating navigation */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <button
          onClick={handleStartQuiz}
          className="group bg-solar-gold text-cosmic-blue p-4 rounded-full font-body font-bold hover:bg-radiant-white transition-all duration-300 shadow-lg hover:shadow-solar-gold/50 hover:scale-110"
          title="Start Solar Quiz"
        >
          <span className="text-2xl">✦</span>
        </button>
        <button
          onClick={handleJoinWaitlist}
          className="group bg-mystic-teal text-radiant-white p-4 rounded-full font-body font-bold hover:bg-solar-gold hover:text-cosmic-blue transition-all duration-300 shadow-lg hover:scale-110"
          title="Join Waitlist"
        >
          <span className="text-2xl">⋆</span>
        </button>
      </div>
    </div>
  );
}

export default App;