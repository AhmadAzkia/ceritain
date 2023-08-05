import React, { useState, useEffect } from "react";
import '../App.css'
import '../css/font.css';
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Darwan from "../components/img/darwan.jpg";

// Import Image
import ImgSearch from "../components/img/doctor/search.png"
import ImgClock from "../components/img/doctor/clock.png"
import ImgLocation from "../components/img/doctor/location.png";

function Doctor() {
  const [dokter, setDokter] = useState([]);

  useEffect(() => {
    fetchDokter();
  }, []);

  // Mengambil Data Dokter
  const fetchDokter = async() => {
    try {
      const response = await fetch('https://api.darwan.me/api/listPsikolog'); // Ganti dengan endpoint URL sesuai dengan backend Anda
      const data = await response.json();
      setDokter(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
    <Navbar />

    <div className="flex-col justify-center mt-14 flex items-center">

      <div className="baris ml-auto flex">
        <input className="w-56 p-2 ps-3 border shadow-sm mr-3 rounded-md" placeholder="Seacrh" type="text" name="" id="" />
        <img src={ImgSearch} className="w-10 h-10 mr-10"/>
      </div>

      <div className="baris mt-8 grid md:grid-cols-3 grid-cols-1 gap-16 px-10">
        {dokter.map((listDokter) => (
          <div className="kol border text-center bg-white shadow-md p-14">
          <img src={Darwan} className="w-24 h-24 mx-auto rounded-full"/>
          <h1 className="text-2xl mt-3 fontLoginn">{listDokter.Nama_Dokter}</h1>
          <small className="text-slate-500">{listDokter.Spesialisasi}</small>
          <p className="mb-1 mt-5 fontDeskripsi text-sm/loose">
            {listDokter.Deskripsi}
          </p>

          {/* Clock */}
          <div className="flex justify-center items-center mt-4">
            <img src={ImgClock} className="w-4 h-4" /> 
            <p className="text-xs ml-2">
              16 PM - 12 PM
            </p>
          </div>

          {/* Location */}
          <div className="flex justify-center items-center mt-3">
            <img src={ImgLocation} className="w-4 h-4" /> 
            <p className="text-xs ml-2 font-bold">
              {listDokter.Alamat}
            </p>
          </div>

          <button className="px-7 py-2 bg-[#5A96E3] rounded-lg text-white mt-6 fontDeskripsi" type="submit">Buat Janji Sekarang</button>
        </div>
        ))}
      </div>

    </div>

    <Footer />
    </>
    
  );
}

export default Doctor;
