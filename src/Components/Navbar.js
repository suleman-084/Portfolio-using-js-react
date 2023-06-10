import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = ({ isFromHome }) => {
  return (
    <>
      <nav className="navigation bg-[#6C63FF]  flex flex-row justify-between  h-[130px] ">
        <div className="head flex flex-row justify-between  w-[100%]">
          <div className="logo">
            <img
              className="pt-[20px] pl-[20px] h-[5rem]"
              src="./images/logo3.svg"
              alt="logo"
            />
          </div>
          <div className=" nav-list hidden lg:block lg:flex lg:flex-row lg:justift-between lg:mt-[40px]  lg:text-[25px]  lg:font-bold lg:font-[bold] lg:list-none lg:gap-x-[3rem] lg:mr-[5rem] ">
            <li className="nav-list-items  ">
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li className="nav-list-items">
              <Link className="" to="/Project">
                Projects
              </Link>
            </li>
            <li className="nav-list-items">
              <Link className="" to="/Blog">
                Blogs
              </Link>
            </li>
            {isFromHome && (
              <>
                <li className="nav-list-items">
                  <a href="#techy">Technologies</a>
                </li>
                <li className="nav-list-items">
                  <a href="#contact-section">Contact</a>
                </li>
              </>
            )}
          </div>
        </div>
        <Dropdown isFromHome={isFromHome} />
      </nav>
    </>
  );
};
export default Navbar;
