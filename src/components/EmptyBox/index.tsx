import styles from './EmptyBox.module.css'

import { BsClipboardMinus } from "react-icons/bs";

export function EmptyBox() {
    return (
        <div className={styles.BoxEmpty}>
            <BsClipboardMinus/>
            <p className={styles.FirstParagraphEmpty}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}