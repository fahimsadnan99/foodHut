import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "../Style/Navbar.css";
import {FaBars} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"

let Menu = ["Today special", "Why FoodHut", "Our Menu", "Our Popular food"];

const Navbar = () => {
  const [activeManu, setActiveManu] = useState(null);
  const [menuShow,setMenuShow] = useState(false)
  return (
    <div className="NavbarWrapper">
      <div className="NavbarChildWrapper">
        <div className="logoWrapper">
          <img src={Logo} alt="logo" />
        </div>
        <button className="toggleBtn" onClick={()=>setMenuShow(!menuShow)}>
         {!menuShow ?<FaBars></FaBars> : <RxCross2></RxCross2> }  
        </button>
        <ul className={`NavbarUl ${!menuShow ? "top-[-500px] duration-300 ease-out" : "top-24 duration-300 z-[-10] ease-out"}`}>
          {Menu?.map((item, index) => {
            return (
              <li
                key={index}
                className={` NavbarLi ${activeManu === item && "NavbarLiActive"}`}
                onClick={() => setActiveManu(item)}
              >
                <Link to={`#${item.split(" ").join("_")}`}> {item}</Link>
              </li>
            );
          })}

          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
