import React, { useState, useEffect } from 'react';
import { useRandomiser } from '../../hooks/useRandomiser';
import GenerateButton from '../GenerateButton';
import GenerateSentence from '../GenerateSentence';
import DimensionToggle from '../DimensionToggle';
import styles from './GenerateArticle.module.scss';

const GenerateArticle = ({ inclusiveData }) => {
  const {
    names,
    ages,
    colours,
    objectivesAll,
    objectives13,
    biologicals,
    organisationalAll,
    organisational13,
    culturalAll,
    cultural13
  } = inclusiveData;

  // Set Sate for Inclusive Options
  const [name, setName] = useState(useRandomiser(names));
  const [objective, setObjective] = useState(useRandomiser(objectivesAll));
  const [age, setAge] = useState(useRandomiser(ages));
  const [biological, setBiological] = useState(useRandomiser(biologicals));
  const [cultural, setCultural] = useState(useRandomiser(culturalAll));
  const [organisational, setOrganisational] = useState(useRandomiser(organisationalAll));
  const [toggleActive, setToggleActive] = useState('true');

  // Conditionally load options based on age (13 plus)
  useEffect(() => {
    if (age > 13) {
      setObjective(useRandomiser([...objectives13, ...objectivesAll]));
      setOrganisational(useRandomiser([...organisational13, ...organisationalAll]));
      setCultural(useRandomiser([...cultural13, ...culturalAll]));
    } else {
      setObjective(useRandomiser(objectivesAll));
      setOrganisational(useRandomiser(organisationalAll));
      setCultural(useRandomiser(culturalAll));
    }
  }, [age]);

  // Show More / Less Dimensions
  const onToggleHandler = () => {
    setToggleActive(!toggleActive);
  };

  // Generate New Sentence Handler
  const generateSentenceHandler = () => {
    document.body.style.backgroundColor = useRandomiser(colours);
    setName(useRandomiser(names));
    setAge(useRandomiser(ages));
    setBiological(useRandomiser(biologicals));
    setCultural(useRandomiser(cultural13));
  };

  return (
    <>
      <article className={styles.article}>
        <GenerateSentence
          id="sentence"
          name={name}
          objective={objective}
          age={age}
          biological={biological}
          cultural={cultural}
          organisational={organisational}
          toggleActive={toggleActive}
        />

        <GenerateButton generateTitle={generateSentenceHandler} aria-controls="sentence" />
      </article>
      <DimensionToggle toggleDimensions={onToggleHandler} toggleActive={toggleActive} />
    </>
  );
};

export default GenerateArticle;
