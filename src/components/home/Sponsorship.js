import React, { useState } from "react";
import '../../App.css';
import '../../css/font.css';
import { useNavigate } from "react-router-dom";

function Sponsorship() {
  return (
    <div className="bgWarna h-14 justify-center mx-auto w-full flex rounded-2xl items-center border">
      <div className="flex flex-row mx-auto">
          <a href="" className="text-white fontLoginn px-6 text-sm py-2 md:text-lg md:px-16">Lorem</a>
          <a href="" className="text-white fontLoginn px-6 text-sm py-2 md:text-lg md:px-16">Lorem</a>
          <a href="" className="text-white fontLoginn px-6 text-sm py-2 md:text-lg md:px-16">Lorem</a>
          <a href="" className="text-white fontLoginn px-6 text-sm py-2 md:text-lg md:px-16">Lorem</a>
      </div>
    </div>
  );
}

export default Sponsorship;
