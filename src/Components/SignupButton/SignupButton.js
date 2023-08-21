import React from 'react';
import styles from '../Header/Header.module.css';

const SignupButton = () => {
  const handleSignupClick = () => {
    console.log('Sign Up clicked');
  };

  return (
    <button className={styles.signup} onClick={handleSignupClick}>
      Sign Up
    </button>
  );
}

export default SignupButton;
