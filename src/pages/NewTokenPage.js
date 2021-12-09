import React, {useState, useCallback} from "react";
import AddTokenForm from '../component/token/AddTokenForm';
import { useDB } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext";
import AllTokensPage from "./AllTokensPage";
import { Container } from "../component/board/Container";
import { CustomDragLayer } from '../component/token/CustomDragLayer';
import { v4 as uuidv4 } from 'uuid';


function NewTokenPage() {
    const { addToken, setToken } = useDB();
    const { setLoading, currentUser } = useAuth();

    function addTokenHandler(newToken) {
        setLoading(true);
        const token = addToken(newToken)
        .then(() => {
            setLoading(false);
        }, []);
        setToken(token);
    }

    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(true);
    
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);
    
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);

return (
    <>
    <div className='actionable'>
    <h6 className="text-center"> {currentUser.email} </h6>
        <div className='shadow justify-content-center card'>
        <div className='card-body'>
        <h1 className="card-title">Game Tokens</h1>
        <div className='w-100 mt-5'>
            <AddTokenForm onAddToken={addTokenHandler} />
        </div></div></div>
        <br />
        <br />
        <div width='100%' float='left'>
            <AllTokensPage />
        </div>
    </div>
</>
);
} export default NewTokenPage;
