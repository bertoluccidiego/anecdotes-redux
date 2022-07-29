const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

function getId() {
  return (100000 * Math.random()).toFixed(0);
}

function asObject(anecdote) {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
}

const initialState = anecdotesAtStart.map(asObject);

/* eslint-disable-next-line */
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'VOTE_ANECDOTE': {
      const anecdoteToVote = state.find(
        (anecdote) => anecdote.id === action.data.id
      );
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id === votedAnecdote.id ? votedAnecdote : anecdote
      );
    }
    case 'NEW_ANECDOTE':
      return state.concat(asObject(action.data.anecdote));
    default:
      return state;
  }
}

export function createAnecdote(anecdote) {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      anecdote,
    },
  };
}

export function voteAnecdote(id) {
  return {
    type: 'VOTE_ANECDOTE',
    data: {
      id,
    },
  };
}

export default reducer;
