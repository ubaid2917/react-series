import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Practice from "./Practice.jsx"
import Practice2 from "./Practice2.jsx"
import External from "./External.jsx"
function App() {
  const [count, setCount] = useState(0);
  
  const divStyle = {
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    padding: "20px",
    width: "300px",
    margin: "10px",
    borderRadius: "11px",
  }
  const imgStyle = {
    width: "250px",
    borderRadius: "11px",
  };  

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }



  return (
    <>  
      < Practice/>
      < External/>
      {/* < Practice2/> */}
      {/* <h3 style={{ color: "green" }}>Inline Style in react</h3> 
      <div style={{display: "flex", flexWrap: "wrap"}}>
      <div style={divStyle}> 
        <img
          style={imgStyle}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <h2>Ubaid Naeem</h2>
        <h4>Software Developer</h4>
        <button style={buttonStyle}>Hire Me</button>
      </div>
      <div style={divStyle}> 
        <img
          style={imgStyle}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <h2>Ubaid Naeem</h2>
        <h4>Software Developer</h4>
        <button style={buttonStyle}>Hire Me</button>
      </div>
      <div style={divStyle}> 
        <img
          style={imgStyle}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <h2>Ubaid Naeem</h2>
        <h4>Software Developer</h4>
        <button style={buttonStyle}>Hire Me</button>
      </div>
      </div> */}
    </>
  );
}

export default App;
