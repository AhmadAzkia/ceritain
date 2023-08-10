import React, { useState } from "react";
import '../../App.css';
import '../../css/font.css';
import { useNavigate } from "react-router-dom";

function Sponsorship() {
  return (
    <div className="bgWarna h-16 justify-center mx-auto w-full flex rounded-lg items-center border">
      <div className="flex flex-row mx-auto items-center">
          <a href="" className="text-white fontLoginn px-6 text-sm py-2 md:text-lg md:px-16">Lorem</a>
          <a href="" className="text-white sponsorship2 px-6 text-sm mt-3 md:text-xl md:px-16">Ipsum</a>
          <a href="" className="text-white sponsorship3 px-6 text-sm py-2 md:text-lg md:px-16">dolor</a>
          <a href="" className="text-white sponsorship4 px-6 text-sm py-2 md:text-lg md:px-16">Amet</a>
      </div>
    </div>
  );
}

export default Sponsorship;
