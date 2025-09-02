import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes , Link} from 'react-router' 
import Home from './Home.jsx'
import About from './About.jsx'


function App() {    

  return (
    <>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link> 

    <Routes>
       <Route path='/' element={< Home/>} />
       <Route path='/about' element={< About/>} />
    </Routes>
    </>
  )
}

export default App
