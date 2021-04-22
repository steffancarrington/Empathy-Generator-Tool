import { firestore } from '../../utils/firebase';

const useFirebaseData = async (collectionName) => {
  const snapshot = await firestore.collection(collectionName).get();
  let firebaseData = [];

  snapshot.docs.forEach((doc) => firebaseData.push(doc.data()));

  return firebaseData;
};

export { useFirebaseData };
