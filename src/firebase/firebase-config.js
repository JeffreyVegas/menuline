import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyByjKgFY8KQtWHFKhH21S_g2jEeS8MohyY',
  authDomain: 'menunline.firebaseapp.com',
  projectId: 'menunline',
  storageBucket: 'menunline.appspot.com',
  messagingSenderId: '963982984661',
  appId: '1:963982984661:web:3300e0ac062ec5fccce95c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, googleAuthProvider, firebase, storage };
