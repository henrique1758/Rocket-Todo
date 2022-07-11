import { Check, Trash } from "phosphor-react";

import styles from "./styles.module.css";

interface TaskProps {
    content: string;
    isComplete: boolean;
    setIsComplete: (isComplete: boolean) => void;
    onDeleteTask: () => void;
}

export function Task({ content, setIsComplete, isComplete, onDeleteTask }: TaskProps) {
    return (
        <li className={styles.task}>
            <label className={styles.checkBoxContainer}>
                <input 
                    type="checkbox"
                    checked
                    onChange={() => setIsComplete(!isComplete)}
                />

                <span className={`${styles.checkmark} ${isComplete && styles.checked}`}>
                    {isComplete && <Check weight="bold" />}
                </span>
            </label>

            <p className={`${isComplete && styles.taskIsComplete}`}>
                {content}
            </p>

            <button
                onClick={onDeleteTask}
            >
                <Trash />
            </button>
        </li>
    );
}