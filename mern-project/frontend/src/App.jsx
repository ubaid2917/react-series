import { useState } from 'react'
import './App.css'
import User from './pages/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User />
    </>
  )
}

export default App
