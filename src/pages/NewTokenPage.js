
import React from "react";
import AddTokenForm from '../component/token/AddTokenForm';
import { useDB } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext";

function NewTokenPage() {
    const { addToken } = useDB();
    const { setLoading, currentUser } = useAuth();
    
    function addTokenHandler(newToken) {
        setLoading(true);
        const board = addToken(newToken)
        .then(() => {
            setLoading(false);
        }, []);
    }
    
return (
    <section>
        <h1 className="display-1 text-center">Game Tokens</h1>
        <h4 className="text-center"> {currentUser.email} </h4>
            <AddTokenForm onAddToken={addTokenHandler} />
    </section>
);
}

export default NewTokenPage;
