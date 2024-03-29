import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteTask, toggleTaskDone, selectTasks } from '../redux/tasks/taskSlice';
import { motion } from 'framer-motion';

const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => selectTasks(state));
    const dispatch = useDispatch();

    //dispatches the id of the deleted task and deleteTask function is called, filtering out this task.
    const handleDeleteTask = (taskId: number) => {
        dispatch(deleteTask(taskId));
    };

    //on clicking done, the id is sent to the store and thus the value for that particular task is marked true for done.
    const handleToggleTask = (taskId: number) => {
        dispatch(toggleTaskDone(taskId));
    };

    return (
        <div className="task-list mt-4">
            <ul>
                {tasks.map((task) => (
                    <motion.li
                        key={task.id}
                        className="flex items-center justify-between bg-[#1f1d1d] text-white rounded-lg p-3 mb-2 border border-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <span className={task.done ? 'line-through' : ''}>
                            {task.text}</span>
                        <div className="flex items-center">

                            <motion.button
                                onClick={() => handleToggleTask(task.id)}
                                className={`px-3 py-1 rounded-lg focus:outline-none ${task.done ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {task.done ? 'Undo' : 'Done'}
                            </motion.button>
                            <motion.button
                                onClick={() => handleDeleteTask(task.id)}
                                className="px-3 py-1 ml-2 bg-[#1f1d1d] text-white rounded-lg shadow hover:bg-red-900 border-2 border-red-900 focus:outline-none focus:ring focus:bg-red-600"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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