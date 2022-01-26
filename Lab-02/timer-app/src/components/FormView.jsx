import React from 'react'
import { useState, useContext } from 'react'
import { todoContext } from './context/todoContext'
import Form from './Form'

function FormView () {
  const [addForm, setAddForm] = useState(false)
  const [title, setTitle] = useState('')
  const [project, setProject] = useState('')

  const [works, setWork] = useContext(todoContext)

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleProject = e => {
    setProject(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    setWork(prevWork => [...prevWork, {title:title , project:project}])
   
    setTitle('')
    setProject('')  
    setAddForm(false)
  }

  return (
    <div>
      {addForm && (
        <Form
          creation={true}
          cancle={()=>{
              setAddForm(!addForm)
          }}
          handleSubmit={handleSubmit}
          title={title}
          project={project}
          handleProject={handleProject}
          handleTitle={handleTitle}
        />
      )}
      <button onClick={() => setAddForm(!addForm)}>+</button>
    </div>
  )
}

export default FormView
