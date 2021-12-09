
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
    const [tokenListener, setToken] = useState(false);
    const [boardListener, setBoard] = useState(false);
    
    function addUser(newUserData) {
        return addDoc(collection(db, 'users'), newUserData);
    }
    
    function addBoard(newBoard) {
        return addDoc(collection(db, "boards"), newBoard);
    }

    async function setUserBoard(board, uid) {
        return setDoc(doc(db, "userBoard", uid), board, {merge: true})
      }

    async function setUserToken(token, uid) {
        return setDoc(doc(db, "userToken", uid), token, {merge: true})
      }
      
    function addToken(newToken) {
        return addDoc(collection(db, "token"), newToken);
    }

    const value = {
        addToken,
        setToken,
        addUser,
        addBoard,
        setBoard,
        setUserBoard,
        setUserToken
        
    };
    
    return (
            <DBContext.Provider value={value}>
                { children }
            </DBContext.Provider>
    );
}
 
