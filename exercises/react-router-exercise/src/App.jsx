import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Home from './Home'
import About from './About'
import {Router, Routes, Route, Link} from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

    <h1>React Router Exercise</h1> 
    <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/about' element={<About />}></Route>
    </Routes>
    </>
  )
}

export default App
