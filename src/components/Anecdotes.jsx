import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Anecdote from './Anecdote';
import Filter from './Filter';

import { initializeAnecdotes } from '../reducers/anecdoteReducer';

function Anecdotes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  function anecdotesSelector(state) {
    return state.anecdotes;
  }

  function filterSelector(state) {
    return state.filter;
  }

  const anecdotes = useSelector(anecdotesSelector);
  const filter = useSelector(filterSelector);

  const filteredAnecdotes = anecdotes.filter((a) =>
    a.content.toLowerCase().includes(filter.toLowerCase())
  );
  const sortedFilteredAnecdotes = filteredAnecdotes.sort(
    (a, b) => b.votes - a.votes
  );

  return (
    <div>
      <h1>Anecdotes</h1>
      <Filter />
      {sortedFilteredAnecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
}

export default Anecdotes;
