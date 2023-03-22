import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-blue-500 min-h-screen">
      <div className="container flex flex-col items-center justify-center h-screen mx-auto">
        <form className="w-full max-w-md bg-white flex flex-col justify-center items-left space-y-4 rounded-md p-6 space-y-5">
          <h1 className="font-medium text-2xl">Sign In to your account</h1>
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="rounded p-3 border-gray-400 border-2 outline-blue-500"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="rounded p-3 border-gray-400 border-2 outline-blue-500"
          />
          <div className="flex justify-between">
            <span className="flex space-x-2 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Remember me</p>
            </span>
            <a href="#">Forgot Password ?</a>
          </div>
          <button className="bg-green-500 p-3 rounded text-white">
            Sign In
          </button>
          <p>
            Don't have an account at?<Link to="/">SignUp</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
