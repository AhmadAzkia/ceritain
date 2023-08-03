import React from "react";
import '../../App.css';
import '../../css/font.css';

function Footer() {
  return (
   <div className="border rounded-lg text-center h-24 flex items-center justify-center shadow-inner">
      <a href="/" className="text-2xl md:text-3xl fontLogo">
        {/* Span untuk membuat huruf C jadi lebih besar */}
        <span className="text-4xl md:text-5xl">C</span>
        ERITAIN
      </a>
   </div>
  );
}

export default Footer;
