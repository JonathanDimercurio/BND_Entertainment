import { useState, useCallback, useEffect } from 'react';
import { Container } from './Container';
import { CustomDragLayer } from '../token/CustomDragLayer';
import { doc, getDoc } from "firebase/firestore";

export const Gameboard = () => {

    const [userBoard, setUserBoard] = useState();
    const [userToken, setUserToken] = useState();

    async function getGameAssets() {
        const userBoardRef = doc(db, "userBoard", currentUser.uid);
        const userTokenRef = doc(db, "userToken", currentUser.uid);

        const boardDocSnap = await getDoc(userBoardRef);
        const tokenDocSnap = await getDoc(userTokenRef);
        
        if (boardDocSnap.exists()) {
        console.log("Document data:", boardDocSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }

        if (tokenDocSnap.exists()) {
            console.log("Document data:", tokenDocSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }

        useEffect(() => {
            getGameAssets();
        },)
    

    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(true);
    
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);
    
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);

    return ( 
            <div backgroundImage=''>
			    {/* <Container snapToGrid={snapToGridAfterDrop}/> */}
			    {/* <CustomDragLayer snapToGrid={snapToGridWhileDragging}/> */}
		    </div>
            );
};
