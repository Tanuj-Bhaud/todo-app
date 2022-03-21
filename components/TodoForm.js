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
      className="mt-2 flex w-full flex-row items-center justify-start space-y-0 space-x-3 md:w-full "
    >
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="ml-2 flex h-14 flex-row items-center justify-center rounded-md bg-[#2abaf3] pl-2 text-white"
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
            className="w-[130px] flex-initial appearance-none border  border-transparent border-gray-300 bg-white py-2 px-4  text-base text-black placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 md:w-[250px]  "
          />
          <button
            onClick={handleSubmit}
            className="flex w-24 rounded-lg bg-[#2abaf3] py-2 px-2 text-base font-semibold text-white shadow-md"
          >
            Add todo
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm
