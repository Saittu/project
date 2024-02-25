import styles from "./Header.module.css"

export function Header() {
    return(
        <div className={styles.bar}>
            <img src="../../../public/rocket.svg" alt="Logo Image" />
            <h1>to<span>do</span></h1>
        </div>
    )
}