import React from "react";
import '../../App.css';
import '../../css/font.css';
import {aboutUsText} from "../../datas/data";

function AboutUs() {
  return (
    <div>
      <div className="px-16 mt-10">
        <h1 className="font-medium text-2xl fontLoginn md:text-3xl">{aboutUsText.title}</h1>
        <small className="text-xs">{aboutUsText.description}</small>
      </div>

      <div className="px-14 md:grid md:grid-cols-2 md:px-20 md:mb-20">
        {aboutUsText.reasons.map((reason, index) => (
          <div className="border rounded-2xl mt-10 px-5 shadow-lg md:mr-16 md:border-none md:shadow-none" key={index}>
            <img src={reason.image} className="w-16 h-16 mt-4 ml-4" />
            <h1 className="fontLoginn font-medium text-base mt-5 md:text-2xl md:ml-2">{reason.title}</h1>
            <p className="mt-3 mr-5 mb-7 text-xs/loose fontLoginn md:mr-16 md:ml-2">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
