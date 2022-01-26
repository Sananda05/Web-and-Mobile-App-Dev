import React from 'react'
import { todoContext } from '../context/todoContext'
import { useContext } from 'react'
import Task from '../task/Task'
import './todoList.css'

function TodoList () {
    
    const [works, setWork] = useContext(todoContext)
  return (
      <div>
          {works.map((work, index) => (
          <Task key={index} id={index} title={work.title} project={work.project}/>))}
      </div>
  )
}

export default TodoList
