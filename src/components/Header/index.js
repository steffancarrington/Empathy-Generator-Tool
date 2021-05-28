import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Inclusive Scenario Generator</h1>
      <a href="https://inviqa.com/" title="Click here to see more great content from Inviqa">
        <img
          className={styles.header__logo}
          src="/logo.svg"
          height={65}
          width={65}
          alt="Inviqa Logo"
        />
      </a>
    </header>
  );
};

export default Header;
