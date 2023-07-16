/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import '../css/font.css';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/login", { username, password })
      .then((response) => {
        console.log(response.data);
        // Lakukan tindakan yang diperlukan setelah berhasil login
      })
      .catch((error) => {
        console.error(error.response.data);
        alert("Salah! Periksa Lagi Username atau Password");
        setError("Login gagal");
      });
  };

  let navigate = useNavigate()
  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmitLogin}>
      <div className="w-full min-h-screen grid place-items-center bg-[#F6F8FD]">
        <div className="w-96 bg-white shadow rounded-xl px-14">
          <h1 className="text-center text-2xl fontLogo mt-8 mb-2">
                  <span className="text-4xl">C</span>
                  ERITAIN
                </h1>
          <p className="text-center text-slate-700 fontLoginn text-sm">Hey, Enter your details to get sign in to your account</p>
          <div className="flex flex-col mt-7 gap-2 fontLoginn">
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="username" id="username" placeholder="Enter Email" required onChange={(e) => setUsername(e.target.value)}  />
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="password" name="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}  />
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
    </form>
    </>
  );
}

export default Login;
