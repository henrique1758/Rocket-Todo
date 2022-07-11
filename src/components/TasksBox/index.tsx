import { Task } from "./Task";

import styles from "./styles.module.css";

interface Task {
    id: string;
    content: string;
}

interface TasksBoxProps {
    tasks: Task[];
    isComplete: boolean;
    setIsComplete: (isComplete: boolean) => void;
    setTasks: (tasks: Task[]) => void;
}

export function TasksBox({ tasks, isComplete, setIsComplete, setTasks }: TasksBoxProps) {

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
                    isComplete={isComplete}
                    setIsComplete={setIsComplete}
                    onDeleteTask={() => handleDeleteTask(task.id)}
                />
            ))}
        </ul>
    );
}