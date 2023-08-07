import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ImgLocation from "../../components/img/doctor/location.png";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import DatePicker from 'react-datepicker'; // Import react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for react-datepicker
import e from 'cors';
import axios from "axios";

function DetailsPsikolog() {
  const { id } = useParams(); // Get the id from the URL

  const [Psikolog, setPsikolog] = useState(null);
  const [JadwalPsikolog, setJadwalPsikolog] = useState(null);

  // Inisialisasi Jam yang dipilih dan Tanggal yang dipilih
  const [selectedJam, setSelectedJam] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [nama, setNama] = useState("");
  const [noTelepon, setNomerTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [tanggalPesan, setTanggalPesan] = useState("");
  const [Jam, setJam] = useState("");
  const [idJadwal, setIdJadwal] = useState("");
  // Inisialisasi User
  const [User, setSelectedUser] = useState(null);

  console.log(idJadwal)
  useEffect(() => {
    fetchPsikolog();
  }, []);

  useEffect(() => {
    fetchJadwalPsikolog(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    // Mengisi nilai nama_user dengan nilai User.nama_user saat komponen pertama kali dirender
    if (User) {
      setNama(User.nama_user);
    }
  }, [User])

  useEffect(() => {
    // Mengisi nilai nama_user dengan nilai User.nama_user saat komponen pertama kali dirender
    if (selectedDate) {
      setTanggalPesan(formatDate(selectedDate));
    }
  })

  useEffect(() => {
    // Mengisi nilai nama_user dengan nilai User.nama_user saat komponen pertama kali dirender
    if (selectedJam) {
      setJam(selectedJam);
    }
  }, [selectedJam])


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectJam = (jam) => {
    setSelectedJam(jam);
  };

  const handleIdJadwal = (idJadwal) => {
    setIdJadwal(idJadwal);
  };

  // Cek apakah data sesi (misalnya token) ada dalam localStorage
   const isLoggedIn = localStorage.getItem('UsernameUser');

  // Settting Agar Format Data nya di ubah Menjadi DD-MM-YYYY
  const formatDate = (date) => {
    const day = date.getDate().toString();
    const formattedDay = day.length === 1 ? `0${day}` : day;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month.toString().padStart(2, '0')}-${formattedDay}`;
  };

  // Mengambil Data Psikolog
  const fetchPsikolog = async () => {
    try {
      const response = await fetch(`https://api.darwan.me/api/listPsikolog/`);
      const data = await response.json();
      
      const parsedId = parseInt(id);
      const selectedPsikolog = data.find((psikolog) => psikolog.id_psikolog === parsedId);
      setPsikolog(selectedPsikolog);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Mengambil JadwalPsikolog Berdasarkan Tanggal yang di pilih dan Berdasarkan ID Psikolog yang di Lempar / di GET dari URL
  const fetchJadwalPsikolog = async (date) => {
    try {
      const response = await fetch(`https://api.darwan.me/api/JadwalPsikolog`);
      const data = await response.json();
      
      const formattedDate = formatDate(date);
      const parsedId = parseInt(id);
      const selectedJadwalPsikolog = data.filter((jadwalpsikolog) => jadwalpsikolog.tanggal === formattedDate && jadwalpsikolog.id_psikolog === parsedId);
      setJadwalPsikolog(selectedJadwalPsikolog);

      // Memeriksa apakah data yang sesuai dengan kriteria ditemukan atau tidak
      if (selectedJadwalPsikolog.length > 0) {
        setJadwalPsikolog(selectedJadwalPsikolog);
      } else {
        console.log("Data tidak ditemukan.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Mengambil JadwalPsikolog Berdasarkan Tanggal yang di pilih dan Berdasarkan ID Psikolog yang di Lempar / di GET dari URL
  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.darwan.me/user`);
      const data = await response.json();
      
      
      const selectedUser = data.find((user) => user.username === isLoggedIn);
      setSelectedUser(selectedUser);

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
  
    // Periksa apakah data psikolog dan user sudah tersedia
    if (Psikolog && User ) {
      const data = {
        idPsikolog: Psikolog.id_psikolog, // Ambil id dari Psikolog
        idUser: User.id_user, // Ambil id dari User
        namaUser: nama,
        emailUser: email,
        noTeleponUser: noTelepon,
        idJadwal: idJadwal,
        tanggalPesan: tanggalPesan,
        jamPesan: Jam, 
      };
  
      axios.post("https://api.darwan.me/api/createJanjiTemu", data)
        .then((response) => {
          console.log(response.data);
          // Lakukan tindakan yang diperlukan setelah berhasil registrasi
          alert("Registrasi Berhasil");
        })
        .catch((error) => {
          console.error(error.response.data);
          if (error.response.status === 409 && error.response.data.msg === 'Username is already taken') {
            // Jika status 409 (Conflict) dan pesan 'Username is already taken', tampilkan alert sesuai dengan respons API
            alert('Username sudah ada. Coba gunakan username lain.');
          } else {
            // Jika ada kesalahan lain atau respon tidak terdefinisi, tampilkan pesan kesalahan umum
            alert('Registrasi Gagal! Periksa kembali data yang diisi.');
          }
        });
        
        axios.put("https://api.darwan.me/updateJadwalPsikolog", data)
        .then((response) => {
          console.log(response.data);
          // Lakukan tindakan yang diperlukan setelah berhasil registrasi
          alert("Berhasil Hapu");
        })
        .catch((error) => {
          console.error(error.response.data);
          if (error.response.status === 409 && error.response.data.msg === 'Username is already taken') {
            // Jika status 409 (Conflict) dan pesan 'Username is already taken', tampilkan alert sesuai dengan respons API
            alert('Username sudah ada. Coba gunakan username lain.');
          } else {
            // Jika ada kesalahan lain atau respon tidak terdefinisi, tampilkan pesan kesalahan umum
            alert('Error Maneh.');
          }
        });
      
    } else {
      alert('Data psikolog atau data user tidak tersedia.');
    }
  };

  return (
    <>
      <Navbar />
    <div>
      {Psikolog && (
        
        <div className="flex flex-col items-center mt-14 lg:flex-row md:justify-between">
          <div className="text-center lg:w-1/2 lg:mr-10 md:mx-14">
            <h1 className="text-2xl font-bold mb-4 fontLoginn md:text-4xl">{Psikolog.nama_psikolog}</h1>
            <small className="text-slate-500 mb-6 block md:text-lg"> Spesialisasi {Psikolog.spesialisasi}</small>

            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mt-4 md:w-52 md:h-52">
                <img src={Psikolog.imageurl} className="w-full h-full object-cover" alt="" />
            </div>

            <div className="flex flex-col items-center mt-4">
                <span className="text-sm font-bold">
                {Psikolog.status === 'Available' ? 'Available' : 'Closed'}
                </span>
                {Psikolog.status === 'Available' ? (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </div>
            <p className="mt-4 text-gray-600 text-sm">{Psikolog.deskripsi}</p>

            {/* Kota */}
            <div className="flex justify-center items-center mt-3">
              <img src={ImgLocation} className="w-4 h-4" alt="Location" />
              <p className="text-xs ml-2 font-bold">{Psikolog?.kota}</p>
            </div>
          </div>

        {/* Pilih Tanggal untuk Memunculkan Jadwal Psikolog */}
          <div className="mt-6 lg:w-1/2 md:mr-16 text-center">
            <h2 className="text-lg font-semibold mb-2">Pilih Tanggal</h2>
            <div className="date-picker-container">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()} // Tidak memungkinkan memilih tanggal sebelum hari ini
                className="custom-date-picker p-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition-all text-center" // Tambahkan kelas CSS kustom
              />
            </div>
          
          {/* Jadwal Praktik Psikolog */}
            <h2 className="text-lg font-semibold mb-2 mt-6">Jadwal Praktik Psikolog</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Render jadwal sesuai dengan tanggal yang dipilih */}
              {JadwalPsikolog && JadwalPsikolog.length > 0 ? (
                JadwalPsikolog.map((jadwal) => (
                  <button
                    key={jadwal.id}
                    className={`w-24 h-10 m-2 rounded-lg ${
                      selectedJam === jadwal.jam ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                    } ${!jadwal.available && 'cursor-not-allowed opacity-50'}`}
                    onClick={() => {
                      handleSelectJam(jadwal.jam);
                      handleIdJadwal(jadwal.id);
                      }
                    }
                    disabled={!jadwal.available}
                  >
                    {jadwal.jam}
                  </button>
                ))
              ) : (
                <p>Jadwal tidak tersedia</p>
              )}
            </div>
          </div>
        </div>
      )}


      <div className="animate-fade-in text-center mt-16 md:mt-20">
        <h1 className="text-2xl font-bold mb-4 fontLoginn">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, adipisci.</h1>
        <p className="text-gray-600 text-sm/loose fontDeskripsi">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* Form Untuk Submit Pemesanan */}
      <form action="">
      {User && (
      <div className="w-full grid place-items-center">
        <div className="w-96 bg-white rounded-xl px-14">
          <div className="flex flex-col  mt-7 gap-2 fontLoginn">
            <div className="mt-4">
              <p className="">Nama Lengkap</p>
              <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="username" id="username" placeholder="Nama Lengkap" onChange={(e) => setNama(e.target.value)} required defaultValue={User.nama_user}  />
            </div>
            <div className="mt-4">
              <p className="">Nomer Telepon</p>
              <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="username" id="username" placeholder="Nomer Telepon" onChange={(e) => setNomerTelepon(e.target.value)} required/>
            </div>
            <div className="mt-4">
              <p className="">Email </p>   
              <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="username" id="username" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="mt-4">
              <p className="">Tanggal Pesan</p>   
              <input className="w-full h-10 ps-2 border rounded-md text-sm" type="date" name="username" id="username" placeholder="Tanggal Pesan" required  disabled value={formatDate(selectedDate)} onChange={(e) => setTanggalPesan(e.target.value)}/>
            </div>
            <div className="mt-4">
              <p className="">Jam Pesan</p>   
              <input className="w-full h-10 ps-2 border rounded-md text-sm" type="time" name="username" id="username" placeholder="Tanggal Pesan"  disabled value={selectedJam} onChange={(e) => setJam(e.target.value)}/>
            </div>
          </div>
            <button className="w-full h-10 bg-white-300 font-semibold rounded-md text-sm fontLoginn bg-opacity-75 mt-7 mb-8 bg-gray-300" type="submit" onClick={handleRegister}>Submit</button>
        </div>
      </div>
      )}
      </form>

      </div>
      <Footer />
    </>
  );
}

export default DetailsPsikolog;
