import React from 'react';
import styles from './GenerateSentence.module.scss';

const GenerateSentence = ({name, objective, biological, cultural, organisational}) => {
  return (
    <p className={styles.sentence} suppressHydrationWarning={true}>
      {name} would like to find {objective} whilst being {biological} {cultural} {organisational}
    </p>
  );
};

export default GenerateSentence;

