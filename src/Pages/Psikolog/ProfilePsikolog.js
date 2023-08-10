import React, { useEffect, useState } from "react";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import { useNavigate } from "react-router-dom";
import iniWeh from "../../components/img/darwan.jpg";
import clock from "../../components/img/doctor/clock.png";
import calendar from "../../components/img/doctor/calendar.png";
import '../../App.css'
import '../../css/font.css';

function ProfilePsikolog() {
    let navigate = useNavigate()

    // Cek apakah data sesi (misalnya token) ada dalam localStorage
    const isLoggedInPsikolog = localStorage.getItem('id_psikolog');
    const [Psikolog, setPsikolog] = useState(null);
    const [JanjiTemu, setJanjiTemu] = useState([]);
    const [user, setUser] = useState(null);
    console.log(user)
    // Memanggil Fetch Psikolog saat di Render pertama kali
    useEffect(() => {
      fetchPsikolog();
    }, []);

     // Memanggil Fetch JanjiTemu saat di Render pertama kali
    useEffect(() => {
      fetchJanjiTemu(Psikolog);
    }, [Psikolog]);

    // Memanggil Fetch User saat di render Pertama Kali
    useEffect(() => {
      fetchUser(JanjiTemu);
    }, [JanjiTemu]);

    // Session Jika Belum Login Psikolog 
    useEffect(() => {
      if (!isLoggedInPsikolog) {
        // Navigate Ke Halaman Login
        navigate('/psikolog/admin/login');
      }
    })

    // Mengambil Data Psikolog Tergantung yang kita Pesan
    const fetchPsikolog = async () => {
      try {
        const response = await fetch(`https://api.darwan.me/api/listPsikolog`);
        const data = await response.json();

        const selectedPsikolog = data.find((getPsikolog) => getPsikolog.username_psikolog === isLoggedInPsikolog);
        setPsikolog(selectedPsikolog);

      } catch (error) {
        console.log(error.message);
      }
    };

    // Mengambil Pesanan
    const fetchJanjiTemu = async (Psikolog) => {
      try {
        const response = await fetch(`https://api.darwan.me/api/listJanjiTemu`);
        const data = await response.json();

        const selectedPesanan = data.filter((getPesanan) => getPesanan.id_psikolog === Psikolog.id_psikolog);
        setJanjiTemu(selectedPesanan);

      } catch (error) {
        console.log(error.message);
      }
    };

     // Mengambil User Berdasarkan session
    const fetchUser = async (JanjiTemu) => {
      try {
        const response = await fetch(`https://api.darwan.me/user`);
        const data = await response.json();
        
        const selectedUser = data.find((getuser) => getuser.id_user === 1);
        setUser(selectedUser);

      } catch (error) {
      console.log(error.message);
      }
    };

  return (
   <>
   <Navbar />
   <div className="profile-psikolog w-full min-h-screen py-20">
      <div className="container mx-auto px-2">
        <h1 className="font-bold text-3xl mb-24 ml-8 fontLoginn">Profile Psikolog</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 items-center gap-8 fontLoginn">
          <img src={iniWeh} alt="unsplash.com" className="rounded-full md:w-80 md:h-80 w-60 h-60 mx-auto" />
          {Psikolog && (
          <div className="text-center">
            <h1 className="font-bold text-4xl">{Psikolog.nama_psikolog}</h1>
            <p className="font-medium text-xl">{Psikolog.spesialisasi}</p>
            <p className="font-medium text-2xl">{Psikolog.gender}</p>
            <div className="flex flex-col mt-10 gap-4">
              <button className="bg-blue-600 w-64 py-2 rounded-xl mx-auto text-white font-medium hover:bg-blue-700 transition-all">Edit Profile</button>
              <button className="bg-blue-600 w-64 py-2 rounded-xl mx-auto text-white font-medium hover:bg-blue-700 transition-all">Lupa Password</button>
            </div>
          </div>
          )}
        </div>

        <div className="mt-28 px-8 fontLoginn grid">
          <div className="md:text-start text-end">
            <button className="border border-black px-10 py-2 rounded-xl mb-14">Pesanan Aktif</button>
          </div>
         
          <div className="grid md:grid-cols-3 gap-6">
            {JanjiTemu.map((listJanjiTemu) => (
              <div key={listJanjiTemu.id} className="p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl">
                <img src={iniWeh} alt="unsplash.com" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <div className="text-center">
                  <h1 className="font-semibold text-xl text-gray-700 mt-2">{listJanjiTemu.nama_user}</h1>
                  <p className="text-gray-500">S1 Psikolog</p>

                    <div>

                    </div>

                    <div className="flex justify-center mt-1 mr-2 md:mr-4">
                      <img src={calendar} className="w-4 h-4 mr-2" />
                      <p>{listJanjiTemu.tanggalPesan}</p>
                    </div>
                    
                    <div className="flex justify-center mt-1 mr-2 md:mr-4">
                      <img src={clock} className="w-4 h-4 mr-2"/>
                      <p className="ml-3">{listJanjiTemu.jamPesan}</p>
                    </div>
                  <button className="bg-blue-600 w-40 py-2 rounded-lg mx-auto text-white font-semibold hover:bg-blue-700 transition-colors mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Booking Selesai
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
   <Footer />
   </>
  );
}

export default ProfilePsikolog;


