import React from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import './styles/global.css';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <HeroSection />
        <Navbar />
        <main>
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <footer>
          <p>&copy; 2025 Melanie Minayo. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
