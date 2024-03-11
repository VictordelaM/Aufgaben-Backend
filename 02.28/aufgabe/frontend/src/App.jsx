import { useState } from 'react'

import './App.css'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { useEffect, useContext } from 'react'
import { mainContext } from '../context/MainProvider'



function App() {
  const { toDos,setTodos} = useContext(mainContext)
  // const [toDos, setTodos] = useState([])
  // useEffect(()=>{
  //   fetch('http://localhost:3010/todos').then((response)=> response.json())
  //   .then((toDos) => {
  //     setTodos(toDos);
  //   })
  // },[])

  return (
    <>
      <div>toDo</div>
      <AddTodo/>
      <TodoList items= {toDos}/>
    </>
  )
}

export default App
