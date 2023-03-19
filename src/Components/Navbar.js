import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  return (
    <div className="bg-orange-600 font-medium p-6 fixed w-full top-0">
      <nav className="">
        <div className="flex justify-between container">
          <div>
            <Link
              to="/"
              className="text-white text-4xl cursor-pointer py-8 font-extrabold "
            >
              List It
            </Link>
          </div>
          <div
            className="flex flex-col space-y-1 cursor-pointer md:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <span className="bg-white h-1 w-6 rounded"></span>
            <span className="bg-white h-1 w-6 rounded"></span>
            <span className="bg-white h-1 w-6 rounded"></span>
          </div>
          <div className="hidden md:flex space-x-5 items-center">
            <Link to="/" className="text-white text-xl cursor-pointer">
              Home
            </Link>
            <Link to="/" className="text-white text-xl cursor-pointer">
              About
            </Link>
            <Link
              to="/"
              className="text-md cursor-pointer bg-orange-600 text-white py-2 px-6 rounded-full border-solid border-2 border-white hover:bg-white hover:text-orange-600 hover:border-orange-600"
            >
              Login/Signup
            </Link>
          </div>
        </div>
        <div
          className={
            "flex flex-col bg-white absolute left-0 top-20 p-5 w-full space-y-5 md:hidden " +
            (menuToggle ? "hidden" : "")
          }
        >
          <Link to="/" className="text-orange-500 text-xl cursor-pointer">
            Home
          </Link>
          <Link to="/" className="text-orange-500 text-xl cursor-pointer">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
