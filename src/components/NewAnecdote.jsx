import { useDispatch } from 'react-redux';

import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

function NewAnecdote() {
  const dispatch = useDispatch();

  async function addAnecdote(event) {
    event.preventDefault();

    const content = event.target.anecdote.value;
    /* eslint-disable-next-line */
    event.target.anecdote.value = '';
    dispatch(createAnecdote(content));
    dispatch(setNotification(`Added '${content}'`, 5));
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
