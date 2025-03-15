// src/app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Updated CSS import

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#portfolio">Portfolio</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
