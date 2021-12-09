import { memo, useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { useAuth } from '../../context/AuthContext';



const styles = {
    border: '1px dashed gray',
    borderRadius: '100%',
    padding: '0.5rem 1rem',
    cursor: 'move',

};



export const Token = memo(function Token({ title, yellow, preview }) {
    const [userToken, setUserToken] = useState();
    const {currentUser} = useAuth();

    async function getGameAssets() {
        const userTokenRef = doc(db, "userToken", currentUser.uid);
        const tokenDocSnap = await getDoc(userTokenRef);

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




    return (<div 
                 style={{ ...styles }}
                 role={preview ? 'tokenPreview' : 'Token'}>

			{userToken ? <img src={userToken.imageURL} className="rounded-circle"
                 alt="Cinque Terre" 
                object-fit='cover' 
                width='50' ></img> :
                
                <div></div>
                }
		</div>);
});
