import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteTask, selectTasks } from '../redux/tasks/taskSlice';

const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => selectTasks(state)); // Use selectTasks selector
    const dispatch = useDispatch();

    const handleDeleteTask = (taskId: number) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <div className="task-list">
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
