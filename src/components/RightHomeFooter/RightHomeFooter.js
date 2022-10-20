import React from "react";
import './RightHomeContent.css'
const RightHomeFooter = () => {
  return (
    <div className="RightHomeFooter">
      <div className="RightHomeFooter_subcontainer" >
        <p className="RightHeader_numberTitle"> 205 </p>
        <p className="RightHomeFooter_text">Laboratorios <br/> Áulas Especializadas <br/> Aulas de Investigación</p>
      </div>
      <div className="RightHomeFooter_subcontainer">
        <p className="RightFooter_numberSubtitle"> (+) 22 </p>
        <p className="RightHomeFooter_text">Mil millones en equipos</p>
      </div>
      <div className="RightHomeFooter_subcontainer">
        <p className="RightFooter_numberSubtitle"> (+) 4.8 </p>
        <p className="RightHomeFooter_text">Mil metros cuadrados</p>
      </div>
    </div>
  );
};

export default RightHomeFooter;
