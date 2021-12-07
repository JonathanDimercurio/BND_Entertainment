
// Depenedant: firestore.js, getFirestore = db
// Depenedant: AuthProvider, User must be signed in *

import React, { useContext, useState, useEffect } from "react";
import {   doc,
        addDoc,
        setDoc,
        getDoc,
        getCollectionData,
    collection } from "firebase/firestore";

import { db, fbstorage } from '../firebase';
import { useAuth } from './AuthContext';
    
const DBContext = React.createContext();

export function useDB() {
    return useContext(DBContext);
}

export function DBProvider({ children }) {
    const { currentUser } = useAuth();
    const [token, setToken] = useState(false);
    const [allBoards, setAllBoardsRef] = useState(false);
    const [allTokens, setAllTokens] = useState(false);
    

    const boardsColRef = collection(db, 'boards')
    const tokensColRef = collection(db, 'tokens')
    const userDocRef = doc(db, 'users/userRef');
    
   

    // WebHooks for DB assets
    


    function addUser() {
        const newUserData = {
            [currentUser.email]: currentUser.uid,
            [currentUser.displayName]: currentUser.uid.slice(1,5)
        }
        
        return setDoc(userDocRef, newUserData, { merge: true });
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

    function getToken () {
        return getDoc(db, 'token/' + currentUser.uid + '/')
    }
    
    function addToken(newToken) {
        return setDoc(doc(db, 'token/' + currentUser.uid + '/'), newToken, {merge: true} );
    }

    useEffect(() => {
        if (token) {
          getToken()
            .then(token => {
              if (token.exists) {
                setError(null);
                setToken(token.data());
              } else {
                setError('Token not found! Please upload a new one 🧐');
                setToken();
              }
            })
            .catch(() => setError('grocery-list-get-fail'));
        }
      }, [token, setToken]);

      
      

    const value = {
        useAuth,
        addUser,
        addBoard,
        getToken,
        addToken,
        getAllBoards,
        token,
        boardsColRef,
        tokensColRef
    };
    
    return (
            <DBContext.Provider value={value}>
                { children }
            </DBContext.Provider>
    );
}
 
