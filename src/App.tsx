import './App.css'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'

function App() {

  return (
    <>
      <h1>React To-Do App</h1>
      <TaskInput />
      <TaskList />
    </>
  )
}

export default App
