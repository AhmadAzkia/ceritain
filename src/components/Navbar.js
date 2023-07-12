import React, { useState } from "react";
import '../App.css';
import '../css/font.css';


function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
<div>
    {/* Header */}
    <nav className="bg-black w-full shadow-transparent2 flex-col">
      <div className="flex flex-col md:flex-row">
        <div className={`flex justify-between items-center py-6 px-6 md:border-none ${isOpen ? 'border-b' : 'none'}`}>
            <div>
              {/* Disini isi dengan Kata Ceritain */}
            </div>
            <div className="items-center block md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
                  <path className={`${!isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  <path className={`${isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row justify-between w-full md:items-center`}>
          <div className="flex flex-col md:flex-row mx-auto">
            <a href="#" className="text-white block px-6 py-2 fontHeader md:text-2xl md:px-16">About</a>
            <a href="#" className="text-white block px-6 py-2 fontHeader md:text-2xl md:px-16" >Roadmap</a>
            <a href="#" className="text-white block px-6 py-2 fontHeader md:text-2xl md:px-16">Wen</a>
          </div>
          <div className="flex flex-col md:flex-row px-4 py-4">
            <button className="bg-white rounded-full w-36 md:h-8 md:w-36 fontHeader text-sm">Connect Wallet</button>
          </div>
        </div>
      </div>  
    </nav>
</div>
  );
}

export default Header;
