import React from "react";
import '../css/font.css';
import { useNavigate } from "react-router-dom";

function Login() {
  let navigasi = useNavigate()
  return (
    <div className="w-full min-h-screen grid place-items-center bg-[#F6F8FD]">
      <div className="w-96 bg-white shadow rounded-xl px-14">
        <h1 className="text-center text-2xl fontLogo mt-8 mb-2">
                <span className="text-4xl">C</span>
                ERITAIN
              </h1>
        <p className="text-center text-slate-700">Hey, Enter your details to get sign in to your account</p>
        <div className="flex flex-col mt-7 gap-2">
          <input className="w-full h-10 ps-2 border rounded-md" type="email" name="" id="" placeholder="Enter Email" />
          <input className="w-full h-10 ps-2 border rounded-md" type="password" name="" id="" placeholder="Password" />
        </div>
        <p className="my-5">Having Trouble In Sign In ?</p>
        <button className="w-full h-10 bg-orange-300 font-semibold rounded-md" type="submit">Sign In</button>
        <p className="my-8">Don't have an account ?</p>
      </div>
    </div>
    
  );
}

export default Login;
