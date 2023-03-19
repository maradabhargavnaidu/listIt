import React from "react";

const Login = () => {
  return (
    <div className="bg-blue-500 min-h-screen">
      <div className="container flex flex-col items-center justify-center h-screen">
        <form className="w-full max-w-md bg-white flex flex-col justify-center items-left space-y-4 rounded">
          <h1>Sign In to your account</h1>
          <label>Your Email</label>
          <input type="email" placeholder="Enter Email" className="rounded " />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
