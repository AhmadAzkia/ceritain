import React from "react";
import '../../App.css';
import '../../css/font.css';
import { FeedbackPeople } from "../../datas/data"

function Feedback() {
  return (
    <div>
      <div className="text-center mt-10 fontLoginn">
        <h1 className="text-2xl font-medium mb-2 md:text-3xl">{FeedbackPeople.title}</h1>
        <small>{FeedbackPeople.description}</small>
      </div>

      <div className="flex overflow-x-auto whitespace-nowrap fontLoginn mb-1 md:justify-center">
        {FeedbackPeople.reasons.map((reason, index) => (
          <div className="mt-5 text-center mx-8" key={index}>
            <img src={reason.image} alt="" className="h-16 w-16 md:h-20 rounded-full md:w-20 mx-auto"/>
            <h1 className="mt-3 text-xs text-slate-500" dangerouslySetInnerHTML={{ __html: reason.description.replace(/\n/g, '<br/>') }} />
            <h3 className="font-medium mt-1 text-base md:text-lg">{reason.nama}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
