import { useDispatch } from 'react-redux';

import { createAnecdote } from '../reducers/anecdoteReducer';

function NewAnecdote() {
  const dispatch = useDispatch();

  function addAnecdote(event) {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    /* eslint-disable-next-line */
    event.target.anecdote.value = '';
    dispatch(createAnecdote(anecdote));
  }

  return (
    <div>
      <h2>Create a new ancedote</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input type="text" name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
}

export default NewAnecdote;
