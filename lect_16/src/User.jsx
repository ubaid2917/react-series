import { useState } from "react";

 function User() {
     console.log("I am here")
     const [count, setCount] = useState(0)
    return ( 
        <> 
          <h1>User Counter</h1>    
          <h1>{count}</h1>   

          {[
            count === 1 ? <h1>Condition 1</h1> : null,
            count === 2 ? <h1>Condition 2</h1> : null,
            count === 3 ? <h1>Condition 3</h1> : null,
            count === 4 ? <h1>Condition 4</h1> : null,
          ]}

          <button onClick={() => setCount(count + 1)}>Click Here</button>

        </>
     )
 }
 export default User