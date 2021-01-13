import React, { useState } from 'react';
import { colours } from '../../pages/api/colours';
import { names } from '../../pages/api/names';
import { objectives } from '../../pages/api/objectives';
import { biologicals } from '../../pages/api/biological';
import { organisationals } from '../../pages/api/organisational';
import GenerateButton from '../GenerateButton';
import GenerateSentence from '../GenerateSentence';
import styles from './GenerateArticle.module.scss';

// console.log(names)

const GenerateArticle = () => {
  const colourArray = colours;
  const nameArray = names;
  const objectiveArray = objectives;
  const biologicalArray = biologicals;
  const culturalArray = ['low income', 'medium income', 'with inherited wealth', 'high income'];
  const organisationalArray = organisationals;

  // Randomiser function to pick random value from array
  const randomiser = array => array[Math.floor(Math.random() * array.length)];

  // Set Sate for Incusive Options
  const [name, setName] = useState(randomiser(names));
  const [objective, setObjective] = useState(randomiser(objectiveArray));
  const [biological, setBiological] = useState(randomiser(biologicalArray));
  const [cultural, setCultural] = useState(randomiser(culturalArray));
  const [organisational, setOrganisational] = useState(randomiser(organisationalArray));
  
  // Generate New Sentence Handler
  const generateSentenceHandler = () => {
    document.body.style.backgroundColor = randomiser(colourArray);
    setName(randomiser(nameArray));
    setObjective(randomiser(objectiveArray));
    setBiological(randomiser(biologicalArray));
    setCultural(randomiser(culturalArray));
    setOrganisational(randomiser(organisationalArray));
  };

  return (
    <article className={styles.article}>
      <GenerateSentence
        id="sentence"
        name={name} 
        objective={objective} 
        biological={biological}
        cultural={cultural}
        organisational={organisational} 
        aria-live="assertive"
      />

      <GenerateButton generateTitle={generateSentenceHandler} aria-controls="sentence" />
    </article>
  );
}

export default GenerateArticle;
