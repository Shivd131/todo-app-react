// App.tsx
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">React To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
