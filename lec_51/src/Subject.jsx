import { useContext } from "react"
import {  SubjectContext } from "./ContextApi"

export default function Subject() { 
  const subject = useContext(SubjectContext)
    return (
        <div style={{backgroundColor: "cyan", color: "black"}}>
          <h2>Subject Component: {subject}</h2>     
            
      
        </div>
    )
}