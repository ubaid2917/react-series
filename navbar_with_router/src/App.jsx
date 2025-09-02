import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Login from "./Login.jsx";
import Student from "./Student.jsx";
import Department from "./Department.jsx";
import Course from "./Course.jsx";
import NotFound from "./NotFound.jsx";
import College from "./College.jsx";
import { Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavBar />  */} 
    
      <Routes> 
         <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
         </Route>

        <Route path="/college"   element={<College />} >
         <Route  index element={<Student />} />
         <Route path="department" element={<Department />} />
         <Route path="course" element={<Course />} />
        </Route>
        <Route path="/*"   element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
