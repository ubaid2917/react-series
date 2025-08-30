import { useEffect, useState } from "react";
function LifeCycle({count, text}) { 

    const  [display, setDisplay] = useState(true);



    useEffect(() => {
        console.log("LifeCycle Component Mount phase");
    }, [])  

    // update phase
    useEffect(() => {
        console.log("LifeCycle Component Update phase - count or text changed", count, text);
    
    }, [count, text])   
   
    // unmount phase 
    useEffect(() => {
        return () => {
            console.log("LifeCycle Component Unmount phase");
        }
    }, [])


    return (
        <>     
         <h2 style={{ color: display ? "green" : "red" }}>Life Cycle Component</h2>   
          {
            display ?  <button onClick={() => setDisplay(false)}>Hide Component</button>
            : <button onClick={() => setDisplay(true)}>Show Component</button>
          }

        </>
    )
}
export default LifeCycle;