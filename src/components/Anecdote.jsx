import { useDispatch } from 'react-redux';

import { voteAnecdote } from '../reducers/anecdoteReducer';

function Anecdote({ anecdote }) {
  const dispatch = useDispatch();

  function voteAnecdoteOf(id) {
    dispatch(voteAnecdote(id));
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
