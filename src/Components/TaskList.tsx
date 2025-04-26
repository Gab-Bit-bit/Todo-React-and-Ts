import React from 'react'

// CSS
import styles from './TaskList.module.css'

// Interfaces
import { ITask } from '../Interfaces/Task'


interface Props{
  taskList: ITask[]
}

function TaskList({taskList}: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        <p>Tem tarefa cadastrada</p>
      ):(
        <p>Não tem tarefa cadastrada</p>
      )} 
    </>
  )
}

export default TaskList