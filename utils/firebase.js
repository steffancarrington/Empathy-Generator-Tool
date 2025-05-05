import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
};

// Initialise Firebase App passing in our config if there are no insitialisations yet
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Grab reference to firestore database and export it as a named export
const firestore = firebase.firestore();

export { firestore };
