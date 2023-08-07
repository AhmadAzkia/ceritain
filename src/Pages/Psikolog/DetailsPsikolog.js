import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ImgLocation from "../../components/img/doctor/location.png";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import DatePicker from 'react-datepicker'; // Import react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for react-datepicker

function DetailsPsikolog() {
  const { id } = useParams(); // Get the id from the URL

  const [Psikolog, setPsikolog] = useState(null);
  const [JadwalPsikolog, setJadwalPsikolog] = useState(null);
  const [selectedJam, setSelectedJam] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); // State untuk tanggal dipilih

  useEffect(() => {
    fetchPsikolog();
  }, []);

  useEffect(() => {
    fetchJadwalPsikolog();
  }, []);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Jika Anda ingin mengambil data JadwalPsikolog berdasarkan tanggal yang dipilih,
    // Anda dapat melakukan pemanggilan API atau operasi lain di sini.
    // Contoh:
    // fetchJadwalPsikologByDate(date);
  };

  const handleSelectJam = (jam) => {
    setSelectedJam(jam);
  };

  const currentDate = new Date();
      // Get the day as a number and convert it to a string
  const day = currentDate.getDate().toString();

  // Add a leading zero for single-digit days
  const formattedDay = day.length === 1 ? `0${day}` : day;

  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  // Format the date as YYYY-MM-DD
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${formattedDay}`;



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

  const fetchJadwalPsikolog = async () => {
    try {
      const response = await fetch(`http://localhost:9000/api/JadwalPsikolog`);
      const data = await response.json();
      
      const parsedId = parseInt(id);
      const selectedJadwalPsikolog = data.filter((jadwalpsikolog) => jadwalpsikolog.tanggal === formattedDate && jadwalpsikolog.id_psikolog === parsedId);
      setJadwalPsikolog(selectedJadwalPsikolog);

      console.log(JadwalPsikolog);
    } catch (error) {
      console.log(error.message);
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
            <small className="text-slate-500 mb-6 block md:text-lg">{Psikolog.spesialisasi}</small>

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
          </div>

          <div className="mt-6 lg:w-1/2 md:mr-16">
          <h2 className="text-lg font-semibold mb-2">Pilih Tanggal</h2>
          <div className="date-picker-container">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()} // Tidak memungkinkan memilih tanggal sebelum hari ini
              className="custom-date-picker p-2 rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition-all" // Tambahkan kelas CSS kustom
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">Jadwal Praktik Psikolog</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Render jadwal sesuai dengan tanggal yang dipilih */}
            {JadwalPsikolog && JadwalPsikolog.length > 0 ? (
              JadwalPsikolog.map((jadwal) => (
                <button
                  key={jadwal.id}
                  className={`w-24 h-10 m-2 rounded-lg ${
                    selectedJam === jadwal.jam ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                  } ${!jadwal.available && 'cursor-not-allowed opacity-50'}`}
                  onClick={() => handleSelectJam(jadwal.jam)}
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

      <div className="mt-6 text-center">
        <div className="flex justify-center items-center">
          <img src={ImgLocation} className="w-4 h-4" alt="Location" />
          <p className="text-xs ml-2 font-bold">{Psikolog?.kota}</p>
        </div>

        <button className="px-6 py-2 mt-6 bg-[#5A96E3] rounded-lg text-white font-semibold hover:bg-blue-700 focus:outline-none focus:bg-blue-700" type="submit">Buat Janji Sekarang</button>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailsPsikolog;
