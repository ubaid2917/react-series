import { Link, Outlet } from "react-router";
function College(){
    return (
        <div style={{
            background: "linear-gradient(135deg, #b0a7d5ff, #928dab)",
            color: "white",
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif"
        }}>
            <h2>College Component</h2>  
            
            <ul  style={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
                justifyContent: "center"
            }}>
           <li> 
                <Link className="link" to="student">Student</Link>
            </li>
            <li> 
                <Link className="link" to="department">Department</Link>
            </li>
            <li> 
                <Link className="link" to="course">Course</Link>
            </li>
            </ul>
           <Outlet/>
        </div>
    )
} 

export default College;