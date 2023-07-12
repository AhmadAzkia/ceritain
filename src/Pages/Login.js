import React from "react";

function Login() {
  return (
    <div className="w-full min-h-screen grid place-items-center bg-[#F6F8FD]">
      <div className="w-96 h-96 bg-white shadow rounded-xl px-14">
        <h1 className="text-center text-2xl font-bold mt-10 mb-2">Agent Login</h1>
        <p className="text-center text-slate-700 ">Hey, Enter Your Details To Get Sign In To Your Account</p>
        <div className="flex flex-col mt-6 gap-2">
          <input className="w-full h-10 ps-2 border rounded-md" type="email" name="" id="" placeholder="Enter Email" />
          <input className="w-full h-10 ps-2 border rounded-md" type="password" name="" id="" placeholder="Password" />
        </div>
        <p className="my-5">Having Trouble In Sign In ?</p>
        <button className="w-full h-10 bg-orange-300 font-bold" type="submit">Sign In</button>
      </div>
    </div>
  );
}

export default Login;
