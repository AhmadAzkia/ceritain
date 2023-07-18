import React from "react";
import logo from "../img/jumbotron.png";
import '../../css/font.css';


function Jumbotron() {
  return (
    <div>
      <div className="md:flex">

        <div className="md:p-10">
          <div className="ml-1 mt-8">
            <h1 className="ml-5 text-3xl font-extrabold leading-none md:text-5xl">
              Ceritain Selalu Ada
            </h1>
            <h1 className="ml-5 text-3xl font-extrabold leading-none md:text-5xl">
              Untuk
            </h1>
            <h1 className="ml-5 text-3xl font-extrabold leading-none md:text-5xl">
              Mendengarkan
            </h1>
            <h1 className="ml-5 text-3xl font-extrabold leading-none md:text-5xl">
              Ceritamu
            </h1>
          </div>

            <div>
              <p className="px-4 ml-3 mt-2 md:mt-4 md:ml-3 md:mb-0 sm:px-4 text-xs md:text-sm md:text-base">
                Ceritain dibuat sebagai wadah untuk berkumpulkan orang yang membutuhkan seseorang <br /> untuk mendengarkan ceritanya. Pendengar yang berada di Ceritain semuanya adalah ahli di bidang psikologi!
              </p>
            </div>
          
          

          <div className="ml-2 mt-12 md:ml-0">
              <button class="inline-flex justify-center items-center mx-5 py-3 px-4 text-xs text-center text-white rounded-lg bg-[#5A96E3] hover:bg-blue-800 md:ml-7 md:text-sm fontLoginn">
                Buat Janji Temu Sekarang
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
          </div>
        </div>

          <div className="">
            <img className="" src={logo} alt="" />
          </div>
      </div>


    </div>
  );
}

export default Jumbotron;