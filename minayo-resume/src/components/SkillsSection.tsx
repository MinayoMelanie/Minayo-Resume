import React from 'react';
import './SkillsSection.css';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section fade-in">
      <h2>Technical Skills & Tools</h2>
      <div className="skills-grid">
        <div className="skill-item"><i className="fas fa-paint-brush"></i> UI/UX: Figma, Adobe XD, Sketch</div>
     
        <div className="skill-item"><i className="fas fa-server"></i> Backend: Node.js, Express.js, Firebase</div>
        <div className="skill-item"><i className="fas fa-database"></i> Database: MySQL, MongoDB</div>
        <div className="skill-item"><i className="fas fa-chart-line"></i> Digital Marketing: SEO, Google Ads</div>
        <div className="skill-item"><i className="fab fa-git-alt"></i> Version Control: Git, GitHub</div>
      </div>
    </section>
  );
};
export default SkillsSection;
