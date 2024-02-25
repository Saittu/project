import styles from "./Info.module.css"

export function Info() {
    return(
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
    )
}