import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todo2025} = props
   
  return (
    <ul className='main'>
        {todo2025.map((todo,todoindex) => {
            return (
                <TodoCard {...props} key={todoindex} index={todoindex}>
                    <p>{todo}</p>
                </TodoCard>
            )
            
        })}
    </ul>
  )
}

