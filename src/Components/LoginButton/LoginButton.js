import React from 'react';
import styles from '../Header/Header.module.css';

const LoginButton = () => {
  const handleLoginClick = () => {
    console.log('Log In clicked');
  };

  return (
    <button className={styles.login} onClick={handleLoginClick}>
      Log In
    </button>
  );
}

export default LoginButton;
