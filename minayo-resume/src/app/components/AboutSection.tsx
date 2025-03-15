// app/components/AboutSection.tsx
import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>About Me</h2>
      <div className={styles.profileContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/myprofile.jpeg"
            alt="Melanie Minayo"
            width={250}
            height={250}
            className={styles.profilePic}
            priority
          />
        </div>
        <div className={styles.aboutText}>
          <p>
            Hi! I'm Melanie Minayo, a passionate Software Engineer, UI/UX Designer, and Digital Marketer,
            currently a third-year Computer Science student at JKUAT.
            I thrive at the intersection of technology and creativity, developing intuitive applications,
            designing seamless user experiences, and crafting powerful marketing strategies.
            <br /><br />
            My expertise spans web and mobile development, front-end frameworks, and digital branding.
            I believe in continuous learning and problem-solving to build impactful tech solutions.
            <br /><br />
            Let's connect and innovate together! 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;