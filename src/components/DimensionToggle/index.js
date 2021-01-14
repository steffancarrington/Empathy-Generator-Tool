import React from 'react';
import styles from './DimensionToggle.module.scss';

const DimensionToggle = ({ toggleDimensions, toggleActive }) => {
  return (
    <section className={styles.section}>
      <button
        className={styles.button}
        type="button"
        role="switch"
        aria-checked={toggleActive}
        aria-labelledby="toggle-dimensions"
        onClick={toggleDimensions}>
        {toggleActive ? (
          <span className="hidden-v">on</span>
        ) : (
          <span className="hidden-v">off</span>
        )}
        <span className={styles.buttonSwitch} aria-hidden="true"></span>
      </button>
      <span id="toggle-dimensions" className={styles.switchLabel}>
        {toggleActive ? 'Show less' : 'Show more'} dimensions
      </span>
    </section>
  );
};

export default DimensionToggle;
