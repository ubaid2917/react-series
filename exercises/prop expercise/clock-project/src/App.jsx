import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dropdown from './Dropdown.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h2>Clock Project</h2>
       <Dropdown />
    </>
  )
}

export default App
