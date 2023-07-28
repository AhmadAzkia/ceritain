import React, { useState } from "react";
import '../App.css'
import '../css/font.css';
import { useNavigate } from "react-router-dom";

function Doctor() {
  return (
    <div className="w-full flex-col justify-center gap-10 min-h-screen bg-[#F6F8FD] flex items-center">
      <div className="baris ml-auto">
        <input className="w-56 p-2 ps-3 shadow" placeholder="Seacrh" type="text" name="" id="" />
      </div>
      <div className="baris grid md:grid-cols-3 grid-cols-1 gap-16 px-10">
        <div className="kol text-center bg-white shadow p-10">
          <h1 className="text-5xl mb-10">😊</h1>
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, doloribus illo suscipit nisi nobis
          </p>
          <button className="px-8 py-2 bg-sky-300 font-bold rounded" type="submit">Buat Janji Sekarang</button>
        </div>
        <div className="kol text-center bg-white shadow p-10">
          <h1 className="text-5xl mb-10">😊</h1>
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, doloribus illo suscipit nisi nobis
          </p>
          <button className="px-8 py-2 bg-sky-300 font-bold rounded" type="submit">Buat Janji Sekarang</button>
        </div>
        <div className="kol text-center bg-white shadow p-10">
          <h1 className="text-5xl mb-10">😊</h1>
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, doloribus illo suscipit nisi nobis
          </p>
          <button className="px-8 py-2 bg-sky-300 font-bold rounded" type="submit">Buat Janji Sekarang</button>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
