import React, { useState } from 'react'

export default function TodoInput(props) {
  const { handleAddtodo2025,todovalue,setTodovalue } = props
    
  return (
    <header>
      <input value={ todovalue } onChange={(e)=>{ 
      setTodovalue (e.target.value)}} 
      placeholder='Enter to do...'/>
      <button onClick={()=> { handleAddtodo2025 (todovalue)
      setTodovalue('')
      }}>Add</button>
    </header>
  )
}

