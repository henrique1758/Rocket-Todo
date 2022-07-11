import { v4 as uuid } from "uuid";
import { PlusCircle } from "phosphor-react";

import { Header } from "./components/Header";
import { TasksEmptyBox } from "./components/TasksEmptyBox";
import { TasksBox } from "./components/TasksBox";

import "./styles/GlobalStyles.css";
import styles from "./styles/App.module.css";
import { FormEvent, useState } from "react";

interface Task {
  id: string;
  content: string;
  isComplete?: boolean;
}


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskContent, setTaskContent] = useState('');
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();

    if (!taskContent) {
      alert('Digite algo para criar uma task!');
      return;
    }

    const task: Task = {
      id: uuid(),
      content: taskContent,
      isComplete: isTaskCompleted
    }

    setTasks([...tasks, task]);

    setTaskContent('');
  }

  return (
    <main>
      <Header />

      <form 
        className={styles.newTaskBox}
        onSubmit={handleCreateTask}
      >
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          onChange={e => setTaskContent(e.target.value)}
          value={taskContent}
        />

        <button type="submit">
          Criar <PlusCircle weight="bold" />
        </button>
      </form>

      <section className={styles.tasksContainer}>
        <header>
          <div>
            <strong className={styles.tasksCreated}>Tarefas criadas</strong>
            <span>{tasks?.length}</span>
          </div>

          <div>
            <strong className={styles.tasksCompleted}>Concluídas</strong>
            <span>0</span>
          </div>
        </header>

        {tasks?.length > 0 ? (
          <TasksBox 
            tasks={tasks} 
            isComplete={isTaskCompleted} 
            setIsComplete={setIsTaskCompleted} 
            setTasks={setTasks}
          />
          ) : (
          <TasksEmptyBox />
        )}
      </section>
    </main>
  );
}

export default App
