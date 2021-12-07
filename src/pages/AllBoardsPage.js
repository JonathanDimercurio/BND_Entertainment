import { useState, useEffect } from 'react';
import { useDB } from "../context/DatabaseContext";
import BoardList from '../component/board/BoardList';
import { db } from '../firebase';


  
function AllBoardsPage() {


  return (
    <section>
        <div>
      <h1>All The Boards!</h1>
      <BoardList boards={maps} />
          </div>
    </section>
  );
}

export default AllBoardsPage;
