import React, { useEffect, useState } from "react";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import { useNavigate } from "react-router-dom";
import iniWeh from "../../components/img/darwan.jpg"
import '../../App.css'
import '../../css/font.css';

function ProfilePsikolog() {
    // const [session, setSession] = useState('');
    // let navigate = useNavigate()

    // useEffect(() => {
    //     const getSession = localStorage.getItem('id_psikologi');
    //     setSession(getSession);
    // })

    // // Cek apakah data sesi (misalnya token) ada dalam localStorage
    // const isLoggedIn = !!localStorage.getItem('id_psikolog');

    // if (!isLoggedIn) {
    //   // Jika pengguna sudah login, arahkan ke halaman lain (misalnya halaman profile)
    //   navigate('/psikolog/admin/login');
    //   return null;
    // }
  return (
   <>
   <Navbar />
   <div className="profile-psikolog w-full min-h-screen py-20">
      <div className="container mx-auto px-2">
        <h1 className="font-bold text-3xl mb-24 ml-8">Profile Psikolog</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 items-center gap-8">
          <img src={iniWeh} alt="unsplash.com" className="rounded-full md:w-80 md:h-80 w-60 h-60 mx-auto" />
          <div className="text-center">
            <h1 className="font-bold text-4xl">Darwan</h1>
            <p className="font-medium text-xl">Spesialis Keluarga</p>
            <p className="font-bold text-2xl">Pria</p>
            <div className="flex flex-col mt-10 gap-4">
              <button className="bg-blue-600 w-64 py-2 rounded-full mx-auto text-white font-bold hover:bg-blue-700 transition-all">Edit Profile</button>
              <button className="bg-blue-600 w-64 py-2 rounded-full mx-auto text-white font-bold hover:bg-blue-700 transition-all">Lupa Password</button>
            </div>
          </div>
        </div>
        <div className="mt-28 px-8">
          <div className="md:text-start text-end">
            <button className="border border-black px-10 py-2 rounded-full mb-14">Pesanan Aktif</button>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
            <div className="p-10 border border-black rounded-xl">
              <img src={iniWeh} alt="unsplash.com" className="w-36 h-28 rounded mx-auto" />
              <div className="text-center">
                <h1 className="font-bold text-2xl mt-2">Ahmad Azkia</h1>
                <p className="font-medium text-lg">S1 Psikolog</p>
                <p className="mt-24">Tangga : 15 Agustus 2022</p>
                <p>Jam : 10:30</p>
                <button className="bg-blue-600 w-48 py-2 rounded-full mx-auto text-white font-bold hover:bg-blue-700 transition-all mt-6">Booking Selesai</button>
              </div>
            </div>
            <div>
              <div className="p-10 border border-black rounded-xl">
                <img src={iniWeh} alt="unsplash.com" className="w-36 h-28 rounded mx-auto" />
                <div className="text-center">
                  <h1 className="font-bold text-2xl mt-2">Ahmad Azkia</h1>
                  <p className="font-medium text-lg">S1 Psikolog</p>
                  <p className="mt-24">Tangga : 15 Agustus 2022</p>
                  <p>Jam : 10:30</p>
                  <button className="bg-blue-600 w-48 py-2 rounded-full mx-auto text-white font-bold hover:bg-blue-700 transition-all mt-6">Booking Selesai</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer />
   </>
  );
}

export default ProfilePsikolog;
