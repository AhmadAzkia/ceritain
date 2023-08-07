import React, { useState, useEffect} from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
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
      
      const selectedUser = data.find((getuser) => getuser.username === 'darwannneee');
      setUser(selectedUser);

    } catch (error) {
      console.log(error.message);
    }
  };

  // Mengambil Pesanan
  const fetchPesanan = async (user) => {
    try {
      const response = await fetch(`http://api.darwan.me/api/listJanjiTemu`);
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
              <img src="https://img.freepik.com/free-icon/user_318-552199.jpg" alt="" className="w-32 h-32 md:w-40 md:h-40"/>
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

    <div className="md:grid grid-cols-3 ">
      {pesanan.map((getPesanan) => {
      const selectedPsikolog = psikolog.find((psikologItem) => psikologItem.id_psikolog === getPesanan.id_psikolog);
        return (
          <div className="justify-center">
            <div className="mt-10 border rounded-lg w-56 md:w-96 mx-auto">
              <div className="flex justify-center">
              {selectedPsikolog && (
                <img src={selectedPsikolog.imageurl} alt="" className="w-20 md:w-32 mt-5 rounded-full" />
              )}
              </div>

              <div>
              {selectedPsikolog && (
                <h2 className="text-center mt-2 font-medium text-base md:text-lg">{selectedPsikolog.nama_psikolog}</h2>
                )}
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
        );
      })}
      
      </div>
    </div>
   <Footer />
   </>
  );
}

export default Profile;