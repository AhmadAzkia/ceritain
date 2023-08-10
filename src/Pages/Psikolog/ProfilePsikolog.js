import React, { useEffect, useState } from "react";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import { useNavigate } from "react-router-dom";
import iniWeh from "../../components/img/darwan.jpg";
import clock from "../../components/img/doctor/clock.png";
import calendar from "../../components/img/doctor/calendar.png";
import axios from "axios";
import '../../App.css'
import '../../css/font.css';

function ProfilePsikolog() {
    let navigate = useNavigate()

    // Cek apakah data sesi (misalnya token) ada dalam localStorage
    const isLoggedInPsikolog = localStorage.getItem('id_psikolog');
    const [Psikolog, setPsikolog] = useState(null);
    const [JanjiTemu, setJanjiTemu] = useState([]);
    const [user, setUser] = useState([]);

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
      if (JanjiTemu.length > 0) {
        fetchUser(JanjiTemu);
      }
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
        
        const idUser = JanjiTemu.map((item) => item.id_user);
        const selectedUser = data.filter((getuser) => idUser.includes(getuser.id_user));
        setUser(selectedUser);

      } catch (error) {
      console.log(error.message);
      }
    };

    function setStatus(idJanjiTemu, status) {
      console.log("Hallo")
     // Mengirim permintaan PUT ke server untuk mengubah status
     axios
      .put("https://api.darwan.me/api/JanjiTemu/setStatus", {
        idJanjiTemu: idJanjiTemu,
        status: status
      })
      .then((response) => {
       console.log(response.data);
       // Lakukan tindakan yang diperlukan setelah berhasil registrasi
       alert("Status berhasil di ubah")
       window.location.reload();

       // Jika berhasil Register setRedirect nya menjadi tRUE
       
      })
      .catch((error) => {
        console.error(error.response.data);
        if (error.response.status === 409 && error.response.data.msg === 'Username is already taken') {
          // Jika status 409 (Conflict) dan pesan 'Username is already taken', tampilkan alert sesuai dengan respons API
          alert('Username sudah ada. Coba gunakan username lain.');
        } else {
          // Jika ada kesalahan lain atau respon tidak terdefinisi, tampilkan pesan kesalahan umum
          alert('Registrasi Gagal! Periksa kembali username atau password');
        }
      });
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
            <h1 className="font-bold text-4xl fontLoginn">{Psikolog.nama_psikolog}</h1>
            <p className="font-medium text-gray-500 text-lg fontDeskripsi mt-2">Spesialisasi {Psikolog.spesialisasi}</p>
            <p className="font-medium text-gray-500 text-lg fontDeskripsi">{Psikolog.gender}</p>
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
          {JanjiTemu.length === 0 ? (
          <div className="col-span-3 flex justify-center items-center h-32">
            <p className="text-center fontLoginn text-lg md:text-xl">Belum ada Pesanan!</p>
          </div>
          ) : (
            JanjiTemu.map((listJanjiTemu) => {
              const selectedUser = user.find((userItem) => userItem.id_user === listJanjiTemu.id_user);
              return (
              <div key={listJanjiTemu.id} className="p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl">
                {selectedUser && (
                  <img src={selectedUser.imageUrl} alt={selectedUser.nama_user} className="w-24 h-24 rounded-full mx-auto mb-4" />
                )}
                <div className="text-center">
                  <h1 className="font-semibold text-xl text-gray-700 mt-2">{listJanjiTemu.nama_user}</h1>
                  <p className="text-gray-500">{listJanjiTemu.email_user}</p>

                  <div className="flex justify-center mt-4 mr-2 md:mr-4">
                    <img src={calendar} className="w-4 h-4 mr-2" />
                    <p>{listJanjiTemu.tanggalPesan}</p>
                  </div>
                    
                  <div className="flex justify-center mt-1 mr-2 md:mr-4">
                    <img src={clock} className="w-4 h-4 mr-2"/>
                    <p className="ml-3">{listJanjiTemu.jamPesan}</p>
                  </div>

                  <button className={`w-40 py-2 rounded-lg mx-auto text-white font-semibold  transition-colors mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                      listJanjiTemu.status === 'Menunggu'
                      ? 'bg-red-500 hover:bg-red-700'
                      : listJanjiTemu.status === 'Dikonfirmasi'
                      ? 'bg-blue-500'
                      : 'bg-green-500'
                      }`} onClick={() => { if (listJanjiTemu.status === 'Menunggu') { setStatus(listJanjiTemu.id, listJanjiTemu.status); } }} disabled={listJanjiTemu.status !== 'Menunggu'}>
                    {listJanjiTemu.status}
                  </button>
                </div>
              </div>
              );
            })
          )}
          </div>
        </div>

      </div>
    </div>
   <Footer />
   </>
  );
}

export default ProfilePsikolog;


