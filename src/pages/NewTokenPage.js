import React from "react";
import AddTokenForm from '../component/token/AddTokenForm';
import { useDB } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext";
import AllTokensPage from "./AllTokensPage";
import { Container } from "../component/board/Container";
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

return (
    <>
    <div class='actionable'>
    <h6 className="text-center"> {currentUser.email} </h6>
        <div class='shadow justify-content-center card'>
        <div class='card-body'>
        <h1 className="card-title">Game Tokens</h1>
        <div class='w-100 mt-5'>
            <AddTokenForm onAddToken={addTokenHandler} />
        </div></div></div>


    </div>
    <Container key={uuidv4()} props={<AllTokensPage />}></Container>
    </>
);
} export default NewTokenPage;
