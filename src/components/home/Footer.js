import React from "react";
import '../../App.css';
import '../../css/font.css';

function Footer() {
  return (
   <div className="rounded-lg text-center mt-14 h-24 flex items-center justify-center shadow-inner md:mt-20">
      <a href="/" className="text-2xl md:text-3xl fontLogo">
        {/* Span untuk membuat huruf C jadi lebih besar */}
        <span className="text-4xl md:text-5xl">C</span>
        ERITAIN
      </a>
   </div>
  );
}

export default Footer;
