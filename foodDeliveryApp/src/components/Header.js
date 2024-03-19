import { useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    let [btnNameReact,setBtnNameReact]  = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo" 
            src={LOGO_URL}
            alt="logo-img"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
            <li><Link to="/about" style={{textDecoration:"none"}}>About Us</Link></li>
            <li><Link to="/contact" style={{textDecoration:"none"}}> Contact Us </Link></li>
            <li>Cart</li>
            <li>
            <button onClick={()=>{
              (btnNameReact === "Login") ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;