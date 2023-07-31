import React from "react";
import '../../App.css';
import '../../css/font.css';

function Feedback() {
  return (
    <div>
      <div className="text-center mt-10 fontLoginn">
        <h1 className="text-xl font-medium mb-2">Apa Kata Orang ?</h1>
      </div>

      <div className="flex overflow-x-auto whitespace-nowrap fontLoginn ml-3 mb-5 md:justify-center">
        <div className="mt-5 text-center">
            <img src="https://img.freepik.com/free-icon/male-user-silhouette_318-35708.jpg" alt="" className="h-24 w-28 mx-auto"/>
            <p className="text-xs mt-3">"Ceritain adalah platform terbaik <br /> yang pernah saya temukan"</p>
            <h3 className="font-medium mt-1">Azki</h3>
        </div>
        <div className="ml-3 mt-5 text-center">
            <img src="https://img.freepik.com/free-icon/male-user-silhouette_318-35708.jpg" alt="" className="h-24 w-28 mx-auto"/>
            <p className="text-xs mt-3">"Ceritain memberikan harga <br /> yang sangat murah <br /> di banding kompetitor lain"</p>
            <h3 className="font-medium mt-1">Darwan</h3>
        </div>
        <div className="ml-10 mt-5 text-center">
            <img src="https://img.freepik.com/free-icon/male-user-silhouette_318-35708.jpg" alt="" className="h-24 w-28 mx-auto"/>
            <p className="text-xs mt-3">"Ceritain selalu ada <br /> saat aku membutuhkan teman <br /> untuk mendengar ceritaku. <br /> Terimakasih Ceritain"</p>
            <h3 className="font-medium mt-1">Difa</h3>
        </div>
        <div className="ml-10 mt-5 text-center">
            <img src="https://img.freepik.com/free-icon/male-user-silhouette_318-35708.jpg" alt="" className="h-24 w-28 mx-auto"/>
            <p className="text-xs mt-3">"Ceritain sangat membantu untuk <br /> membuat saya kembali percaya diri"</p>
            <h3 className="font-medium mt-1">Aldi</h3>
        </div>

      </div>
    </div>
  );
}

export default Feedback;
