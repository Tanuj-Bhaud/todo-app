import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TodoList from '../components/Todolist'

const Home: NextPage = () => {
  return (
    <div className=" flex min-h-screen w-screen flex-col">
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="h-screen  w-screen bg-[#91e0ff] flex flex-1 flex-col items-center justify-center px-20 text-center">
     
      <div className="flex flex-col max-w-md px-4 py-8 bg-black text-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
      <TodoList />
      </div>
      </main>

    </div>
  )
}

export default Home
