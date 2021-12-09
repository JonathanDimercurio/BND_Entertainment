import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useRef, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const { initialising, user } = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    function updateEmail(email) {
        return updateEmail(auth, currentUser, email);
    }

    function updatePassword(password) {
        return updatePassword(auth, currentUser, password);
    }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
    });
    return () => {
      unsubscribe;
    }
  }, []);
  




  const value = {
    initialising,
    user,
    currentUser,
    setCurrentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    setLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
