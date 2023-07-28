import React from "react";
import logo from "../img/jumbotron.png";
import '../../css/font.css';
import '../../App.css';
import { useNavigate } from "react-router-dom";

function Jumbotron() {

  let navigate = useNavigate()
  return (
    <div>
      <div className="md:flex">

        <div className="md:p-10">
          <div className="ml-1 mt-10">
            <h1 className="ml-5 text-3xl/normal font-semibold md:text-5xl/snug fontLoginn">
              Ceritain Selalu Ada <br />
              Untuk Mendengarkan <br />
              Ceritamu
            </h1>
          </div>

            <div>
              <p className="px-4 ml-3 mt-2 md:mt-4 md:ml-3 md:mr-5 md:mb-0 sm:px-4 text-xs/loose md:text-sm/loose fontLoginn">
                Ceritain dibuat sebagai wadah untuk berkumpulkan orang yang membutuhkan seseorang untuk mendengarkan ceritanya. Pendengar yang berada di Ceritain semuanya adalah ahli di bidang psikologi!
              </p>

            </div>
          
          

          <div className="ml-2 mt-6 md:ml-0">
              <button class="inline-flex justify-center items-center mx-5 py-3 px-4 text-xs text-center text-white rounded-lg bg-[#5A96E3] hover:bg-blue-800 md:ml-7 md:text-sm fontLoginn" onClick={()=>navigate('/doctor')}>
                Buat Janji Temu Sekarang
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
          </div>
        </div>

          <div className="mt-8">
            <img className="md:max-w-3xl" src={logo} alt="" />
          </div>
      </div>


    </div>
  );
}

export default Jumbotron;