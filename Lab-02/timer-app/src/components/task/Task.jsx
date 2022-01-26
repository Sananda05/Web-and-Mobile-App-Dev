import React from 'react'
import Timer from '../timer/Timer'
import Form from '../Form'
import './task.css'
import { Delete, Edit } from '@material-ui/icons'
import { useState, useContext } from 'react'
import { todoContext } from '../context/todoContext'

function Task (props) {
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState(props.title)
  const [project, setProject] = useState(props.project)

  const [works, setWork] = useContext(todoContext)

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleProject = e => {
    setProject(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    setWork(
        works.map((work, index) =>
          props.id === index
            ? { ...work, title: title, project: project }
            : work
        )
      );

    setEditMode()

    // setWork(prevWork => [...prevWork, { title: title, project: project }])
  }

  const deleteTask = () => {
    setWork(works.filter((work, index) => props.id !== index))
  }

  const setEditMode = () => {
    setEdit(!edit)
  }

  if (!edit) {
    return (
      <div className='works'>
        <h2 className='title'>{props.title}</h2>
        <p className='project_title'>{props.project}</p>
        <div>
        <Timer />
        </div>
        <div>
          <span className='iconItem'>
            <div className='delIcon' onClick={deleteTask}>
              <Delete />
            </div>

            <div className='editIcon' onClick={setEditMode}>
              <Edit />
            </div>
          </span>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Form
          creation={false}
          cancle={setEditMode}
          handleSubmit={handleSubmit}
          title={title}
          project={project}
          handleProject={handleProject}
          handleTitle={handleTitle}
        />
      </div>
    )
  }
}

export default Task
