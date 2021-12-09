import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase'
import { query, collection, onSnapshot, doc, data } from 'firebase/firestore'



function AllBoardsPage() {
  const [loadedBoards, setLoadedBoards] = useState([]);
  const [loading, setIsLoading] = useState();

  const boards = query(collection(db, "boards"));  

  function getBoards() {
    setIsLoading(true)
    
    onSnapshot(boards, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());

      });
        setLoadedBoards(items);
        setIsLoading(false);
      
    });
  }

  useEffect(() => {
    getBoards();
  }, []);
  

console.log(loadedBoards);

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
        <h1 className='mt-5'>Uploaded Boards</h1>
        {loadedBoards.map((board) => (
          <div key={uuidv4()}>
            <h2>{board.title}</h2>
            <img src={board.imageURL} alt={board.title}></img>
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default AllBoardsPage;