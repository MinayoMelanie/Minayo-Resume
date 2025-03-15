"use client";

import React from "react";
import styles from "./SkillsSection.module.css";
import { FaPaintBrush, FaServer, FaChartLine, FaGitAlt } from "react-icons/fa";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className={`${styles.section} fade-in`}>
      <h2>Technical Skills & Tools</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillItem}>
          <FaPaintBrush /> UI/UX: Figma, Adobe XD, Sketch
        </div>
        <div className={styles.skillItem}>
          <FaChartLine /> Digital Marketing: SEO, Google Ads
        </div>
        <div className={styles.skillItem}>
          <FaGitAlt /> Version Control: Git, GitHub
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
