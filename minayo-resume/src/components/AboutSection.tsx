import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section slide-up">
      <h2>About Me</h2>
      <div className="profile-container">
        <img src="/images/myprofile.jpeg" alt="Melanie Minayo" className="profile-pic" />
        <div className="about-text">
          <p>
            Hi! I’m Melanie Minayo, a passionate Software Engineer, UI/UX Designer, and Digital Marketer,
            currently a third-year Computer Science student at JKUAT.
            I thrive at the intersection of technology and creativity, developing intuitive applications,
            designing seamless user experiences, and crafting powerful marketing strategies.
            <br /><br />
            My expertise spans web and mobile development, front-end frameworks, and digital branding.
            I believe in continuous learning and problem-solving to build impactful tech solutions.
            <br /><br />
            Let's connect and innovate together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
