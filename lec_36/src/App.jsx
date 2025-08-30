import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import ArrayPractice from './Practice.jsx'

function App() {
  const [data, setData] = useState({
     name: 'Ubaid Naeem',
     email: 'ubaid29170@gmail.com',
     address: {
      city: 'Karachi',
      country: 'Pakistan'
     }
  }) 

   function handleName(val){
    console.log(val)   
    data.name = val
    setData({...data})
   }   

   function handleCity(val){
    data.address.city = val;
    setData({...data})
   }
    
   function handleCountry(val){
    data.address.country = val;
     setData({...data})
   }
  return (
    <>         
         <ArrayPractice/>
         {/* <input type="text" placeholder='Enter your name'  onChange={event => handleName(event.target.value)} />  <br /> <br />   

         <input type="text" placeholder='Enter your city'  onChange={event => handleCity(event.target.value)} />  <br /> <br /> 

         <input type="text" placeholder='Enter your country'  onChange={event => handleCity(event.target.value)} />  <br /> <br />   

         <h3>
          Name: {data.name} <br />
          Email: {data.email} <br />
          City: {data.address.city} <br />
          Country: {data.address.country} <br />
         </h3> */}
    </>
  )
}

export default App
