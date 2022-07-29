import { useSelector } from 'react-redux';

import Anecdote from './Anecdote';

function Anecdotes() {
  function selector(state) {
    return state;
  }
  const anecdotes = useSelector(selector);

  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
}

export default Anecdotes;
