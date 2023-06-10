import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown({ isFromHome }) {
  const [state, setState] = useState(false);
  const showDropdown = () => {
    setState(true);
  };
  const hideDropdown = () => {
    setState(false);
  };
  return (
    <div className="  mt-[-20px]  dropdown ">
      <div
        className="dropdown-menu lg:hidden block"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <div className="text-[60px]">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        {state ? (
          <ul className="dropdown-list font-[600]" onMouseEnter={showDropdown}>
            <Link to="/">Home</Link>
            <Link to="/Project">Projects</Link>
            <Link to="/Blog">Blogs</Link>
            {isFromHome && (
              <>
                <a href="#techy">Technologies</a>
                <a href="#contact-section">Contact</a>
              </>
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
