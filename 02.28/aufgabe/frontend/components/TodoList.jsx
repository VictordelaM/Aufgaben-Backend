import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({items}) => {
  return (
    <div>
        {items.map((item) => {
            return(
            <TodoItem key={item.id } item = {item}/>
            )
        })}
    </div>
  )
}

export default TodoList
