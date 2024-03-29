import React, { useState } from 'react';
import TaskInput from './TaskInput';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const AddTask: React.FC = () => {
    const [showTaskInput, setShowTaskInput] = useState(false);

    const handleToggleTaskInput = () => {
        setShowTaskInput((prevState) => !prevState);
    };

    return (
        <div>
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={handleToggleTaskInput}
                className=" bg-black text-white flex items-center space-x-2"
            >
                {showTaskInput ? 'Hide Task Input' : 'Add Task'}

            </HoverBorderGradient>

            {showTaskInput && <TaskInput />}
        </div>
    );
};

export default AddTask;
