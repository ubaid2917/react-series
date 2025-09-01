import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes , NavLink} from 'react-router' 
import Home from './Home.jsx'
import About from './About.jsx'


function App() {    

  return (
    <>
    <NavLink to="/">Home</NavLink>
    <br />
    <NavLink to="/about">About</NavLink> 

    <Routes>
       <Route path='/' element={< Home/>} />
       <Route path='/about' element={< About/>} />
    </Routes>
    </>
  )
}

export default App
