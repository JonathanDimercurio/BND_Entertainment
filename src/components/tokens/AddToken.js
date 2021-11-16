/*  Author: Date:
 *  Description:
 */
import NewTokenForm from './NewTokenForm';

function AddTokenPage() {
  function addTokenHandler(TokenData) {
    fetch(
      'https://bnd-entertainment-default-rtdb.firebaseio.com/tokens.json',
      {
        method: 'POST',
        body: JSON.stringify(TokenData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  return (
    <section>
      <h1>Add a Token</h1>
      <NewTokenForm onAddToken={addTokenHandler} />
    </section>
  );
}

export default AddTokenPage;
