import { use, useEffect, useState } from "react";

import "./App.css";
import Practice from "./Practice.jsx";
import Props from "./Props.jsx";
function App() {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState(0);
  
  // this useEffect will run when the component mounts and when the count state changes
  // useEffect(() => {
  //   callOnce();
  // }, []);
    
  // this useEffect will run when the data state change 
  // useEffect(() => {
  //   callEveryTime();
  // },[data])   

  // this useEffect will run when the both state change
  // useEffect(() => {
  //   callEveryTime();
  // },[data, count])
  // function callOnce() {
  //   console.log("Called once");
  // }     

  // function callEveryTime(){
  //   console.log("Called every time when the data state changes");
  // }


  // if i want to call a function when the counter state change

  return (
    <>
      <h3>useEffect Hook</h3>  

       <Practice />
      {/* <button onClick={() => setCounter(count + 1)}> Count: {count}</button> <br />
      <button onClick={() => setData(data + 1)}> Data: {data}</button> <br /> */}
   </>
  );
}

export default App;
