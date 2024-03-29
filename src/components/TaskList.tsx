import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteTask, toggleTaskDone, selectTasks } from '../redux/tasks/taskSlice';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

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
          <motion.li // Wrap each task item with a motion.li
            key={task.id}
            className="flex items-center justify-between bg-gray-100 rounded-lg p-3 mb-2"
            initial={{ opacity: 0, x: -20 }} // Initial animation values
            animate={{ opacity: 1, x: 0 }} // Animation when component mounts
            transition={{ duration: 0.3, delay: 0.1 }} // Animation transition settings
          >
            <span className={task.done ? 'line-through' : ''}>{task.text}</span>
            <div className="flex items-center">
              <motion.button
                onClick={() => handleToggleTask(task.id)}
                className={`px-3 py-1 rounded-lg focus:outline-none ${
                  task.done ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}
                whileHover={{ scale: 1.05 }} // Animation on hover
                whileTap={{ scale: 0.95 }} // Animation on tap
              >
                {task.done ? 'Undo' : 'Done'}
              </motion.button>
              <motion.button
                onClick={() => handleDeleteTask(task.id)}
                className="px-3 py-1 ml-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring focus:bg-red-600"
                whileHover={{ scale: 1.05 }} // Animation on hover
                whileTap={{ scale: 0.95 }} // Animation on tap
              >
                Delete
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;