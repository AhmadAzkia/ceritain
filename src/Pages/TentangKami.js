import React from "react";
import '../App.css';
import '../css/font.css';
import {PeopleTentangKami} from "../datas/data";
import Navbar from "../components/home/Navbar"
import Footer from "../components/home/Footer"

function TentangKami() {
  return (
    <div>
        <Navbar />
        <div className="mt-16 fontLoginn text-center">
            <h1 className="text-2xl font-bold mb-2 md:text-3xl">{PeopleTentangKami.title}</h1>
            <p className="fontDeskripsi text-sm/loose mx-6 md:mx-28">{PeopleTentangKami.description}</p>
        </div>

        <div className="md:flex fontLoginn justify-center md:mb-72">
            {PeopleTentangKami.reasons.map((reason, index) => (
                <div className="mt-5 text-center mx-8 " key={index}>
                    <img src={reason.image} alt="" className="h-16 w-16 md:h-20 rounded-full md:w-20 mx-auto"/>
                    <h1 className="mt-3 text-xs/relaxed text-slate-500 fontDeskripsi" dangerouslySetInnerHTML={{ __html: reason.description.replace(/\n/g, '<br/>') }} />
                    <h3 className="font-medium mt-1 text-base md:text-lg">{reason.nama}</h3>
                </div>
            ))}
        </div>

    <Footer />
  </div>
  );
}

export default TentangKami;
