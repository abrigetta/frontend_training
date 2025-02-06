import React, { Children } from 'react'

export default function TodoCard (props ) {
    const { children, handleDeleteTodo2025, index, handleEditTodo2025 } = props
return (
    <li className = 'todoItem'> 
    { children }
        <div className ='actionContainer'>
            <button onClick = {() => { handleEditTodo2025 (index) }}>
            <i className= "fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick = {() => { handleDeleteTodo2025 (index) }} >
            <i className = "fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}
