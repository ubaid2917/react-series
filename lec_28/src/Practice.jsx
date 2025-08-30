import { useState, useEffect } from "react"; 
import LifeCycle from "./lifeCycle.jsx"

function Practice() {
  // counter state
  const [count, setCounter] = useState(0);

  // input state
  const [text, setText] = useState(""); 
    
  // useEffect to log when count changes 
  // useEffect(() => {
  //   console.log("Count has changed to:", count);
  // }, [count]);   


  // // use Effect to log when the text changes
  //  useEffect(() => {
  //   console.log("Text has changed to:", text);
  //  }, [Text])   


  //  // use effect to log when both states change 
  //  useEffect(() => {
  //   console.log("Either count or text has changed. Count:", count, "Text:", text);
  //  }, [count, text])

  return (
    <>   
      <LifeCycle  count={count} text={text} />
      <h4>Practice Component</h4>
      <h5>Count: {count}</h5>
      <h5>{text.length > 0 ? text : "Please enter something"}</h5>
      <input
        type="text"
        placeholder="Enter Something"
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <br /> <br />
      {/* counter button */}
      <button onClick={() => setCounter(count + 1)}>Increase Count</button>{" "}
      &nbsp;
      <button onClick={() => setCounter(count - 1 > 0 ? count - 1 : 0)}>
        Decrease Count
      </button>
    </>
  );
}
export default Practice;
