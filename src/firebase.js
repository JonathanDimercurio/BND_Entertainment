// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
//

const firebaseConfig = {
  apiKey: "AIzaSyCiEmZiFZai9s__qMh4dz2NOmkDJ63A5o0",
  authDomain: "bnd-entertainment.firebaseapp.com",
  databaseURL: "https://bnd-entertainment-default-rtdb.firebaseio.com",
  projectId: "bnd-entertainment",
  storageBucket: "bnd-entertainment.appspot.com",
  messagingSenderId: "326939803258",
  appId: "1:326939803258:web:431251781675b2b98545c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

