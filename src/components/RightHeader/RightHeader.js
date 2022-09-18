import React from "react";
import './RightHeader.css'
import Title from "../Title/Title";
import unisabana from '../../Assets/Unisabana.png'
const RightHeader = () => {
  return (
    <div className="RightHeader">
      <img className="RightHeader_logo" src={unisabana} />
      <div className="RightHeader_title"> 
      <Title text="CAPACIDAD INSTALADA DEL SISTEMA DEL LABORATORIO " />
      </div>
      
      <h3 className="RightHeader_subtitlte">Laboratorios para la innovación y el aprendizaje</h3>
    </div>
  );
};

export default RightHeader;
