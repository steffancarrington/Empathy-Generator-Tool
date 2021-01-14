import React, { useState } from 'react';
import { colours } from '../../pages/api/colours';
import { names } from '../../pages/api/names';
import { objectives } from '../../pages/api/objectives';
import { biologicals } from '../../pages/api/biological';
import { organisationals } from '../../pages/api/organisational';
import { personals } from '../../pages/api/pesonal';
import GenerateButton from '../GenerateButton';
import GenerateSentence from '../GenerateSentence';
import DimensionToggle from '../DimensionToggle';
import styles from './GenerateArticle.module.scss';

const GenerateArticle = () => {
  // Randomiser function to pick random value from array
  const randomiser = (array) => array[Math.floor(Math.random() * array.length)];

  // Set Sate for Incusive Options
  const [name, setName] = useState(randomiser(names));
  const [objective, setObjective] = useState(randomiser(objectives));
  const [biological, setBiological] = useState(randomiser(biologicals));
  const [cultural, setCultural] = useState(randomiser(personals));
  const [organisational, setOrganisational] = useState(randomiser(organisationals));
  const [toggleActive, setToggleActive] = useState('true');

  // Show More / Less Dimensions
  const onToggleHandler = () => {
    setToggleActive(!toggleActive);
  };

  // Generate New Sentence Handler
  const generateSentenceHandler = () => {
    document.body.style.backgroundColor = randomiser(colours);
    setName(randomiser(names));
    setObjective(randomiser(objectives));
    setBiological(randomiser(biologicals));
    setCultural(randomiser(personals));
    setOrganisational(randomiser(organisationals));
  };

  return (
    <>
      <article className={styles.article}>
        <GenerateSentence
          id="sentence"
          name={name}
          objective={objective}
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
