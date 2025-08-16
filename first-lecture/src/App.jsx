import { useState } from "react";
import "./App.css";
import logo from "../src/assets/logo.svg"
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";

function App() {
  return (
    <>  
    <div className="container">
      <br />
        <Header /> 
        <br />
        
        <Main />
      </div>

      {/* <img src="https://cdn.prod.website-files.com/67d51db124ae2558bcdcb867/6857d6c0be41c427414806aa_Frame%2026.svg" alt="" /> */}
    </>
  );
}

export default App;
