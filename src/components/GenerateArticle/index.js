import React, { useState, useEffect } from 'react';
import { useFetchFirebaseData } from '../../hooks/useFetchFireBaseData';
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

  // Fetch Latest Data from Firebase
  useEffect(() => {
    useFetchFirebaseData();
  }, []);

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

// export async function getServerSideProps() {
//   try {
//     // Get Data from Firebase
//     const names = await useFirebaseData('names');
//     const colours = await useFirebaseData('colours');
//     const objectives = await useFirebaseData('objective');
//     const ages = await useFirebaseData('age');
//     const biologicals = await useFirebaseData('biological');
//     const organisationals = await useFirebaseData('organisational');
//     const culturals = await useFirebaseData('personal-cultural');

//     // Structure inclusiveData props
//     const inclusiveData = {
//       colours: colours[0].colours,
//       names: names[0].names,
//       objectivesAll: objectives[0]['all'],
//       objectives13: objectives[0]['13-plus'],
//       ages: ages[0].age,
//       biologicals: biologicals[0].biological,
//       organisationalAll: organisationals[0]['all'],
//       organisational13: organisationals[0]['13-plus'],
//       culturalAll: culturals[0]['all'],
//       cultural13: culturals[0]['13-plus']
//     };

//     return {
//       props: {
//         inclusiveData
//       }
//     };
//   } catch (error) {
//     console.error(error);
//   }
// }
