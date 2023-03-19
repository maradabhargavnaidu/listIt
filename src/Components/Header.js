import React from "react";
import Headerimg from "../assets/header.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-600 h-auto">
      <div className="flex flex-col text-white  mt-20 p-6 container w-full mx-auto justify-between md:flex-row">
        <div className=" text-left md:text-left flex flex-col justify-between items-start py-7">
          <p className="text-6xl md:text-8xl font-bold  md:font-semibold">
            The Shopping
          </p>
          <p className="text-6xl md:text-8xl font-bold md:font-semibold">
            List App
          </p>
          <p className="text-xl md:text-2xl mt-5  font-semibold">
            Make your shopping much better and
          </p>
          <p className="text-xl md:text-2xl  font-semibold">
            more convenient with a shopping list
          </p>
          <Link
            to="/"
            className="text-md cursor-pointer bg-orange-600 text-white py-2 px-10 rounded-full border-solid border-2 border-white hover:bg-white hover:text-orange-600 hover:border-orange-600 font-semibold mt-5"
          >
            Get Started
          </Link>
        </div>
        <div>
          <img
            src={Headerimg}
            className="h-[400px] rounded-md mt-6 block md:mt-0 self-center justify-self-center"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
