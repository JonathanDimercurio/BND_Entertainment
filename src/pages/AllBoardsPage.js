import { Card } from "react-bootstrap";
import BoardCard from "./BoardCard"
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase'
import { query, collection, onSnapshot, doc, data } from 'firebase/firestore'
import './AllBoardsPage.module.css'

export var setboards =[];

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
        setboards = loadedBoards;
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
    <>
    <section>
      
        <h1 className='mt-5'>Uploaded Boards</h1>
        
      
        {loadedBoards.map((props) => (
          
          <Card className="map-container"
                     props={props.title}
                     key={uuidv4()}>
            <img className='img-fluid'
                 src={props.imageURL} 
                 alt={props.title}>
            </img>
          </Card>
          
        ))}
        
      
      </section>
    </> 
  );
}

export default AllBoardsPage;
