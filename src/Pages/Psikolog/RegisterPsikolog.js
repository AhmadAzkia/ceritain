/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import '../../css/font.css';
import logo from "../../components/img/google.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/home/Navbar";
import axios from "axios";

function RegisterPsikolog() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spesialisasi, setSpesialisasi] = useState("");
  const [deksripsi, setDeskripsi] = useState("");
  const [gender, setGender] = useState("");
  const [nomerTelepon, setNomerTelepon] = useState("");
  const [kota, setKota] = useState("");

   const [image, setImage] = useState(null);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSpesialisasiChange = (e) => {
    setSpesialisasi(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDeskripsiChange = (e) => {
    setDeskripsi(e.target.value);
  };

  const handleNomerTelepon = (e) => {
    setNomerTelepon(e.target.value);
  };

  const handleKotaChange = (e) => {
    setKota(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Jika username nya kurang dari 6 maka gagal
    if (username.length < 6) {
      alert("Username harus memiliki minimal 6 karakter");
      return;
    }

    // Jika Password nya kurang dari 8 kasih notifikasi
    if (password.length < 8) {
      alert("Password harus memiliki minimal 8 karakter");
      return;
    }

    const formData = new FormData();
      formData.append('name', name);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('spesialisasi', spesialisasi);
      formData.append('deskripsi', deksripsi);
      formData.append('gender', gender);
      formData.append('nomerTelepon', nomerTelepon);
      formData.append('kota', kota);
      formData.append('image', image);
    
    axios
      .post("https://api.darwan.me/api/psikolog/createPsikolog", formData)
      .then((response) => {
        console.log(response.data);
        // Lakukan tindakan yang diperlukan setelah berhasil registrasi
        alert("Registrasi Berhasil");

        // Jika berhasil Register setRedirect nya menjadi tRUE
        setRedirectToLogin(true);
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

  let navigate = useNavigate();

  // Jika setRedirect nya true maka Langsung Navigate ke halaman Login
  if (redirectToLogin) {
      navigate('/login');
      return null;
  }
  return (
    
    <>
    <Navbar />
    <form onSubmit={handleSubmit}>
      <div className="w-full min-h-screen grid place-items-center bg-[#F6F8FD]">
        <div className="w-96 my-24 bg-white shadow rounded-xl px-14">
          <h1 className="text-center text-2xl fontLogo mt-8 mb-2">
                  <span className="text-4xl">C</span>
                  ERITAIN
                </h1>
          <p className="text-center text-slate-700 fontLoginn text-sm">Buat akun Pskilog anda sendiri !</p>
          <div className="flex flex-col mt-7 gap-2 fontLoginn">

            {/* Nama Psikologi */}
            <p className="text-sm fontLoginn">Nama Psikolog*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="name" id="name" value={name} onChange={handleNameChange} placeholder="Name" required  />

            {/* Username Psikologi */}
            <p className="text-sm fontLoginn">Username Psikolog*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="username" id="username" value={username} onChange={handleUsernameChange} placeholder="Username" required  />

            {/* Password Psikologi */}
            <p className="text-sm fontLoginn">Password Psikolog*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="password" name="Password"id="password" value={password} onChange={handlePasswordChange}placeholder="Password" required  />

            {/* Spesialis Psikologi */}
            <p className="text-sm fontLoginn">Spesialisasi*</p>
            <select id="spesialisasi" name="spesialisasi" className="w-full h-10 ps-2 border rounded-md text-sm" onChange={handleSpesialisasiChange} value={spesialisasi}>
            <option value="" selected disabled>Pilih Spesialisasi</option>
              <option value="Percintaan">Percintaan</option>
              <option value="Keluarga">Keluarga</option>
            </select>

            {/* Deksripsi Diri anda */}
            <p className="text-sm fontLoginn">Deskripsi*</p>
            <textarea className="w-full h-20 ps-2 border rounded-md text-sm text-center justify-center" type="text" name="deskripsi" id="deskripsi" value={deksripsi} onChange={handleDeskripsiChange} placeholder="Deskripsi Diri Anda" required  />

            {/* Gender */}
            <p className="text-sm fontLoginn">Gender*</p>
            <select id="gender" name="gender" className="w-full h-10 ps-2 border rounded-md text-sm" onChange={handleGenderChange} value={gender}>
              <option value="" selected disabled>Pilih Gender</option>
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>

            {/* Nomer Telepon */}
            <p className="text-sm fontLoginn">Nomer Telepon*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="nomertelepon"id="nomertelepon" value={nomerTelepon} onChange={handleNomerTelepon}placeholder="Nomer Telpon" required  />

            {/* Kota */}
            <p className="text-sm fontLoginn">Kota*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="kota"id="kota" value={kota} onChange={handleKotaChange} placeholder="Kota" required  />

            {/* Poto Profile */}
            <p className="text-sm fontLoginn">Poto Profile*</p>
            <label class="flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>

              <span class="mt-2 text-base leading-normal">Pilih Poto</span>
              <input type="file" class="hidden" onChange={handleImageChange} />
              {image && <img src={image} alt="Profile Picture" />}
            </label>
          </div>
          <button className="w-full h-10 bg-blue-300 font-semibold rounded-md text-sm fontLoginn bg-opacity-75 mt-10" type="submit">Sign Up</button>
          <div className="text-xs fontLoginn mt-4 text-center">-- Or --</div>
            <div className="flex justify-center items-center mt-5 gap-2 fontLoginn">
              <img className="text-2xl w-6 cursor-pointer" src={logo} alt="" /><p className="text-sm fontLoginn">Google</p>
            </div>
          <div className="flex flex-row gap-2 mt-5 mb-7 pl-5">
          <p className="text-sm fontLoginn">Already have an account?</p>
          <button className="font-semibold text-sm fontLoginn" onClick={()=>navigate('/login')}>Log In</button>
          </div>
        </div>
      </div>
    </form>

    {/* Jika Registrasi Berhasil maka langsung direct ke halaman Login */}
   </>
  );
}

export default RegisterPsikolog;
