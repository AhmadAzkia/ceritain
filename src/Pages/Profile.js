import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { useNavigate } from "react-router-dom";
import '../App.css'
import '../css/font.css';

function Profile() {
  let navigate = useNavigate()

    // Cek apakah data sesi (misalnya token) ada dalam localStorage
    const isLoggedIn = !!localStorage.getItem('token');

    if (!isLoggedIn) {
      // Jika pengguna sudah login, arahkan ke halaman lain (misalnya halaman profile)
      navigate('/login');
      return null;
    }
  return (
   <>
   <Navbar />
      <div className="fontLoginn">
        {/* PROFILE */}
        <h1 className="ml-5 mt-3 text-xl font-medium md:text-2xl md:ml-12 md:mt-5">My Account</h1>

        <div className="md:flex md:justify-center mt-5 md:mt-10">
          <div className="flex justify-center">
            <img src="https://img.freepik.com/free-icon/user_318-552199.jpg" alt="" className="w-32 h-32 md:w-40 md:h-40"/>
          </div>

          <div className="md:ml-20">
            <div>
              <h1 className="text-center mt-2 font-medium text-xl md:text-2xl md:mt-0">Darwan</h1>
            </div>
            <div>
              <h2 className="text-center font-medium text-lg md:text-xl">@Darwannneee</h2>
            </div>

            {/* 2 button di Profile */}
            <div className="flex justify-center mt-3 md:mt-7">
              <button className="border w-28 h-6 rounded-lg bgWarna text-white text-xs md:text-base md:w-36 md:h-8 hover:shadow-md">
                Edit Profile
              </button>
            </div>

            <div className="flex justify-center mt-2 md:mt-3">
              <button className="border w-28 h-6 rounded-lg bgWarna text-white text-xs md:text-base md:w-36 md:h-8 hover:shadow-md">
                Lupa Password
              </button>
            </div>

          </div>
        </div>



        {/* PESANAN */}
        <div className="mt-20 relative p-4">
          <button className="absolute bottom-0 right-0 mr-5 border text-xs w-28 h-7 rounded-lg font-medium md:left-0 md:ml-28 md:text-base md:w-36 md:h-9">
            Pesanan Aktif
          </button>
        </div>

      <div className="md:flex justify-center">
        <div className="mt-10 border rounded-lg w-56 md:w-96 mx-auto">
          <div className="flex justify-center">
            <img src="https://kerma.widyatama.ac.id/wp-content/uploads/2021/05/blank-profile-picture-973460_1280.png" alt="" className="w-20 md:w-32 mt-5 rounded-lg" />
          </div>

          <div>
            <h2 className="text-center mt-2 font-medium text-base md:text-lg">Ahmad Azkia</h2>
            <h3 className="text-center text-sm md:text-base">S1 Psikologi</h3>
          </div>

          <div className="text-xs md:text-sm text-center mt-10">
            <p>Tanggal : 15 Agustus 2022</p>
            <p>Jam : 10;30</p>
          </div>

          <div className="mt-5 mb-5
           text-sm text-center">
            <button className="border w-32 md:w-40 h-6 md:h-8 bgWarna text-white rounded-lg hover:shadow-md">Booking Selesai</button>
          </div>
        </div>

        <div className="mt-10 border rounded-lg w-56 md:w-96 mx-auto">
          <div className="flex justify-center">
            <img src="https://kerma.widyatama.ac.id/wp-content/uploads/2021/05/blank-profile-picture-973460_1280.png" alt="" className="w-20 md:w-32 mt-5 rounded-lg" />
          </div>

          <div>
            <h2 className="text-center mt-2 font-medium text-base md:text-lg">Ahmad Azkia</h2>
            <h3 className="text-center text-sm md:text-base">S1 Psikologi</h3>
          </div>

          <div className="text-xs md:text-sm text-center mt-10">
            <p>Tanggal : 15 Agustus 2022</p>
            <p>Jam : 10;30</p>
          </div>

          <div className="mt-5 mb-5
           text-sm text-center">
            <button className="border w-32 md:w-40 h-6 md:h-8 bgWarna text-white rounded-lg hover:shadow-md">Booking Selesai</button>
          </div>
        </div>
      </div>
      </div>
   <Footer />
   </>
  );
}

export default Profile;
