import styles from './App.module.css'

import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { Info } from './components/Info'
import { EmptyBox } from './components/EmptyBox'
import { Task } from './components/Task'

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.Wrapper}>
        <AddTask />

        <Info />
        <EmptyBox />
        {/* <Task /> */}
        

      </div>
      
    </div>
  )
}