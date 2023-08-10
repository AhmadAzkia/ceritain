import React, { useState, useEffect } from "react";
import '../../App.css'
import '../../css/font.css';
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import { useNavigate } from "react-router-dom";

// Import Image
import ImgSearch from "../../components/img/doctor/search.png"
import ImgClock from "../../components/img/doctor/clock.png"
import ImgLocation from "../../components/img/doctor/location.png";

function Psikolog() {
  const [Psikolog, setPsikolog] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fungsi untuk melakukan filter berdasarkan gender dan kategori masalah
  const filteredPsikolog = Psikolog.filter((psikolog) => {
    // Lakukan filter berdasarkan gender
    if (selectedGender && psikolog.gender !== selectedGender) {
      return false;
    }

    // Lakukan filter berdasarkan kategori masalah
    if (selectedCategory && psikolog.spesialisasi !== selectedCategory) {
      return false;
    }

    // Jika lolos filter atau tidak ada filter yang dipilih, maka tampilkan psikolog tersebut
    return true;
  });

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

  const navigate = useNavigate();

  // Cek apakah data sesi (misalnya token) ada dalam localStorage
  const isLoggedIn = localStorage.getItem('UsernameUser');
  const isLoggedInPsikolog = localStorage.getItem('id_psikolog');

  if (!isLoggedIn && !isLoggedInPsikolog) {
    // Jika pengguna sudah login, arahkan ke halaman lain (misalnya halaman profile)
    navigate('/login');
  }
  else if (!isLoggedIn && isLoggedInPsikolog) {
    // Jika pengguna sudah login, arahkan ke halaman lain (misalnya halaman profile)
    navigate('/psikolog/profile');
  }
  
  return (
    <>
    <Navbar />

    <div className="flex-col justify-center mt-14 flex items-center">
      
      <div className="animate-fade-in text-center">
        <h1 className="text-2xl font-bold mb-4 fontLoginn">Beberapa Psikolog yang berada di Ceritain</h1>
        <p className="text-gray-600 text-sm/loose fontDeskripsi">Temukan Psikolog terbaik untukmu</p>
      </div>

      {/* Tombol Search */}
      <div className="baris ml-auto flex mt-10">
        <input className="h-8 p-2 ps-3 border shadow-sm mr-3 rounded-md md:w-56 md:h-10" placeholder="Seacrh" type="text" name="" id="" />
        <img src={ImgSearch} className="w-8 h-8 md:w-10 md:h-10 mr-10"/>
      </div>

      {/* Filter Gender */}
      <div className="baris md:flex mt-8 text-center">
        {/* Filter Gender */}
        <select className="w-56 p-2 ps-3 border shadow-sm rounded-md bg-[#5A96E3] text-white text-center focus:outline-none " 
        style={{ textAlignLast: "center" }}
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}>
          <option value="" disabled selected>Filter Gender</option>
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>
        </select>

        {/* Filter Kategori Masalah */}
        <select className="w-56 p-2 ps-3 border shadow-sm rounded-md bg-[#5A96E3] text-white focus:outline-none mt-3 md:ml-4 md:mt-0"
         style={{ textAlignLast: "center" }} 
         value={selectedCategory}
         onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="" disabled selected>Filter Kategori Masalah</option>
          <option value="Keluarga">Keluarga</option>
          <option value="Percintaan">Percintaan</option>
          {/* Tambahkan opsi lain sesuai dengan kategori masalah yang ada */}
        </select>
      </div>

      <div className="baris mt-10 grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-16 px-10 md:px-20 md:mt-14">
        {filteredPsikolog.map((listPsikolog) => (
          <div key={listPsikolog.id} className="kol text-center bg-white shadow-md border p-8 md:p-14 rounded-lg flex flex-col transform transition-transform hover:scale-105">
            <div className="relative">
              <img src={listPsikolog.imageurl} className="w-24 h-24 mx-auto rounded-full" alt="" />

              <div className={`absolute top-0 right-0 text-white rounded-full p-1 ${listPsikolog.status === 'Available' ? 'bg-[#5A96E3]' : 'bg-red-500'}`}>
                <img src={ImgClock} className="w-4 h-4" alt="Clock" />
              </div>
            </div>
            <h1 className="text-xl mt-3 font-semibold">{listPsikolog.nama_psikolog}</h1>
            <small className="text-slate-500 block">Spesialisasi {listPsikolog.spesialisasi}</small>
            <small className="text-slate-500 block">{listPsikolog.gender}</small>
            <p className="mb-4 mt-5 text-gray-600 text-sm flex-grow">{listPsikolog.deskripsi}</p>

            {/* Iamge Clock */}
            <div className="flex justify-center items-center">
              <p className="text-xs ml-2">
                <span className="font-bold">{listPsikolog.status}</span>
                : 8 AM - 4 PM</p>
            </div>

            {/* Image Location */}
            <div className="flex justify-center items-center mt-2">
              <img src={ImgLocation} className="w-4 h-4" alt="Location" />
              <p className="text-xs ml-2 font-bold">{listPsikolog.kota}</p>
            </div>

          {/* Button Buat Janji Sekarang */}
            <button className="px-6 py-2 mt-6 bg-[#5A96E3] rounded-lg text-white font-semibold hover:bg-blue-700 focus:outline-none focus:bg-blue-700" type="submit" onClick={()=>navigate(`/psikolog/detailsPsikolog/${listPsikolog.id_psikolog}`)}>Buat Janji Sekarang</button>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
    
  );
}

export default Psikolog;
