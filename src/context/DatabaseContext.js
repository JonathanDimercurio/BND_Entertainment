
// Depenedant: firestore.js, getFirestore = db
// Depenedant: AuthProvider, User must be signed in *

import React, { useContext, useState } from "react";
import {   doc,
        addDoc,
        setDoc,
        gertDocs,
    collection } from "firebase/firestore";

import { db, fbstorage } from '../firebase';
import { useAuth } from './AuthContext';
    
const DBContext = React.createContext();

export function useDB() {
    return useContext(DBContext);
}

export function DBProvider({ children }) {
//    const allInputs = {imgUrl: ''}
//    const [imageAsFile, setImageAsFile] = useState('')
//    const [imageAsUrl, setImageAsUrl] = useState(allImputs)
    
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
        return getDocs(collection(db, "tokens"));
    }
    
    function addToken(newToken) {
        const userRef = doc(db, 'users/' + currentUser.uid.slice(1,10));
        return setDoc(userRef, newToken, { merge: true });
    }

//      Image upload to firebase storage logic ~~~
//
//    function convertImageLocalOrRemoteImageToBinary() {
//        console.log(imageAsFile);
//
//        const handleImageAsFile = (e) => {
//            const image = e.target.files[0]
//              setImageAsFile(imageFile => (image)) };
//
//        const storageRef = ref(fbstorage, '')
//
//        const handleFireBaseUpload = e => {
//            e.preventDefault()
//            console.log('start of upload')
//            }
//    }
    
    function getAllBoards( ) {}

    const value = {
        useAuth,
        addUser,
        addBoard,
        addToken,
        getAllBoards
    };
    
    return (
            <DBContext.Provider value={value}>
                { children }
            </DBContext.Provider>
    );
}
 
