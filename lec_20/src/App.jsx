import { use, useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState('')
  const [age, setAge] = useState(null)
  const [email, setEmail] = useState(null)

  return (
    <> 

      {/* <input type="text" onChange={(e) => setVal(e.target.value)} placeholder='Enter your name' value={val}/>
        <h1>{val}</h1>
        <button onClick={() => setVal('') }>Clear</button> */}   

        

          
        <input type="text" placeholder='Enter your name'  onChange={(e) => setVal(e.target.value)}/>   <br /> <br />
        <input type="number" placeholder='Enter your age' onChange={(e) => setAge(e.target.value)} />   <br /> <br />
        <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />   <br /> <br />

        <p>Hi, my name is {val} , and i am years {age} old, and my email is {email}</p>
    </>
  )
}

export default App
