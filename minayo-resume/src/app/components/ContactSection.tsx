import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Contact</h2>
      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <img src="/images/email.jpg" alt="Email Icon" className={styles.contactIcon} />
          <a href="mailto:melanieminayo00@gmail.com" className={styles.link}>Email</a>
        </div>
        <div className={styles.contactItem}>
          <img src="/images/linkedin.jpg" alt="LinkedIn Icon" className={styles.contactIcon} />
          <a href="https://www.linkedin.com/in/melane-minayo-6ab167298/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
        </div>
        <div className={styles.contactItem}>
          <img src="/images/github.jpg" alt="GitHub Icon" className={styles.contactIcon} />
          <a href="https://github.com/MinayoMelanie" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
