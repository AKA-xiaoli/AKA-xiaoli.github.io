import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ResearchSection from './components/ResearchSection';
import TeamSection from './components/TeamSection';
import VacanciesSection from './components/VacanciesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection />
            <ResearchSection />
            <TeamSection />
          </>
        );
      case 'research':
        return <ResearchSection />;
      case 'team':
        return <TeamSection />;
      case 'vacancies':
        return <VacanciesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection />
            <ResearchSection />
            <TeamSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;