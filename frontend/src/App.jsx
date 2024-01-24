import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title: "gym",
          description: "go to gym",
          completed: false
        },
        {
          title: "khana",
          description:"khaalo guys",
          completed: true
        }
      ]}></Todos>
    </>
  )
}

export default App
