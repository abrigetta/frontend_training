import { useState,useEffect} from "react"
import TodoInput from "./components/TodoInput.jsx"
import TodoList from "./components/TodoList.jsx"

function App () {
  const [todo2025,setTodo2025]= useState([])
  const [todovalue, setTodovalue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todo2025', JSON.stringify ( { todo2025 :
     newList } ) )
  }

    function handleAddtodo2025(newtodo) {
      const newTodoList = [...todo2025,newtodo]
      persistData(newTodoList)
      setTodo2025(newTodoList)

      
    }

    function handleDeleteTodo2025(index) {
      const newTodoList = todo2025.filter((todo2025,todoindex) => {
        return todoindex !== index
        })
        persistData(newTodoList)
        setTodo2025(newTodoList)

    }
     function handleEditTodo2025(index) {
      const valueTobeEdited =todo2025[index]
      setTodovalue(valueTobeEdited)
      handleDeleteTodo2025(index)
      
     }
      useEffect(() => {
        if (!localStorage) {
          return
        }
      let localtodo2025 = localStorage.getItem('todo2025') 
        if(!localtodo2025) {
          return
        }
        localtodo2025 = JSON.parse(localtodo2025).todo2025
        setTodo2025(localtodo2025)
      }, [])
      
         
  return (
   <> 
      <TodoInput handleAddtodo2025 = {handleAddtodo2025} 
      todovalue = {todovalue} setTodovalue =  {setTodovalue} />
      <TodoList handleDeleteTodo2025 =  {handleDeleteTodo2025} 
      handleEditTodo2025 =  {handleEditTodo2025} todo2025 = {todo2025} />
  </>
  
  )
}
export default App