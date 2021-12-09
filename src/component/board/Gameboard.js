import { useState, useCallback, useEffect } from 'react';
import { Container } from './Container';
import { CustomDragLayer } from '../token/CustomDragLayer';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { useAuth } from '../../context/AuthContext';

export const Gameboard = () => {
    const {currentUser} = useAuth();
    const [userToken, setUserToken] = useState();
    const [userBoard, setUserBoard] = useState();
    

    async function getGameAssets() {
        const userBoardRef = doc(db, "userBoard", currentUser.uid);
        const userTokenRef = doc(db, "userToken", currentUser.uid);

        const boardDocSnap = await getDoc(userBoardRef);
        const tokenDocSnap = await getDoc(userTokenRef);
        
        if (boardDocSnap.exists()) {
        setUserBoard(boardDocSnap.data())
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }

        if (tokenDocSnap.exists()) {
            setUserToken(tokenDocSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }

        useEffect(() => {
            getGameAssets();
        }, [])
    
        history.pushState(null, document.title, location.href);
        window.addEventListener('popstate', function (event)
            {       
                history.pushState(null, document.title, location.href);
        });



    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(true);
    
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);
    
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);

    return ( 
            <>
                { userToken && <Container snapToGrid={snapToGridAfterDrop, userToken}/> }
			    { userToken && <CustomDragLayer snapToGrid={snapToGridWhileDragging,userToken}/> }
                { userBoard && <img src={userBoard.imageURL} 
                position='absolute' z-index='-100' top='0'
                left='0' overflow='scroll' ></img>}
            </>


            );
};
