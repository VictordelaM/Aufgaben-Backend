import React from 'react'

const TodoItem = ({item}) => {
  return (
    <div style={item.done ?{textDecoration: "line-through"} : {}}>
        
        {item.title}
    </div>
  )
}

export default TodoItem
