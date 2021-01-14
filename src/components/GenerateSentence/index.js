import React from 'react';
import styles from './GenerateSentence.module.scss';

const GenerateSentence = ({
  name,
  objective,
  biological,
  cultural,
  organisational,
  toggleActive
}) => {
  return (
    <p className={styles.sentence} aria-live="polite" suppressHydrationWarning={true}>
      {name} would like to find {objective} whilst being {biological}
      {toggleActive && `, ${cultural}, `}
      {toggleActive && organisational}
    </p>
  );
};

export default GenerateSentence;
