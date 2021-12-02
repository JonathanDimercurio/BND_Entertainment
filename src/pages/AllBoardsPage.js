import { useState, useEffect } from 'react';
import { useDB } from "../context/DatabaseContext";
import BoardList from '../component/board/BoardList';

function AllBoardsPage() {
    const { getAllBoards } = useDB();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBoards, setLoadedBoards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://dndboard-40312.appspot.com/boards.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const boards = [];

        for (const key in data) {
          const board = {
            id: key,
            ...data[key]
          };

          boards.push(board);
        }

        setIsLoading(false);
        setLoadedBoards(board);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All The Boards!</h1>
      <BoardList boards={loadedBoards} />
    </section>
  );
}

export default AllBoardsPage;
