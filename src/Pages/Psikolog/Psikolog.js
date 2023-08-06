import React, { useState, useEffect } from "react";
import '../../App.css'
import '../../css/font.css';
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";

// Import Image
import ImgSearch from "../../components/img/doctor/search.png"
import ImgClock from "../../components/img/doctor/clock.png"
import ImgLocation from "../../components/img/doctor/location.png";

function Psikolog() {
  const [Psikolog, setPsikolog] = useState([]);

  useEffect(() => {
    fetchPsikolog();
  }, []);

  // Mengambil Data Dokter
  const fetchPsikolog = async() => {
    try {
      const response = await fetch('https://api.darwan.me/api/listPsikolog'); // Ganti dengan endpoint URL sesuai dengan backend Anda
      const data = await response.json();
      setPsikolog(data);
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

      <div className="baris mt-8 grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-16 px-4 md:px-10">
        {Psikolog.map((listPsikolog) => (
          <div key={listPsikolog.id} className="kol border text-center bg-white shadow-md p-8 md:p-14 rounded-lg flex flex-col">
            <div className="relative">
              <img src={listPsikolog.imageurl} className="w-24 h-24 mx-auto rounded-full" alt="" />

              <div className={`absolute top-0 right-0 text-white rounded-full p-1 ${listPsikolog.status === 'Available' ? 'bg-[#5A96E3]' : 'bg-red-500'}`}>
                <img src={ImgClock} className="w-4 h-4" alt="Clock" />
              </div>
            </div>
            <h1 className="text-xl mt-3 font-semibold">{listPsikolog.nama_psikolog}</h1>
            <small className="text-slate-500 block">{listPsikolog.spesialisasi}</small>
            <p className="mb-4 mt-5 text-gray-600 text-sm flex-grow">{listPsikolog.deskripsi}</p>

            {/* Clock */}
            <div className="flex justify-center items-center">
              <p className="text-xs ml-2">
                <span className="font-bold">{listPsikolog.status}</span>
                : 16 PM - 12 PM</p>
            </div>

            {/* Location */}
            <div className="flex justify-center items-center mt-2">
              <img src={ImgLocation} className="w-4 h-4" alt="Location" />
              <p className="text-xs ml-2 font-bold">{listPsikolog.kota}</p>
            </div>

            <button className="px-6 py-2 mt-6 bg-[#5A96E3] rounded-lg text-white font-semibold hover:bg-blue-700 focus:outline-none focus:bg-blue-700" type="submit">Buat Janji Sekarang</button>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
    
  );
}

export default Psikolog;
