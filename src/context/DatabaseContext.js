
// Depenedant: firestore.js, getFirestore = db
// Depenedant: AuthProvider, User must be signed in *

import React, { useContext } from "react";
import {   doc,
        addDoc,
        setDoc,
    collection } from "firebase/firestore";
import { db } from '../firebase';
import { useAuth } from './AuthContext';
    
const DBContext = React.createContext();

export function useDB() {
    return useContext(DBContext);
}

export function DBProvider({ children }) {
    const { currentUser } = useAuth();

    function addUser() {
        const userRef = doc(db, 'users/userRef');
        const newUserData = {
            [currentUser.email]: currentUser.uid,
        }
        
        return setDoc(userRef, newUserData, { merge: true });
    }
    
    function addBoard(newBoard) {
        return addDoc(collection(db, "boards"), newBoard);
    }
    
    function addToken(newToken) {
        return addDoc(collection(db, "tokens"), newToken);
    }


    const value = {
        addUser,
        addBoard,
        addToken
    };
    
    return (
            <DBContext.Provider value={value}>
                { children }
            </DBContext.Provider>
    );
}



//const uploadTask = uploadBytesResumable(storageRef, file, metadata);
//
//// Get task progress, including the number of bytes uploaded and the
//// total number of bytes to be uploaded
//uploadTask.on('state_changed',
//(snapshot) => {
//  const progress = (snapshot.bytesTransferred
//                    / snapshot.totalBytes) * 100;
//  //  console.log('Upload is ' + progress + '% done');
//    switch (snapshot.state) {
//        case 'paused':
//  // console.log('Upload is paused');
//          break;
//        case 'running':
//  // console.log('Upload is running');
//          break;
//        }
//  }, (error) => {
//    switch (error.code) {
//        case 'storage/quota-exceeded'
//          break;
//
//        case 'storage/unauthenticated'
//          break;
//
//        case 'storage/retry-limit-exceeded'
//          break;
//
//        case 'storage/invalid-checksum'
//          break;
//
//        case 'storage/canceled':
//          break;
//
//        case 'storage/invalid-url'
//          break;
//
//        case 'storage/no-default-bucket'
//          break;
//
//        case 'storage/server-file-wrong-size'
//          break;
//
//        // User doesn't have permission to access the object
//        case 'storage/unauthorized':
//          break;
//
//        // Unknown error occurred, inspect error.serverResponse
//        case 'storage/unknown':
//          break;
//    }
//  }, () => {
//        // Upload completed successfully, now we can get the download URL
//      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//          // TODO: hook into players wallet
//          // THIS IS THE SOLUTION TO BROADCAST MAPS
//      });
//  }
//);
//
//
//
//// uploading image information
//// const storageRef = ref(storage, 'images/' + file.name);
