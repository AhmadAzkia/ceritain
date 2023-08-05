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

   <Footer />
   </>
  );
}

export default Profile;
