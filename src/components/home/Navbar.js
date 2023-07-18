import React, { useState } from "react";
import '../../App.css';
import '../../css/font.css';
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  let navigate = useNavigate()
  return (
<div>
    {/* Header */}
    <nav className="bg-white w-full shadow-transparent2 flex-col">
      <div className="flex flex-col md:flex-row">
        <div className={`flex justify-between items-center py-6 px-6 md:border-none ${isOpen ? 'border-b' : 'none'}`}>
            <div>
              <h1 className="text-2xl md:text-2xl fontLogo ml-4">
                {/* Span untuk membuat huruf C jadi lebih besar */}
                <span className="text-4xl">C</span>
                ERITAIN
              </h1>
            </div>
            <div className="items-center block md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-7 h-7">
                  <path className={`${!isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  <path className={`${isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row justify-between w-full md:items-center border md:border-none mb-2 md:mb-0`}>
          <div className="flex flex-col md:flex-row mx-auto">
            <a href="#" className="text-black block px-6 py-2 fontLoginn md:text-1xl md:px-16">Janji Tatap Muka</a>
            <a href="#" className="text-black block px-6 py-2 fontLoginn md:text-1xl md:px-16">Testimoni</a>
            <a href="#" className="text-black block px-6 py-2 fontLoginn md:text-1xl md:px-16">Tentang Kami</a>
          </div>
          <div className="flex flex-col md:flex-row px-4 py-4">
            <button className="bgWarna text-white rounded-xl w-36 md:h-9 md:w-32 fontLoginn text-lg hover:shadow-md mr-4" onClick={()=>navigate('/login')}>Login</button>
          </div>
        </div>
      </div>  
    </nav>
</div>
  );
}

export default Header;
