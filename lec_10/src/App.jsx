import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cat from './assets/cat.jpg'

function App() {
 
  const name = "Ubaid Naeem"
   
  function fruit(){
    return "apple"
  } 
  
  function sum(a,b){
    return a + b
  }

  return (
    <> 
      <h3>{name}</h3>
      <h4>{fruit()}</h4>
      <h4>{sum(20, 30)}</h4>
    </>
  )
}

export default App
