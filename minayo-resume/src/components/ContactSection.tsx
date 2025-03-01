import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <img src="/images/email.jpg" alt="Email Icon" className="contact-icon" />
          <a href="mailto:melanieminayo00@gmail.com">Email</a>
        </div>
        <div className="contact-item">
          <img src="/images/linkedin.jpg" alt="LinkedIn Icon" className="contact-icon" />
          <a href="https://www.linkedin.com/in/melane-minayo-6ab167298/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-item">
          <img src="/images/github.jpg" alt="GitHub Icon" className="contact-icon" />
          <a href="https://github.com/MinayoMelanie" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
