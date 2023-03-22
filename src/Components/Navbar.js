import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  const [scrollColor, setScrollColor] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY >= 10) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };
  window.addEventListener("scroll", changeNavBg);
  return (
    <div
      className={
        "font-medium p-6 fixed w-full transition-all transition-5000 ease-in-out top-0 " +
        (scrollColor ? "bg-white" : "bg-blue-500")
      }
    >
      <nav className="">
        <div className="flex justify-between container">
          <div>
            <Link
              to="/"
              className={
                "text-3xl cursor-pointer py-8 font-bold md:text-5xl " +
                (scrollColor ? "text-blue-500" : "text-white")
              }
            >
              List It
            </Link>
          </div>
          <div
            className="flex flex-col space-y-1 cursor-pointer md:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <span
              className={
                "h-1 w-6 rounded " + (scrollColor ? "bg-blue-500" : "bg-white")
              }
            ></span>
            <span
              className={
                "h-1 w-6 rounded " + (scrollColor ? "bg-blue-500" : "bg-white")
              }
            ></span>
            <span
              className={
                "h-1 w-6 rounded " + (scrollColor ? "bg-blue-500" : "bg-white")
              }
            ></span>
          </div>
          <div className="hidden md:flex space-x-7 items-center">
            <Link to="/" className="text-white text-lg cursor-pointer">
              Home
            </Link>
            <Link to="/" className="text-white text-lg cursor-pointer">
              About
            </Link>
            <Link
              to="/register"
              className="text-lg cursor-pointer bg-blue-500 text-white py-2 px-8 rounded-full border-solid border-2 border-white hover:bg-white hover:text-blue-500 hover:border-blue-500"
            >
              Login/Signup
            </Link>
          </div>
        </div>
        <div
          className={
            "flex flex-col bg-blue-100 absolute left-0 top-20 p-5 w-full space-y-5 md:hidden " +
            (menuToggle ? "hidden" : "")
          }
        >
          <Link to="/" className="text-blue-500 text-xl cursor-pointer">
            Home
          </Link>
          <Link to="/" className="text-blue-500 text-xl cursor-pointer">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
