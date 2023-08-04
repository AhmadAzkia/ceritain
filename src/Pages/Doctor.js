import React from "react";
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
  return (
    <>
    <Navbar />

    <div className="flex-col justify-center mt-14 flex items-center">

      <div className="baris ml-auto flex">
        <input className="w-56 p-2 ps-3 border shadow-sm mr-3 rounded-md" placeholder="Seacrh" type="text" name="" id="" />
        <img src={ImgSearch} className="w-10 h-10 mr-10"/>
      </div>

      <div className="baris mt-8 grid md:grid-cols-3 grid-cols-1 gap-16 px-10">

        <div className="kol border text-center bg-white shadow-md p-14">
          <img src={Darwan} className="w-24 h-24 mx-auto rounded-full"/>
          <h1 className="text-2xl mt-3 fontLoginn">Darwan</h1>
          <small className="text-slate-500">Percintaan, Keluarga</small>
          <p className="mb-1 mt-5 fontDeskripsi text-sm/loose">
            Saya sudah menjadi Dokter spesialis selama 3 Tahun. Banyak sekali orang yang ingin bercerita kepada Saya.
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
              Bandung
            </p>
          </div>

          <button className="px-7 py-2 bg-[#5A96E3] rounded-lg text-white mt-6 fontDeskripsi" type="submit">Buat Janji Sekarang</button>
        </div>
        <div className="kol border text-center bg-white shadow-md p-14">
          <img src={Darwan} className="w-24 h-24 mx-auto rounded-full"/>
          <h1 className="text-2xl mt-3 fontLoginn">Darwan</h1>
          <small className="text-slate-500">Percintaan, Keluarga</small>
          <p className="mb-1 mt-5 fontDeskripsi text-sm/loose">
            Saya sudah menjadi Dokter spesialis selama 3 Tahun. Banyak sekali orang yang ingin bercerita kepada Saya.
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
              Bandung
            </p>
          </div>

          <button className="px-7 py-2 bg-[#5A96E3] rounded-lg text-white mt-6 fontDeskripsi" type="submit">Buat Janji Sekarang</button>
        </div>
        <div className="kol border text-center bg-white shadow-md p-14">
          <img src={Darwan} className="w-24 h-24 mx-auto rounded-full"/>
          <h1 className="text-2xl mt-3 fontLoginn">Darwan</h1>
          <small className="text-slate-500">Percintaan, Keluarga</small>
          <p className="mb-1 mt-5 fontDeskripsi text-sm/loose">
            Saya sudah menjadi Dokter spesialis selama 3 Tahun. Banyak sekali orang yang ingin bercerita kepada Saya.
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
              Bandung
            </p>
          </div>

          <button className="px-7 py-2 bg-[#5A96E3] rounded-lg text-white mt-6 fontDeskripsi" type="submit">Buat Janji Sekarang</button>
        </div>
        
        
      </div>
    </div>

    <Footer />
    </>
    
  );
}

export default Doctor;
