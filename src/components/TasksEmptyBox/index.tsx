import clipBoardIlustration from "../../assets/clipboard.svg";

import styles from "./styles.module.css";

export function TasksEmptyBox() {
    return (
        <div className={styles.container}>
            <img src={clipBoardIlustration} alt="Notepad Ilustration" />

            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    );
}