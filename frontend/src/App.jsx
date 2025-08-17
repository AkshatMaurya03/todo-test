import { use, useEffect, useState } from 'react'
import './App.css'
import { CreateTodo} from './Components/Createtodo'
import { Showtodo } from './Components/Showtodo'
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(async (response) => {
        const data = await response.json()
        setTodos(data)
      })
  }, [])

  return (
    <>
    <CardWrapper>
      <CreateTodo />
      <Showtodo todos={todos}/>
    </CardWrapper>
      
    </>
  )
}
function CardWrapper({ children }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
      {children}
    </div>
  )
}


export default App
