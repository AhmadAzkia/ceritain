import React, {useState, useEffect} from "react";
import '../../App.css';
import '../../css/font.css';
import ImgClock from "../../components/img/doctor/clock.png"
import ImgLocation from "../../components/img/doctor/location.png";
import { useNavigate } from "react-router-dom";

function ListPsikolog() {
  const [Psikolog, setPsikolog] = useState([]);

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
  return (

    <div className="mt-8 ml-6 bg-[#5A96E3] md:flex md:ml-16">
        <div className="pl-10 pt-10 mr-2 md:w-96">
            <h1 className="fontLoginn text-white font-medium text-3xl md:text-4xl">Beberapa Psikolog yang berada di Ceritain.</h1>
            <small className="fontDeskripsi block mt-2 text-white text-sm/loose md:pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis laoreet rhoncus. Integer mattis, ex sed dapibus fringilla, leo ligula consequat velit. </small>
        </div>
        
        <div className="overflow-x-auto text-center flex gap-4 md:gap-8 px-3 sm:px-4">
            <div className="flex flex-nowrap">
                {Psikolog.map((listPsikolog) => (
                <div key={listPsikolog.id} className="bg-white shadow-md p-4 md:p-8 rounded-lg w-72 mx-4 mt-10 mb-10 sm:w-96 flex flex-col hover:shadow-lg">
                    
                    <div className="relative">
                        <img src={listPsikolog.imageurl} className="w-24 h-24 mx-auto rounded-full" alt="" />

                        <div className={`absolute top-0 right-0 text-white rounded-full p-1 ${listPsikolog.status === 'Available' ? 'bg-[#5A96E3]' : 'bg-red-500'}`}>
                            <img src={ImgClock} className="w-4 h-4" alt="Clock" />
                        </div>
                    </div>
                
                    <h1 className="text-xl mt-4 font-semibold text-gray-800 fontLoginn">{listPsikolog.nama_psikolog}</h1>
                    <small className="text-slate-500 block fontDeskripsi">Spesialisasi {listPsikolog.spesialisasi}</small>
                    <small className="text-slate-500 block fontDeskripsi">{listPsikolog.gender}</small>
                    <p className="mb-4 mt-5 text-gray-900 text-xs/relaxed flex-grow fontDeskripsi">{listPsikolog.deskripsi}</p>

                    {/* Clock */}
                    <div className="flex justify-center mb-2">
                        <p className="text-xs ml-2">
                            <span className="font-bold">{listPsikolog.status}</span>
                            : 16 PM - 12 PM
                            </p>
                    </div>

                    {/* Location */}
                    <div className="flex justify-center mb-4">
                        <img src={ImgLocation} className="w-4 h-4" alt="Location" />
                        <p className="text-xs ml-2 font-bold">{listPsikolog.kota}</p>
                    </div>

                    <div className="flex justify-center">
                        <button className={`px-6 py-2 bg-[#5A96E3] rounded-lg text-white font-semibold  focus:outline-none focus:bg-blue-700 ${listPsikolog.status === 'Available' ? 'hover:bg-blue-700' : 'hover:bg-red-700'}`} type="submit"  onClick={()=>navigate(`/psikolog/detailsPsikolog/${listPsikolog.id_psikolog}`)}>Buat Janji Sekarang</button>
                    </div>
                </div>
                 ))}
            </div>
        </div>

     </div>

  );
}

export default ListPsikolog;
