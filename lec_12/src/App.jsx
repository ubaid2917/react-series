import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
   
  const [fruit, setFruit] = useState("Apple"); 
  const [count, setCount] = useState(0);
  const [rcount, setRCount] = useState(10);
  function handleFruit()  { 
    if(fruit === 'Apple'){
      setFruit("Banana")
    }else{
      setFruit("Apple")
    }
  }
  return (
    <>   
      <h3>State In Js</h3> 

   
      <h4>{fruit}</h4>
       <h5>{count}</h5>  
       <h5>{rcount}</h5>

      <button onClick={handleFruit}>Click to Change Fruit Name</button> <br /> <br />
       
      <button onClick={() => setCount
      (count + 1)
      }>Count</button>  <br /> <br />
      <button onClick={() => setRCount(rcount - 1)}>Reverse Count</button>
    </>
  );
}

export default App;
