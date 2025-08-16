import { useState } from 'react'
import './App.css' 
import User from './User.jsx'

function App() {
  const [count, setCount] = useState(0)

  const [display, setDisplay] = useState(true)
    
  // console.log("i am here")
  return ( 
    <> 
    <User />
       {/* <h1>Counter: </h1>    

    
    <h1>{count}</h1> 

    <button onClick={() => setCount(count + 1)}>Clcik Me</button>   */}

     
     {/* {
      display? <h1>Ubaid Naeem</h1> : null
     } */}
    </>
  )
}

export default App
