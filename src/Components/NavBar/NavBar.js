import React, { useState } from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
      <div className={styles.left}>
        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className={styles.right}>
        <button className={styles.login}>Log In</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </nav>
  );
}

export default NavBar;
