import { Task } from "./Task";

import styles from "./styles.module.css";
import { useState } from "react";

interface Task {
    id: string;
    content: string;
    isCompleted: boolean;
}

interface TasksBoxProps {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    onUpdateTaskStatus: (taskId: string) => void;
}

export function TasksBox({ tasks, setTasks, onUpdateTaskStatus }: TasksBoxProps) {

    function handleDeleteTask(taskId: string) {
        const remainingTasks = tasks.filter(task => task.id !== taskId);
    
        setTasks(remainingTasks);
    }

    return (
        <ul className={styles.tasks}>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    content={task.content}
                    isCompleted={task.isCompleted}
                    onUpdateTaskStatus={() => onUpdateTaskStatus(task.id)}
                    onDeleteTask={() => handleDeleteTask(task.id)}
                />
            ))}
        </ul>
    );
}