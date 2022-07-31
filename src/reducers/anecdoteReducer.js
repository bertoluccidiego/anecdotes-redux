import { createSlice } from '@reduxjs/toolkit';

import anecdotesService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    updateAnecdote(state, action) {
      const anecdote = action.payload;
      return state.map((a) => (a.id === anecdote.id ? anecdote : a));
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { appendAnecdote, updateAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export function initializeAnecdotes() {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
}

export function createAnecdote(content) {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.create(content);
    dispatch(appendAnecdote(newAnecdote));
  };
}

export function voteAnecdote(anecdote) {
  return async (dispatch) => {
    const votedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    await anecdotesService.update(votedAnecdote);
    dispatch(updateAnecdote(votedAnecdote));
  };
}

export default anecdoteSlice.reducer;
