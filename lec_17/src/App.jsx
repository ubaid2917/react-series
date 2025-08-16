import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User";

function App() {
  let obj1 = {
    name: "Rovik Danter",
    email: "rovik.danter@test.com",
    age: 24,
  };

  let obj2 = {
    name: "Mirel Vanton",
    email: "mirel.vanton@test.com",
    age: 29,
  };

  let obj3 = {
    name: "Kelvon Strak",
    email: "kelvon.strak@test.com",
    age: 21,
  };

  let obj4 = {
    name: "Taren Lufor",
    email: "taren.lufor@test.com",
    age: 27,
  };

  let obj5 = {
    name: "Zyric Mondal",
    email: "zyric.mondal@test.com",
    age: 26,
  };

  return (
    <>
      <h1>Props in React</h1>

      <User obj={obj1} />
      <User obj={obj4} />
      <User obj={obj2} />
      <User obj={obj3} />
      <User obj={obj5} />
    </>
  );
}

export default App;
