import React from 'react';
import Navbar from "../../components/home/Navbar"
import Footer from "../../components/home/Footer"
import { useNavigate } from 'react-router-dom';

function KirimEmail() {

  let navigate = useNavigate();

  function redirectToProfile () {
    navigate('/profile')
  }
  return (
    <>
 <Navbar />
    <div className="flex justify-center items-center my-24  md:my-40">
            <div className="p-8 mx-11 max-w-md text-center">
                <div className="flex items-center justify-center bg-[#5A96E3]  rounded-full h-12 w-12 mx-auto">
                  <img src="https://cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/mail.svg" alt="Mail Icon" className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl font-extrabold mt-4 mb-2 text-[#5A96E3] ">Email Konfirmasi</h1>
                <p className="text-gray-600 mb-6">Terimakasih telah Booking! Email telah berhasil terkirim ke email Kamu dengan rincian detail tentang Info Booking. Please, check your inbox or Spam</p>
                <button onClick={redirectToProfile} className="bg-[#5A96E3] text-white py-2 px-4 rounded-lg w-full focus:outline-none"> Halaman Profile</button>
            </div>
      </div>
    <Footer />
  </>

);
}

export default KirimEmail;
