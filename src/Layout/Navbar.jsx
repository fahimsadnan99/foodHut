import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "../Style/Navbar.css";

let Menu = ["Today special offers", "Why FoodHut", "Our Menu", "Our Popular food"];

const Navbar = () => {
  const [activeManu, setActiveManu] = useState(null);
  return (
    <div className="NavbarWrapper">
      <div className="NavbarChildWrapper">
        <div className="mt-3 w-[121px] h-[78px]">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="NavbarUl">
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
