import React from 'react'
import { text } from 'stream/consumers'

interface Props{
    btnText: string
}

function TaskForm({btnText}: Props) {
  return <form>
    <div>
        <label htmlFor="Title">Título: </label>
        <input type="text" name='title' placeholder='Título da tarefa'/>
    </div>
    <div>
        <label htmlFor="difficulty">Difículdade: </label>
        <input type="text" name='difficulty' placeholder='Difículdade da tarefa'/>
    </div>
    <input type="submit" value={btnText}/>
  </form>
}

export default TaskForm