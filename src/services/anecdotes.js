import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(content) {
  const newAnecdote = {
    content,
    votes: 0,
  };
  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
}

async function update(anecdote) {
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote);
  return response.data;
}

const exportObj = {
  getAll,
  create,
  update,
};

export default exportObj;
