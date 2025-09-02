import { Link, Outlet } from "react-router";
import  './Nav.css'

function NavBar() {
  return (
     <div>
       <div className="navbar">
       
      <div>
        
          <h2>Logo</h2>
        
      </div>

      <div>
        <ul>
          <li>
            <Link className="link" to="/" >
            Home
            </Link >
          </li>
          <li>
            <Link className="link" to="/about">
            About
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
            Login
            </Link >
          </li>
          <li>
            <Link className="link" to="/college">
            College
            </Link >
          </li> 
        </ul>
      </div>
    </div> 
    <Outlet/>
     </div>
  );
}

export default NavBar;
