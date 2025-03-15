
import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
     
      
        <Navbar />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
        
        {/* You can add other sections here */}
        {/* <SkillsSection /> */}
        {/* <ProjectsSection /> */}
        {/* <ContactSection /> */}
      </div>
    </main>
  );
}