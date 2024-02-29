import styles from "./TaskList.module.css"

import { Task } from "../Task"
import { BsClipboardMinus } from "react-icons/bs";


interface Task {
    id: number;
    content: string;
    complete: boolean;
}

interface TaskProps {
    task: Task;
    onDeleteTask: (id: number) => void;
}

export function TaskList = ({
    task,
    onDeleteTask,
}: TaskProps)  => {
    
}
