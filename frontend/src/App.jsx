import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input type="text" name="" id="" placeholder='title'/>
      <input type="text" placeholder='description for todo' />
      <button>add todo</button>
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
