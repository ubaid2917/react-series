import { useState } from "react";
import "./App.css";
import University from "./University";

function App() {
  const [count, setCount] = useState(0);

  const universities = [
    {
      name: "Harvard University",
      website: "https://www.harvard.edu",
      campus: "Cambridge, MA",
      students: [
        { id: 1, name: "Alice Johnson", age: 20 },
        { id: 2, name: "Michael Smith", age: 22 },
        { id: 3, name: "Sophia Brown", age: 19 },
      ],
    },
    {
      name: "Stanford University",
      website: "https://www.stanford.edu",
      campus: "Stanford, CA",
      students: [
        { id: 1, name: "Daniel Lee", age: 21 },
        { id: 2, name: "Emma Wilson", age: 23 },
      ],
    },
    {
      name: "MIT",
      website: "https://www.mit.edu",
      campus: "Cambridge, MA",
      students: [
        { id: 1, name: "James White", age: 20 },
        { id: 2, name: "Olivia Martinez", age: 22 },
        { id: 3, name: "Ethan Harris", age: 21 },
      ],
    },
  ];

  return (
    <>
      <h3>Nested Loop</h3>  
      <University universities = {universities}/>
    </>
  );
}

export default App;
