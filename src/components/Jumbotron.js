import React from "react";

function Jumbotron() {
  return (
    <div>
      <div className="md:flex">

        <div className="md:p-8">
          <div>
            <h1 className="px-4 mb-2 text-3xl font-extrabold leading-none md:text-5xl">
              Ceritain Selalu Ada <br /> Untuk <br />Mendengarkan <br />Ceritamu
            </h1>
            <p className="px-4 mb-4 md:mb-0 sm:px-4 text-xs md:text-sm md:text-base">
              Ceritain dibuat sebagai wadah untuk berkumpulkan orang yang membutuhkan seseorang untuk mendengarkan ceritanya. Pendengar yang berada di Ceritain semuanya adalah ahli di bidang psikologi!
            </p>
          </div>
        </div>

        <div>
          <p className="pl-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis vel nisi quos accusamus incidunt doloribus magnam impedit architecto, veniam tempore accusantium necessitatibus pariatur eligendi iste nam voluptates earum modi nostrum!
          </p>
        </div>
      </div>

      <div>
        <a href="#" class="inline-flex justify-center items-center mx-5 py-3 px-4 text-xs text-center text-white rounded-lg bg-[#5A96E3] hover:bg-blue-800 md:mx-20 md:text-sm fontLoginn">
          Buat Janji Temu Sekarang
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;