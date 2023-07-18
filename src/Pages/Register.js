/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import '../css/font.css';
import logo from "../components/img/google.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import axios from "axios";

function Register() {
  let navigate = useNavigate()
  return (
    <>
    <Navbar />
    <form>
      <div className="w-full min-h-screen grid place-items-center bg-[#F6F8FD]">
        <div className="w-96 bg-white shadow rounded-xl px-14 -mt-20">
          <h1 className="text-center text-2xl fontLogo mt-8 mb-2">
                  <span className="text-4xl">C</span>
                  ERITAIN
                </h1>
          <p className="text-center text-slate-700 fontLoginn text-sm">Create your account now</p>
          <div className="flex flex-col mt-7 gap-2 fontLoginn">
            <p className="text-sm fontLoginn">Username*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="username" id="username" placeholder="Username" required  />
            <p className="text-sm fontLoginn">Password*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="username" id="username" placeholder="Password" required  />
          </div>
          <button className="w-full h-10 bg-blue-300 font-semibold rounded-md text-sm fontLoginn bg-opacity-75 mt-10" type="submit">Sign Up</button>
          <div className="text-xs fontLoginn mt-4 text-center">-- Or --</div>
            <div className="flex justify-center items-center mt-5 gap-2 fontLoginn">
              <img className="text-2xl w-6 cursor-pointer" src={logo} alt="" /><p className="text-sm fontLoginn">Google</p>
            </div>
          <div className="flex flex-row gap-2 mt-5 mb-7 pl-5">
          <p className="text-sm fontLoginn">Already have an account?</p>
          <button className="font-semibold text-sm fontLoginn" onClick={()=>navigate('/login')}>Log In</button>
          </div>
        </div>
      </div>
    </form>
   </>
  );
}

export default Register;
