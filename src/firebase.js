import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdEvzxV2Ph7m_elcCDr5ehYfjmrxnP9mI",
  authDomain: "dndboard-40312.firebaseapp.com",
  projectId: "dndboard-40312",
  storageBucket: "dndboard-40312.appspot.com",
  messagingSenderId: "379915769570",
  appId: "1:379915769570:web:8104192b25a805b1e2b0bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


