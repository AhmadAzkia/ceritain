import React from "react";

function Jumbotron() {
  return (
    <div>
      <div className="md:p-8">
        <h1 className="px-4 mb-2 text-sm font-extrabold leading-none md:text-3xl">
          Cek Kesehatan Mentalmu Bersama Dokter Andalan Kami
        </h1>
        <p className="px-4 mb-4 md:mb-0 sm:px-4 text-xs md:text-base">
          Kamu penasaran dengan kondisi kesehatan mentalmu saat ini? Yuk, segera buat janji dengan dokter andalan kami untuk mengetahui hasilnya!
        </p>
      </div>
      <div>
        <a href="#" class="inline-flex justify-center items-center mx-5 py-3 px-4 text-xs text-center text-white rounded-lg bg-[#5A96E3] hover:bg-blue-800 md:mx-20 md:text-sm">
          Booking Sekarang
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;