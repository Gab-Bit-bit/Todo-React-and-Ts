import React from 'react';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

// CSS
import styles from './App.module.css'


function App() {
  return <div>
    <Header/>
    <main className={styles.main}>
      <div>
      <h2>O que você ira fazer?</h2>
      <TaskForm btnText='Criar Tarefa'/>
      </div>
      <div>
        <h2>Suas tarefas: </h2>
        <TaskList/>
      </div>
    </main>
    <Footer/>
  </div>;
}

export default App;
