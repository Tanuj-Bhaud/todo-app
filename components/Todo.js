import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={`  
      ${todo.isComplete ? 'hover:cursor-rounded line-through' : 'todo-row'}
     m-1 mt-2 flex h-14 flex-row items-center justify-center rounded-md bg-[#2abaf3]
`}
      key={index}
    >
      <div
        className="ml-2 w-full appearance-none rounded-lg text-left text-base font-semibold text-white  transition duration-200 ease-in focus:outline-none  focus:ring-2 focus:ring-offset-2"
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="icons mr-2 flex justify-end">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ))
}

export default Todo
