import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: 'AIzaSyBWZiX0wQn1NiFczE8-cDS9ONechbYV3OU',
  authDomain: 'inclusive-scenario-generator.firebaseapp.com',
  databaseURL:
    'https://inclusive-scenario-generator-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'inclusive-scenario-generator',
  storageBucket: 'inclusive-scenario-generator.appspot.com',
  messagingSenderId: '161056727238',
  appId: '1:161056727238:web:3cc015fb3ed08425db77c7',
  measurementId: 'G-2XDTQYW8D3'
};

// Initialise Firebase App passing in our config if there are no insitialisations yet
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Grab reference to firestore database and export it as a named export
const firestore = firebase.firestore();

export { firestore };
