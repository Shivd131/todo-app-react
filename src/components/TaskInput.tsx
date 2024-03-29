import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasks/taskSlice';
import { motion } from 'framer-motion';

const TaskInput: React.FC = () => {
    const [task, setTask] = useState<string>('');
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    //dispatches the entered data to the store
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
        <motion.div
            className="flex items-center space-x-2 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
        >
            <input
                type="text"
                value={task}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Add a task..."
                className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 flex-grow"
            />
            <motion.button
                onClick={handleAddTask}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Add Task
            </motion.button>
        </motion.div>
    );
};

export default TaskInput;
