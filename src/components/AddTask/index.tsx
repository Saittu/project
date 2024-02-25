import styles from './AddTask.module.css'

import { FiPlusCircle } from "react-icons/fi";

export function AddTask() {
    return (
        <div className={styles.ContentAddTask}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>

            <button>Criar <FiPlusCircle /></button>
        </div>
    )
}