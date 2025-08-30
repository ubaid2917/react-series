import { useState } from "react";
function Practice() { 
    const [h1Style, setH1Style] = useState({}) 
    
    function changeColor(color){
      setH1Style({
      color: color, // dynamic color
      backgroundColor: "lightgray",
      padding: "10px",
      width: "300px",
    });
    }

   
  return <> 
    <h1 style={h1Style}>Practice Component</h1>  
     
     <button onClick={() => changeColor("red")}>Change Color</button>
    <button onClick={() => setH1Style({})}>Default Color</button>
  </>;
}

export default Practice;
