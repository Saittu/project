import styles from './Task.module.css'

import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

interface Task {
    id: number;
    content: string;
    complete: boolean;
}

interface TaskProps {
    task: Task;
    onDeleteTask: (id: number) => void;
}

export function Task({ task, onDeleteTask}: TaskProps) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked)
    }

    const handleDeleteTask = () => onDeleteTask(task.id)

    return (
        <div className={styles.ContainerTask}>
            <label className={styles.Check}>
                <input title="Completar Task"type="checkbox" onChange={handleCheckBoxChange}/>
                <span className={styles.CheckMark}></span>
            </label>

                <p className={isChecked ? styles.CheckedText : styles.TextTask}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            
            <button type='submit' onClick={handleDeleteTask}>
                <FaRegTrashAlt />
            </button>
        </div>
    )
}