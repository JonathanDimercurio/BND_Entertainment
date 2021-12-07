
// Depenedant: firestore.js, getFirestore = db
// Depenedant: AuthProvider, User must be signed in *

import React, { useContext, useState } from "react";
import {   doc,
        addDoc,
        setDoc,
        gertDocs,
        useRef,
    collection } from "firebase/firestore";

import { db, fbstorage } from '../firebase';
import { useAuth } from './AuthContext';
    
const DBContext = React.createContext();

export function useDB() {
    return useContext(DBContext);
}

export function DBProvider({ children }) {
    const boardsColRef = collection(db, 'boards')
    const userDocRef = doc(db, 'users/userRef');


    const { currentUser } = useAuth();
    

    function addUser() {
        const userRef = doc(db, 'users/userRef');
        const displayName = currentUser.displayName;
        const newUserData = {
            [currentUser.email]: currentUser.uid,
            [currentUser.displayName]: currentUser.uid.slice(1,5)
        }
        
        return setDoc(userRef, newUserData, { merge: true });
    }
    
    function addBoard(newBoard) {
        return addDoc(collection(db, "boards"), newBoard);
    }
    
    async function getAllBoards() {
        const snapshot = firebase.firestore().collection("boards").get()
        return snapshot.docs;
    }
    
    // address this now TODO: NOW!
    function getAllTokens () {
        
    }
    
    function addToken(newToken) {
        return setDoc(collection(db, "tokens"), newToken, {merge: true} );
    }

    function getAllBoards( ) {}

    const value = {
        useAuth,
        addUser,
        addBoard,
        addToken,
        getAllBoards,
        boardsColRef,
        userDocRef
        

    };
    
    return (
            <DBContext.Provider value={value}>
                { children }
            </DBContext.Provider>
    );
}
 
