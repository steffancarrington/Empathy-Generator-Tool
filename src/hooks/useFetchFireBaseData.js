import { useFirebaseData } from '../hooks/useFirebaseData';

const useFetchFirebaseData = async () => {
  try {
    // Get Data from Firebase
    const names = await useFirebaseData('names');
    const colours = await useFirebaseData('colours');
    const objectives = await useFirebaseData('objective');
    const ages = await useFirebaseData('age');
    const biologicals = await useFirebaseData('biological');
    const organisationals = await useFirebaseData('organisational');
    const culturals = await useFirebaseData('personal-cultural');

    // Structure inclusiveData props
    const inclusiveData = {
      colours: colours[0].colours,
      names: names[0].names,
      objectivesAll: objectives[0]['all'],
      objectives13: objectives[0]['13-plus'],
      ages: ages[0].age,
      biologicals: biologicals[0].biological,
      organisationalAll: organisationals[0]['all'],
      organisational13: organisationals[0]['13-plus'],
      culturalAll: culturals[0]['all'],
      cultural13: culturals[0]['13-plus']
    };

    return inclusiveData;
  } catch (err) {
    console.error(err);
  }
};

export { useFetchFirebaseData };
