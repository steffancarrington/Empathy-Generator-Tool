import React from 'react';
import styles from './GenerateButton.module.scss';

const GenerateButton = ({generateTitle}) => {
  return (
    <button type="button" className={styles.button} onClick={generateTitle}>
      <svg viewBox="0 0 71 98" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <title>Refresh Icon</title>
        <path d="M35.6041 22.3106C28.2473 22.3106 21.9663 24.917 16.761 30.1298C11.5557 35.3426 8.95308 41.6326 8.95308 49C8.95308 53.4482 9.99413 57.6184 12.0762 61.5106L5.41349 67.9745C1.8045 62.1362 0 55.8113 0 49C0 39.1305 3.47019 30.7206 10.4106 23.7702C17.3509 16.8199 25.7488 13.3447 35.6041 13.3447V0L53.3021 17.9319L35.6041 35.6553V22.3106ZM65.5865 30.0255C69.1955 35.8638 71 42.1887 71 49C71 58.8695 67.5298 67.2794 60.5894 74.2298C53.6491 81.1801 45.3206 84.6553 35.6041 84.6553V98L17.6979 80.0681L35.6041 62.3447V75.6894C42.9609 75.6894 49.2419 73.083 54.4472 67.8702C59.6525 62.6574 62.2551 56.3674 62.2551 49C62.2551 44.6908 61.2141 40.5206 59.132 36.4894L65.5865 30.0255Z" fill="white"/>
      </svg>
      <span className="hidden-v">Click here to Generate New Inclusive Title</span>
    </button>
  );
};

export default GenerateButton;
