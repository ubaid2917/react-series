import { useState, useEffect } from "react";

function Clock(  {color} ) { 
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [])
 
  return <h1 style={{ color: color }}>{time}</h1>;
}

export default Clock;
