// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { db } from '../firebase';



export function addUser(newUser) {
  try {
    const docRef = await addDoc(collection(db, "users", ), {
      useID: uid,
      useEmail:
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}









const storage = getStorage();
const storageRef = ref(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);


// Get task progress, including the number of bytes uploaded and the
// total number of bytes to be uploaded
uploadTask.on('state_changed',
(snapshot) => {
  const progress = (snapshot.bytesTransferred
                    / snapshot.totalBytes) * 100;
  //  console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
        case 'paused':
  // console.log('Upload is paused');
          break;
        case 'running':
  // console.log('Upload is running');
          break;
        }
  }, (error) => {
    switch (error.code) {
        case 'storage/quota-exceeded'
          break;
        
        case 'storage/unauthenticated'
          break;
        
        case 'storage/retry-limit-exceeded'
          break;
        
        case 'storage/invalid-checksum'
          break;
        
        case 'storage/canceled':
          break;
        
        case 'storage/invalid-url'
          break;
        
        case 'storage/no-default-bucket'
          break;
        
        case 'storage/server-file-wrong-size'
          break;
        
        // User doesn't have permission to access the object
        case 'storage/unauthorized':
          break;
        
        // Unknown error occurred, inspect error.serverResponse
        case 'storage/unknown':
          break;
    }
  }, () => {
        // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // TODO: hook into players wallet
          // THIS IS THE SOLUTION TO BROADCAST MAPS
      });
  }
);
