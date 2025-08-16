
import logo from "../../assets/logo.svg"
import "./Header.css"

function Header(){
    return (
         <div className="header">
        <div className="logo"> <img src="https://cdn.prod.website-files.com/67a634bbe9ad316c91e9a1ed/67ac6b6ab1e4ff190d5e1d36_Logo.svg" alt="" />  </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Feature</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>    

        </div> 

         <div className="btn-section">

          <button className="btn1">Login</button>
          <button className="btn">Sign Up</button>
         </div>
      </div>  
    )
} 
export default Header