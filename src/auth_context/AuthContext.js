import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";


import { auth, db } from '../firebase.js';

export const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = await addDoc(collection(db, "users"), {
      authProvider: "local",
      email,
    });
    console.log("Document written with ID: ", user.name);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signInUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const passwordReset = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  auth.signOut();
};
