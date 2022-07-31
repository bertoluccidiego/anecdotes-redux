import { useDispatch } from 'react-redux';

import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

function Anecdote({ anecdote }) {
  const dispatch = useDispatch();

  function voteAnecdoteOf() {
    dispatch(voteAnecdote(anecdote));
    dispatch(setNotification(`Voted '${anecdote.content}'`, 5));
  }

  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button type="button" onClick={() => voteAnecdoteOf(anecdote.id)}>
          vote
        </button>
      </div>
    </div>
  );
}

export default Anecdote;
