import { useState } from "react";
import "./App.css";
// import Skills from './Skills'
// import Gender from './Skills'
// import LoopInJsx from "./loop";
import User from "./User.jsx";
function App() {
  const userData = [
    { id: 1, name: "John", email: "john@gmail.com", age: 30 },
    { id: 2, name: "Jane", email: "Jane@gmail.com", age: 28 },
    { id: 3, name: "Bob", email: "Bob@gmail.com", age: 32 },
    { id: 3, name: "Lilly", email: "Lilly@gmail.com", age: 20 },
  ];
  return (
    <>
      {/* <h1>Handeling Checkboxes</h1>   */}
      {/* <Skills  />  */}

      {/* <Gender/> */}

      {/*    
              lecture 25

         <h3>Loop in jsx</h3>
      <LoopInJsx/>
       */}

      {/*    
              lecture 26

         <h3>Reuse Component in jsx</h3>
      <LoopInJsx/>
       */}

      {userData.map((user) => (
        <div id= {user.id}>
          <User />
        </div>
      ))}
    </>
  );
}

export default App;
