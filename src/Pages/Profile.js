import React, { useState, useEffect} from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import clock from "../components/img/doctor/clock.png";
import calendar from "../components/img/doctor/calendar.png";
import { useNavigate } from "react-router-dom";
import '../App.css'
import '../css/font.css';

function Profile() {
  // Navigate
  let navigate = useNavigate();

  // Cek apakah data sesi (misalnya token) ada dalam localStorage
  const isLoggedIn = localStorage.getItem('UsernameUser');

  // PanggiL User
  const [user, setUser] = useState(null);
  const [pesanan, setPesanan] = useState([]);
  const [psikolog, setPsikolog] = useState([]);

console.log(psikolog);
  useEffect(() => {
    fetchUser();
  }, []);
  
  useEffect(() => {
      fetchPesanan(user);
  }, [user]);

  useEffect(() => {
    if (pesanan.length > 0) {
      fetchPsikolog(pesanan);
    }
}, [pesanan]);
  
  // Mengambil User Berdasarkan session
  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.darwan.me/user`);
      const data = await response.json();
      
      const selectedUser = data.find((getuser) => getuser.username === isLoggedIn);
      setUser(selectedUser);

    } catch (error) {
      console.log(error.message);
    }
  };

  // Mengambil Pesanan
  const fetchPesanan = async (user) => {
    try {
      const response = await fetch(`https://api.darwan.me/api/listJanjiTemu`);
      const data = await response.json();

      const selectedPesanan = data.filter((getPesanan) => getPesanan.id_user === user.id_user);
      setPesanan(selectedPesanan);

    } catch (error) {
      console.log(error.message);
    }
  };


  // Mengambil Data Psikolog Tergantung yang kita Pesan
  const fetchPsikolog = async (pesanan) => {
    try {
      const response = await fetch(`https://api.darwan.me/api/listPsikolog`);
      const data = await response.json();

      
      const idPsikologs = pesanan.map((item) => item.id_psikolog);
      const selectedPsikolog = data.filter((getPsikolog) => idPsikologs.includes(getPsikolog.id_psikolog));
      setPsikolog(selectedPsikolog);

    } catch (error) {
      console.log(error.message);
    }
  };
  

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

        {user && (
          <div className="md:flex md:justify-center mt-5 md:mt-10">
            
            <div className="flex justify-center">
              <img src={user.imageUrl} alt="" className="w-32 h-32 md:w-40 md:h-40"/>
            </div>
            
            <div className="md:ml-20">
              <div>
                <h1 className="text-center mt-2 font-medium text-xl md:text-2xl md:mt-0">{user.nama_user}</h1>
              </div>
              <div>
                <h2 className="text-center font-medium text-lg md:text-xl">@{user.username}</h2>
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
        )}

        {/* PESANAN */}
        <div className="mt-20 relative p-4">
          <button className="absolute bottom-0 right-0 mr-5 border text-xs w-28 h-7 rounded-lg font-medium md:left-0 md:ml-28 md:text-base md:w-36 md:h-9">
            Pesanan Aktif
          </button>
        </div>

      <div className="md:grid grid-cols-3">
      {pesanan.length === 0 ? (
          <div className="col-span-3 flex justify-center items-center h-32">
            <p className="text-center fontLoginn text-lg md:text-xl">Belum ada Pesanan!</p>
          </div>
          ) : (
        pesanan.map((getPesanan) => {
        const selectedPsikolog = psikolog.find((psikologItem) => psikologItem.id_psikolog === getPesanan.id_psikolog);
          return (
            <div className="justify-center">
              <div className="mt-10 border rounded-lg shadow-lg w-64 md:w-96 mx-auto">
                <div className="flex justify-center">
                {selectedPsikolog && (
                  <img src={selectedPsikolog.imageurl} alt="" className="w-20 md:w-32 mt-5 rounded-full" />
                )}
                </div>

                <div>
                {selectedPsikolog && (
                  <div>
                    <h2 className="text-center mt-2 font-medium text-base md:text-lg">{selectedPsikolog.nama_psikolog}</h2>
                    <h3 className="text-center text-xs md:text-base text-gray-500">Spesialisasi {selectedPsikolog.spesialisasi}</h3>
                    <h3 className="text-center text-xs md:text-base text-gray-500">{selectedPsikolog.gender}</h3>
                  </div>
                  )}
                </div>
            

                <div className="text-xs md:text-sm text-center mt-8">
                  <p>Nama Pemesan : {getPesanan.nama_user}</p>
                  <p>Email : {getPesanan.email_user}</p>
                  <p>No Telepon : {getPesanan.noTelepon_user}</p><br />

                  <div>
                    <div className="flex justify-center">
                      <img src={calendar} className="w-4 h-4 mr-2" />
                      <p>{getPesanan.tanggalPesan}</p>
                    </div>
                    
                    <div className="flex justify-center mt-1 mr-2 md:mr-4">
                      <img src={clock} className="w-4 h-4 mr-2"/>
                      <p className="ml-3">{getPesanan.jamPesan}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 mb-5
                text-sm text-center">
                  <button className="border w-32 md:w-40 h-6 md:h-8 bgWarna text-white rounded-lg hover:shadow-md">{getPesanan.status}</button>
                </div>
              </div>
            </div>
          );
        })
      )}
        </div>
    </div>

      <div className="text-center mt-6 md:mt-16">     
        <button class="inline-flex justify-center items-center mx-5 py-3 px-4 text-xs text-center text-white rounded-lg bg-[#5A96E3] hover:bg-blue-800 md:ml-7 md:text-sm fontLoginn" onClick={()=>navigate('/psikolog')}>
                  Buat Janji Temu Sekarang
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
        </button>
      </div>

   <Footer />
   </>
  );
}

export default Profile;