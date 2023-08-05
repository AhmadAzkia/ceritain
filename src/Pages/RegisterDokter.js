/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import '../css/font.css';
import logo from "../components/img/google.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import axios from "axios";

function RegisterDokter() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

    axios
      .post("http://localhost:9000/register", { name, username, password, image })
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
        <div className="w-96 bg-white shadow rounded-xl px-14">
          <h1 className="text-center text-2xl fontLogo mt-8 mb-2">
                  <span className="text-4xl">C</span>
                  ERITAIN
                </h1>
          <p className="text-center text-slate-700 fontLoginn text-sm">Create your account now</p>
          <div className="flex flex-col mt-7 gap-2 fontLoginn">
            <p className="text-sm fontLoginn">Name*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="name" id="name"
            value={name} onChange={handleNameChange} placeholder="Name" required  />
            <p className="text-sm fontLoginn">Username*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="text" name="username" id="username"
            value={username} onChange={handleUsernameChange} placeholder="Username" required  />
            <p className="text-sm fontLoginn">Password*</p>
            <input className="w-full h-10 ps-2 border rounded-md text-sm" type="password" name="Password"id="password"
            value={password} onChange={handlePasswordChange}placeholder="Password" required  />
            <input type="file" onChange={handleImageChange} />
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

export default RegisterDokter;
