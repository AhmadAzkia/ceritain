import React from "react";

function Login() {
  return (
    <div className="halaman-login">
        <div className="container">
          <div className="halaman-login-box w-96 h-96 bg-sky-800 shadow-xl">
              <h1>Agent Login</h1>
              <p>Hey, Enter Your Details To Get Sign In To Your Account</p>
              <div className="flex flex-col">
                <input type="email" name="" id="" placeholder="Enter Email" />
                <input type="password" name="" id="" placeholder="Password" />
              </div>
              <p>Having Trouble In Sign In ?</p>
              <button type="submit">Sign In</button>
          </div>
        </div>
    </div>
  );
}

export default Login;
