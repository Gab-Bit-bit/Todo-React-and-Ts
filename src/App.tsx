import React, { useState } from "react";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import Modal from "./Components/Modal";

// CSS
import styles from "./App.module.css";

// Interface
import { ITask } from "./Interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const delteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };
  
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    });
  
    setTaskList(updatedItems);
    hideOrShowModal(false);
  };  

  return (
    <div>
      <Modal
        children={<TaskForm btnText="Editar tarefa" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>}
      />
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
          <TaskList
            taskList={taskList}
            handleDelete={delteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
