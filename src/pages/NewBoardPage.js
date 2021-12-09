import React from "react";
import AddBoardForm from '../component/board/AddBoardForm';
import { useDB } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext";
import AllBoardsPage from "./AllBoardsPage";

function NewBoardPage() {
    const { addBoard } = useDB();
    const { setLoading, currentUser } = useAuth();
    
    function addBoardHandler(newBoard) {
        setLoading(true);
        const board = addBoard(newBoard)
        .then(() => {
            setLoading(false);
        }, []);
    }
    
return (
    <>
    <section>
        <br />
        <h1 className="display-1 text-center">Game Boards</h1>
        <h4 className="text-center"> {currentUser.email} </h4>
            <AddBoardForm onAddBoard={addBoardHandler} />
    </section>
    <section>
        <AllBoardsPage />
    </section>
    </>
);
}

export default NewBoardPage;