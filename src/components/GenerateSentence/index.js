import React from 'react';
import styles from './GenerateSentence.module.scss';

const GenerateSentence = ({
  name,
  objective,
  age,
  biological,
  cultural,
  organisational,
  toggleActive
}) => {
  return (
    <p className={styles.sentence} aria-live="polite" suppressHydrationWarning={true}>
      {name}, {age} years old, would like to find {objective} whilst being {biological}
      {toggleActive && `, ${cultural}, `}
      {toggleActive && organisational}
    </p>
  );
};

export default GenerateSentence;
