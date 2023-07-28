import React, { useState } from "react";
import '../../App.css';
import '../../css/font.css';
import { useNavigate } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div className="text-center mt-10 font-medium text-xl fontLoginn md:text-3xl">
        <h1>Kenapa harus pilih Ceritain?</h1>
      </div>

      <div className="px-14 md:flex md:px-32 md:mb-20">
        <div className="border rounded-2xl bg-gray-100 mt-10 px-5 h-48 md:h-52 fontLoginn md:mr-36">
          <h1 className="font-medium text-base mt-3 md:text-2xl md:ml-2">Harga yang di berikan relatif lebih murah</h1>
          <p className="text-xs mt-2 mr-8 mb-3 md:text-sm md:mr-16 md:ml-2">Ceritain memberikan harga yang relatif murah untuk anda, karena kami ingin membantu siapapun yang butuh seseorang untuk mendengar keluh kesahnya tanpa mengeluarkan biaya yang cukup besar.</p>
        </div>

        <div className="border rounded-2xl bg-gray-100 mt-10 px-5 mb-3 h-48 md:h-52 fontLoginn">
          <h1 className="font-medium text-base mt-3 md:text-2xl md:ml-2">Dokter yang kami sediakan adalah yang terbaik</h1>
          <p className="text-xs mt-2 mr-8 mb-3 md:text-sm md:mr-16 md:ml-2">Ceritain memyediakan dokter - dokter terbaik yang akan memberikan solusi terbaik. Kami juga sangat menjamin, apapun yang anda ceritakan akan sangat aman di tangan dokter - dokter andalan kami.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
