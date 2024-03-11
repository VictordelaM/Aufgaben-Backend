import React from 'react'
import { useContext } from 'react'
import { mainContext } from '../context/MainProvider'

const TodoItem = ({item}) => {
  const {setTodo} = useContext(mainContext)
  const toggleDone = () =>{
    console.log("check")
    item.done ? item.done=false : item.done=true
    
  }

  return (
    <div style={item.done ?{textDecoration: "line-through"}: {}} onClick={() => toggleDone()} >
        
        {item.title}
    </div>
  )
}

export default TodoItem
