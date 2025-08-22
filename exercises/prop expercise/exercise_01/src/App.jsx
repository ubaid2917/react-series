import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name: "John",
    age: 30,
    city: "New York"
  }
  let obj2 = {
    name: "Doe",
    age: 20,
    city: "New York"
  }
  return (
    <>   


      <Product obj={obj} />
      <Product obj={obj2} />
      
    </>
  )
}

export default App
