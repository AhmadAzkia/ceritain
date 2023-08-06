import React, { useEffect, useState } from "react";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import { useNavigate } from "react-router-dom";
import '../../App.css'
import '../../css/font.css';

function ProfilePsikolog() {
    const [session, setSession] = useState('');
    let navigate = useNavigate()

    useEffect(() => {
        const getSession = localStorage.getItem('id_psikologi');
        setSession(getSession);
    })
    // Cek apakah data sesi (misalnya token) ada dalam localStorage
    const isLoggedIn = !!localStorage.getItem('id_psikolog');

    if (!isLoggedIn) {
      // Jika pengguna sudah login, arahkan ke halaman lain (misalnya halaman profile)
      navigate('/psikolog/admin/login');
      return null;
    }
  return (
   <>
   <Navbar />
        <h1>{session}</h1>
   <Footer />
   </>
  );
}

export default ProfilePsikolog;
