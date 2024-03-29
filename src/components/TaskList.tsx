// TaskList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteTask, toggleTaskDone, selectTasks } from '../redux/tasks/taskSlice';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => selectTasks(state));
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId: number) => {
    dispatch(toggleTaskDone(taskId));
  };

  return (
    <div className="task-list mt-4">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 rounded-lg p-3 mb-2">
            <span className={task.done ? 'line-through' : ''}>{task.text}</span>
            <div className="flex items-center">
              <button
                onClick={() => handleToggleTask(task.id)}
                className={`px-3 py-1 rounded-lg focus:outline-none ${
                  task.done ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {task.done ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="px-3 py-1 ml-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring focus:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
