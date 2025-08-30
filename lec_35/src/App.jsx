import { useState } from 'react'
import './App.css'
import Profile from './Profile.jsx'
import styles from './css/Profile.module.css'
import Styled from './Styled.jsx'
import BootstrapComponent from './Bootstrap.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
     {/* <h1 className={styles.h2}>Main Component</h1> */}
       {/* <Profile/> */} 
        <BootstrapComponent/>
        <Styled/> 
    </>
  )
}

export default App
