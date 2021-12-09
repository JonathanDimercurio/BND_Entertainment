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

    <div className='actionable'>
    <h6 className="text-center"> {currentUser.email} </h6>
        <div className='shadow justify-content-center card'>
        <div className='card-body'>
        <h1 className="card-title">Game Boards</h1>

        <div className='w-100 mt-5'>
            <AddBoardForm onAddBoard={addBoardHandler} />
        </div></div></div>
        <br />
        <br />
        <div width='100%' float='left'></div>
            <AllBoardsPage />
        </div>
</>
);
}

export default NewBoardPage;
