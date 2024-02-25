import { useState } from 'react';
import styles from './Task.module.css'

import { FaRegTrashAlt } from "react-icons/fa";

export function Task() {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className={styles.ContainerTask}>
            <label className={styles.Check}>
                <input type="checkbox" name="" id="" onChange={handleCheckBoxChange}/>
                <span className={styles.CheckMark}></span>
                <p className={isChecked ? styles.CheckedText : styles.TextTask}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </label>

            
            <button>
                <FaRegTrashAlt />
            </button>
        </div>
    )
}