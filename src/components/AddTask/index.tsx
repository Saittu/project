import { FormEvent, useState } from 'react';
import styles from './AddTask.module.css'

import { FiPlusCircle } from "react-icons/fi";

export function AddTask() {

    const NewTask = useState('')


    return (
        <form className={styles.ContentAddTask}>
            <input id='send' type="text" placeholder='Adicione uma nova tarefa'/>

            <button type='submit'>Criar <FiPlusCircle /></button>
        </form>
    )
}