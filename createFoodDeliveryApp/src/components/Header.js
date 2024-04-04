import { useState, useContext} from "react";
import {LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    let [btnNameReact,setBtnNameReact]  = useState("Login");

    //  subscribing to the store usiing a selector

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems)

    return (
      <div className="pl-12 pr-12 pt-4 pb-2 flex justify-between items-center border-2 rounded-sm sticky top-0 z-50 bg-cyan-50">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="logo-img"
            className="w-20 rounded-full" 
          />
        </div>
        <div className="nav-items">
          <ul className="flex gap-3">
            <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
            <li><Link to="/about" style={{textDecoration:"none"}}>About Us</Link></li>
            <li><Link to="/contact" style={{textDecoration:"none"}}> Contact Us </Link></li>
            <li><Link to="/grocery" style={{textDecoration:"none"}}> Grocery </Link></li>
            <li className="font-semibold"><Link to="/cart" style={{textDecoration:"none"}}> Cart - ({cartItems.length} items)  </Link></li>
            <li>
            <button onClick={()=>{
              (btnNameReact === "Login") ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
            </li>
            <li className="font-semibold">
            {loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;