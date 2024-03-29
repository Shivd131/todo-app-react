import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="container mx-auto px-4 py-8 z-10 ">
        <h1 className="text-3xl font-bold mb-4 text-white">React To-Do App</h1>
        <AddTask />
        <TaskList />
    </div>
  );
}

export default App;
