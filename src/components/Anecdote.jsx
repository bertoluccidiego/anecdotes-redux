import { useDispatch } from 'react-redux';

import { voteAnecdote } from '../reducers/anecdoteReducer';
import {
  setNotification,
  resetNotification,
} from '../reducers/notificationReducer';

function Anecdote({ anecdote }) {
  const dispatch = useDispatch();

  function voteAnecdoteOf(id) {
    dispatch(voteAnecdote(id));
    dispatch(setNotification(`Voted '${anecdote.content}'`));
    setTimeout(() => dispatch(resetNotification()), 5000);
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
