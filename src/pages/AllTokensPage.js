import { useState, useEffect } from 'react';
import { db } from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import { query, collection, onSnapshot, doc, data } from 'firebase/firestore'



function AllTokensPage() {
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
      
    });
  }

  useEffect(() => {
    getTokens();
  }, []);
  

console.log(loadedTokens);

if (loading) {
  return (
    <section>
      <p>Loading...</p>
    </section>
  );
}

  return (
    <section>
      <div>
        <h1 className='mt-5'>Uploaded Tokens</h1>
        {loadedTokens.map((token) => (
          <div key={uuidv4()}>
            <h2>{token.title}</h2>
            <img src={token.imageURL} alt={token.title}></img>
          </div>
        ))}
        
      </div>
    </section>
  );
}
export default AllTokensPage;