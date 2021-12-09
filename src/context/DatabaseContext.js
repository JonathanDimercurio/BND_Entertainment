
// Depenedant: firestore.js, getFirestore = db
// Depenedant: AuthProvider, User must be signed in *

import React, { useContext, useState, useEffect } from "react";

import {  query,
           doc,
        addDoc,
        setDoc,
        getDoc,
        getDocs,
        onSnapshot,
        collection } from "firebase/firestore";

import { db } from '../firebase';
import { useAuth } from './AuthContext';
    
const DBContext = React.createContext();

export function useDB() {
    return useContext(DBContext);
}

export function DBProvider({ children }) {
    const { currentUser } = useAuth();
    const [tokenListener, setToken] = useState(false);
    const userColRef = collection(db, 'users/');
    const tokensColPathRef = collection(db, 'token')   

    function addUser(newUserData) {
        return addDoc(collection(db, 'users'), newUserData);
    }
    
    function addBoard(newBoard) {
        return addDoc(collection(db, "boards"), newBoard);
    }

    async function setUserToken(user) {
        let response = await getDoc(db, user.uid);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setToken(response);
      }
      
    function addToken(newToken) {
        return addDoc(collection(db, "token"), newToken);
    }

    const value = {
        addToken,
        setToken,
        setUserToken,
        addUser,
        addBoard,
        
    };
    
    return (
            <DBContext.Provider value={value}>
                { children }
            </DBContext.Provider>
    );
}
 
