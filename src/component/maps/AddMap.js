/*  Author: Jonathan, Christopher
 *  Date:
 *  Description:
 */
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import NewMapForm from './NewMapForm';

function AddMapPage() {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submission, setSubmission] = useState();

        
    return (
        <div>
            {!submitted ? (
                <section>
                    <h1>Add a Map</h1>
                    <NewMapForm onAddMap={addMapHandler} />
                </section>
            ) : null}
            {isWaiting ? (
                <section>
                    <p>Loading...</p>
                </section>
            ) : null }
            {isError ? (
                <section>
                    <p>There was an Error!</p>
                    <pre>{error}</pre>
                </section>
            ) : null }
            {isSuccess ? (
                <section>
                    <p>Submitted!</p>
                </section>
            ) : null }
        </div>
    );
}

export default AddMapPage;
