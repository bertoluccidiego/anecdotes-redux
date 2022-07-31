import NewAnecdote from './components/NewAnecdote';
import Anecdotes from './components/Anecdotes';
import Notification from './components/Notification';

function App() {
  return (
    <div>
      <Notification />
      <Anecdotes />
      <NewAnecdote />
    </div>
  );
}

export default App;
