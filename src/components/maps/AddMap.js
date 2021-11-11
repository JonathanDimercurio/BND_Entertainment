/*  Author: Jonathan, Christopher
 *  Date:
 *  Description:
 */
import { useState, useEffect } from 'react';
import NewMapForm from './NewMapForm';

function AddMapPage() {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submission, setSubmission] = useState();

    const isWaiting = status === 'waiting';
    const isSuccess = status === 'success';
    const isError = status === 'error';

    useEffect(() => {
        if (!submitted) { return }
        setStatus('waiting');
        //post to server
        fetch(
            'https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json',
            {
                method: 'POST',
                body: JSON.stringify(submission),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        //process
        .then(response => { return response.json() })
        .then(result => {
            //TODO: should this check response code?
            //NOTE: changing state in diff thens causes errors
            if (result.success) {
                setStatus('success');
            } else {
                //Handle Error
                setStatus('error');
                setError(result.message);
            }
        });
    }, [submission])

    function addMapHandler(mapData) {
        //hide form, trigger update effect
        setSubmission(mapData);
        setSubmitted(true);
    }
    /*
     *TODO: Should submission disappear during loading or only after
     *      success is confirmed?
     */
    //Show form if submitted is false
    //Show waiting if state is waiting
    //show error an error occurred
    //show success if state is success
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
