import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })
    setInput('')
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex w-3/4 items-center justify-center space-y-3 md:w-full md:flex-row md:space-x-3 md:space-y-0"
    >
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="ml-2  flex h-14 flex-row items-center justify-center rounded-md bg-[#2abaf3] pl-2 text-white"
          />

          <button
            onClick={handleSubmit}
            className=" flex h-[50px] items-center justify-center rounded-lg bg-[#2abaf3] px-5 text-base font-semibold text-white "
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text ml-2"
            ref={inputRef}
            className="focus:gradient-to-r w-full flex-1  appearance-none border border-transparent border-gray-300 bg-white  py-2 px-4 text-base text-black  placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2"
          />
          <button
            onClick={handleSubmit}
            className="flex rounded-lg bg-[#2abaf3] px-4 py-2 text-base font-semibold text-white shadow-md"
          >
            Add todo
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm
