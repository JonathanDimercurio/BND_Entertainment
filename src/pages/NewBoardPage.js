import React from "react";
import AddBoardForm from '../component/board/AddBoardForm';
import { useDB } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext";

function NewBoardPage() {
    const { addBoard } = useDB();
    const { setLoading } = useAuth();
    
    function addBoardHandler(newBoard) {
        setLoading(true);
        
        console.log(newBoard);
            
        const board = addBoard(newBoard)
        .then(() => {
            console.log(newBoard + ' uploaded');
            setLoading(false);
        }, []);
    }
    
return (
    <section>
        <h1 className="display-1 text-center">Game Boards</h1>
            <AddBoardForm onAddBoard={addBoardHandler} />
    </section>
);
}

export default NewBoardPage;
