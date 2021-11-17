/* REWRITTEIN NOV. 16, 2021 JD.*/
import firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import 'firebase/auth';

// THIS IS DNB's CUSTOM CONFIG GENGERATED AT BUILD FROM
// .env.local - IF YOU CHANGE THIS YOU NEED TO BUILD AGAIN ~~~!!!!
// The Keys are contained in .env.local to prevent local access.
// DO NOT DEPLOY WITH KEYS RATHER THEN EVN.LOCAL VARIABLES ~!

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

/*
 READ.ME
 Firebase services (like Cloud Firestore, Authentication,
 Realtime Database, Remote Config, and more) are available
 to import within individual sub-packages.
 
 
 !- const app = initializeApp(firebaseConfig); -!
 A Firebase App is a container-like object that stores common
 configuration and shares authentication across Firebase
 services. After you initialize a Firebase App object in your
 code, you can add and start using Firebase services.
 */
