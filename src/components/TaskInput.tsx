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

    return (
        <div className="task-input">
            <input type="text" value={task} onChange={handleChange} placeholder="Add a task..." />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
