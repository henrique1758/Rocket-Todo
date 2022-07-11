import logoImg from "../../assets/logo.svg";

import styles from "./styles.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logoImg} alt="Logo" />
            </div>
        </header>
    );
}