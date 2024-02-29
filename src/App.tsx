import styles from './App.module.css'


import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { Info } from './components/Info'

import { Task } from './components/Task'
import { ChangeEvent, FormEvent, useState } from 'react';

import toast from "react-hot-toast"

interface Task {
  id: number;
  content: string;
  complete: boolean;
}


export function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("")

  const notify = (content: string) => toast.success(content)

  const handleSetNewTodo = (e: ChangeEvent<HTMLInputElement>) =>{
    setNewTaskText(e.target.value);
    e.target.setCustomValidity("");
  }

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();

    const oldTasks = [...tasks];

    const newTask = {
      id: oldTasks?.length + 1,
      content: newTaskText,
      complete: false,
    };

    setTasks([...oldTasks, newTask])
    setNewTaskText("")
    notify("Tarefa criada com sucesso!")
  }

  const deleteTask = (id: number) => {
    setTasks((state) => state.filter((item) => item.id !== id))
    notify("Tarefa deletada 🗑️")
  }

  return (
    <div>
      <Header/>

      <div className={styles.Wrapper}>
        <AddTask />

        <div className={styles.ContainerInfo}>
            <div className={styles.ContainerAllTasks}>
                <p>Tarefas Criadas</p>
                <span>0</span>
            </div>
            <div className={styles.ContainerTaskCompleted}>
                <p>Concluídas</p>
                <span>0</span>
            </div>
        </div>

        
        <Task/>
        <Task/>
        <Task/>
        <Task/>

      </div>
      
    </div>
  )
}