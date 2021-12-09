import React from "react";
import AddTokenForm from '../component/token/AddTokenForm';
import { useDB } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext";
import AllTokensPage from "./AllTokensPage";

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
    <section>
        <br />
        <h1 className="display-1 text-center">Game Tokens</h1>
        <h4 className="text-center"> {currentUser.email} </h4>
            <AddTokenForm onAddToken={addTokenHandler} />
    </section>
    <section>
        <AllTokensPage />
    </section>
    </>
);
} export default NewTokenPage;
