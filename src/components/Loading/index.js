import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div class={styles.loading}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span className={styles.loadingText}>Loading Content...</span>
    </div>
  );
};

export default Loading;
