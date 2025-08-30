import { useState } from 'react'
import './App.css'
import College from './Collage'
import {  SubjectContext } from "./ContextApi"

function App() {
  const [subject, setSubject] = useState('')
  const [student, setStudent] = useState('')


  return (  
    <div style={{backgroundColor: "green"}}> 
         <SubjectContext.Provider value={subject}>
      <h1>Context Api</h1>   

        <select name="subject" id="" defaultValue={""} onChange={(e) => setSubject(e.target.value)}>
          <option value="" selected disabled>Select the subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Physics"> Physics</option>
          <option value="History"> History</option>
        </select>

       <College/> 
       </SubjectContext.Provider>
    </div>
  )
}

export default App
