import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasks/taskSlice'; // Import addTask action from taskSlice

const TaskInput: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex items-center space-x-2 mt-4">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        onKeyPress={handleKeyPress} // Call handleKeyPress on Enter key press
        placeholder="Add a task..."
        className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 flex-grow"
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
