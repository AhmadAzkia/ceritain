/* eslint-disable react/jsx-no-undef */
import React from "react";
import '../css/font.css';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
function Login() {
  let navigate = useNavigate()
  return (
    <>
    <Navbar />
    <div className="w-full min-h-screen grid place-items-center bg-[#F6F8FD]">
      <div className="w-96 bg-white shadow rounded-xl px-14">
        <h1 className="text-center text-2xl fontLogo mt-8 mb-2">
                <span className="text-4xl">C</span>
                ERITAIN
              </h1>
        <p className="text-center text-slate-700 fontLoginn text-sm">Hey, Enter your details to get sign in to your account</p>
        <div className="flex flex-col mt-7 gap-2 fontLoginn">
          <input className="w-full h-10 ps-2 border rounded-md text-sm" type="email" name="" id="" placeholder="Enter Email"  />
          <input className="w-full h-10 ps-2 border rounded-md text-sm" type="password" name="" id="" placeholder="Password" />
        </div>
        <div className="flex flex-row">
          <button className="my-5 text-sm fontLoginn">Having Trouble In Sign In ?</button>
        </div>
        <button className="w-full h-10 bg-blue-300 font-semibold rounded-md text-sm fontLoginn bg-opacity-75" type="submit">Sign In</button>
        <div className="text-xs fontLoginn mt-4 text-center">- Or Sign with -</div>
        <div className="flex flex-row mt-7 gap-2 fontLoginn">
          <input className="w-full h-10 ps-2 border rounded-md text-sm" type="email" name="" id="" placeholder="Enter Email"  />
          <input className="w-full h-10 ps-2 border rounded-md text-sm" type="password" name="" id="" placeholder="Password" />
        </div>
        <div className="flex flex-row gap-2 mt-5 mb-5">
        <p className="text-sm fontLoginn">Don't have an account ?</p>
        <button className="font-semibold text-sm fontLoginn" onClick={()=>navigate('/')}>Create</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
