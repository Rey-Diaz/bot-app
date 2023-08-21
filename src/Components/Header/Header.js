// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import styles from './Header.module.css';
import LoginButton from '../LoginButton/LoginButton';
import SignupButton from '../SignupButton/SignupButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.hamburger} onClick={handleHamburgerClick}>
          ☰
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/chat">Chat</Link></li> {/* Add the Chat link */}
        </ul>
      </div>
      <div className={styles.right}>
        <LoginButton />
        <SignupButton />
      </div>
    </header>
  );
}

export default Header;