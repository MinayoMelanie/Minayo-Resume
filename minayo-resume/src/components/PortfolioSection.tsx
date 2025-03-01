import React from 'react';
import './PortfolioSection.css';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="section slide-up">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        <a href="https://geopasture.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project">
            <img src="/images/Geopasture.png" alt="Geopasture Project" />
            <h3>GeoPasture</h3>
            <p>A platform helping pastoralists manage grazing land using AI and real-time updates.</p>
          </div>
        </a>
        <a href="https://byteflow.co.ke/" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project">
            <img src="/images/ByteFlow.png" alt="Byteflow Project" />
            <h3>Byteflow</h3>
            <p>A high-performance SaaS platform integrating AI-driven business solutions.</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default PortfolioSection;
