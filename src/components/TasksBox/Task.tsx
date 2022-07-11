import { Check, Trash } from "phosphor-react";

import styles from "./styles.module.css";

interface TaskProps {
    content: string;
    isCompleted: boolean;
    onUpdateTaskStatus: () => void;
    onDeleteTask: () => void;
}

export function Task({ content, onUpdateTaskStatus, isCompleted, onDeleteTask }: TaskProps) {
    return (
        <li className={styles.task}>
            <label className={styles.checkBoxContainer}>
                <input
                    type="checkbox"
                    checked
                    onChange={() => onUpdateTaskStatus()}
                />

                <span className={`${styles.checkmark} ${isCompleted && styles.checked}`}>
                    {isCompleted && <Check weight="bold" />}
                </span>
            </label>

            <p className={`${isCompleted && styles.taskIsComplete}`}>
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