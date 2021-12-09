import { Card, Button, Modal } from "react-bootstrap";
import BoardCard from "./BoardCard"
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase'
import { query, collection, onSnapshot, doc, data } from 'firebase/firestore'
import './token-card.css';
import { useAuth } from '../context/AuthContext';
import { useDB } from "../context/DatabaseContext";


export var setboards =[];

function AllBoardsPage() {
  const {currentUser} = useAuth();
  const { setUserBoard, setBoard } = useDB();
  const [loadedBoards, setLoadedBoards] = useState([]);
  const [loading, setIsLoading] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

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
  

  function handleSelect(e, board, uid) {
    e.preventDefault();
    const userBoard = setUserBoard(board, uid)
    .then(() => {
    }, []);
    setBoard(userBoard);
  }

if (loading) {
  return (
    <section>
      <p>Loading...</p>
    </section>
  );
}

  
  
    return (
      <>
        {!loading ? (
        <div width='100%'>
        <div width='75' className='m-2 token__card-wrapper' >  
          {loadedBoards.map ((board) => (
            <div key={uuidv4()} className='token__card mb-3'>
            < img key={uuidv4()} 
            src={board.imageURL} width='50'  
            alt={board.title}
            onClick={(board,currentUser,(e) => {
              handleSelect(e, board, currentUser.uid)
            })}></img><br/></div>))}</div></div>
        ) : <div></div>}
      </>
    );
  }
export default AllBoardsPage;
