import { useState, useEffect } from 'react';
import { db } from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import { query, collection, onSnapshot, doc, data } from 'firebase/firestore'
import './token-card.css';
import { useAuth } from '../context/AuthContext';
import { useDB } from "../context/DatabaseContext";



function AllTokensPage() {
  const {currentUser} = useAuth();
  const { setUserToken, setToken } = useDB();
  const [loadedTokens, setLoadedTokens] = useState([]);
  const [loading, setIsLoading] = useState();

  const boards = query(collection(db, "token"));  

  function getTokens() {
    setIsLoading(true)
    
    onSnapshot(boards, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());

      });
        setLoadedTokens(items);
        setIsLoading(false);
      
    })
  }

  useEffect(() => {
    getTokens();
  }, []);
  
function handleSelect(e, token, uid) {
  e.preventDefault();
  const userToken = setUserToken(token, uid)
  .then(() => {
  }, []);
  setToken(userToken);
}


if (loading) {
  return (
    <section>
      <p>Loading...</p>
    </section>
  );
}

  return (
      <div>
        {!loading ? (
        <div width='100%'>
        <div width='75' className='m-2 token__card-wrapper' >  
          {loadedTokens.map ((token) => (
            <div key={uuidv4()} className='token__card mb-3'>
            < img key={uuidv4()} 
            src={token.imageURL} width='50'  
            alt={token.title}
            onClick={(token,currentUser,(e) => {
              handleSelect(e, token, currentUser.uid)
            })}></img><br/></div>))}</div></div>
        ) : <div></div>}
        </div>
  );
}
export default AllTokensPage;