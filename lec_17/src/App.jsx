import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {

    let obj = {
      name: "Ubaid Naeem",
      age: "20", 
      email: "test@gmail.com"
    }
    let obj2 = {
      name: "Ayesha Naeem",
      age: "15", 
      email: "ayesha@gmail.com"
    }
    let obj3 = {
      name: "Salva Naeem",
      age: "20", 
      email: "salva@gmail.com"
    }
    let obj4 = {
      name: "Eman Naeem",
      age: "20", 
      email: "salva@gmail.com"
    }
    let obj5 = {
      name: "Sanaullah Naeem",
      age: "20", 
      email: "salva@gmail.com"
    }
    

    

  return (
    <> 
    <h1>Props in React</h1>

  

    {/* <User obj={obj}/> */}
    <User obj={obj}/>
    <User obj={obj4}/>
    <User obj={obj2}/>
    <User obj={obj3}/>
    <User obj={obj5}/>
     
    </>
  )
}

export default App
