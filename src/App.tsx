import React, { useState } from "react";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

// CSS
import styles from "./App.module.css";

// Interface
import { ITask } from "./Interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você ira fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas: </h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
