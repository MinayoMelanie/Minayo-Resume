import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PortfolioSection.module.css'; // Import CSS Module

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <h2 className={styles.heading}>Portfolio</h2>
      <div className={styles.portfolioGrid}>
        <div className={styles.card}>
          <Link href="https://geopasture.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <div className={styles.project}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/Geopasture.png" 
                  alt="Geopasture Project" 
                  width={250} 
                  height={150} 
                  className={styles.projectImage}
                />
              </div>
              <h3 className={styles.heading}>GeoPasture</h3>
              <p className={styles.description}>A platform helping pastoralists manage grazing land using AI and real-time updates.</p>
            </div>
          </Link>
        </div>
        
        <div className={styles.card}>
          <Link href="https://byteflow.co.ke/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <div className={styles.project}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/ByteFlow.png" 
                  alt="Byteflow Project" 
                  width={250} 
                  height={150} 
                  className={styles.projectImage}
                />
              </div>
              <h3 className={styles.heading}>Byteflow</h3>
              <p className={styles.description}>A high-performance SaaS platform integrating AI-driven business solutions.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


