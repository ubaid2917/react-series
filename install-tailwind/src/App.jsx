import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h3 className='text-3xl'>Hello how are you</h3>
       <button class="bg-sky-500 hover:bg-sky-700">Save changes</button>
    </>
  )
}

export default App
