import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero fade-in">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/video/phoenix.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>MINAYO</h1>
        <p className="subtitle">Software Engineer | UI/UX Designer | Digital Marketer</p>
      </div>
    </section>
  );
};

export default HeroSection;

