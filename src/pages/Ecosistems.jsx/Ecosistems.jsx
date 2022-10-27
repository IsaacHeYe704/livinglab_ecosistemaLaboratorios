import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Bola from "../../components/Bola/Bola";
import "./Ecosistems.css";

const Ecosistems = ({ faculties }) => {
  const [selectedLab, setSelectedLab] = useState("Laboratorios");
  return (
    <div className="Ecosistems">
      <div className="row one">
        {faculties.slice(0, 2).map(({ color, nombre, id}) => (
          <Bola
            color={color}
            id={"one" + id}
            text={nombre}
            selectedLab={selectedLab}
            setSelectedLab={setSelectedLab}
          />
        ))}
      </div>
      <div className="row two">
        {faculties.slice(2, 4).map(({ color, nombre, id}) => (
          <Bola
            color={color}
            id={"two" + id}
            text={nombre}
            selectedLab={selectedLab}
            setSelectedLab={setSelectedLab}
          />
        ))}
      </div>
      <div className="row center">
        
        {
        faculties.slice(4, 7).map(({ color, nombre, center, id}) => (
          <Bola
            color={color}
            text={nombre}
            id={"center" + id}
            center={center}
            selectedLab={selectedLab}
            setSelectedLab={setSelectedLab}
          />
        ))}
      </div>
      <div className="row three">
        {faculties.slice(7, 9).map(({ color, nombre, id}) => (
          <Bola
            color={color}
            id={"three" + id}
            text={nombre}
            selectedLab={selectedLab}
            setSelectedLab={setSelectedLab}
          />
        ))}
      </div>
      <div className="row four">
        {faculties.slice(9, 11).map(({ color, nombre, id}) => (
          <Bola
            color={color}
            id={"four" + id}
            text={nombre}
            selectedLab={selectedLab}
            setSelectedLab={setSelectedLab}
          />
        ))}
      </div>
    </div>
  );
};
const info = [
  {
    color: "#192A67",
    text: "Living Lab",
  },
  {
    color: "#922B43",
    text: "Centro de lenguas extranjeras",
  },
  {
    color: "#F19500",
    text: "Escuela",
  },
  {
    color: "#818990",
    text: "Comunicación",
  },
  {
    color: "#734390",
    text: "Psicología",
  },
  {
    color: "white",
    text: "Laboratorios por Facultad",
    center: "true",
  },
  {
    color: "#C7211D",
    text: "Derecho y Ciencias Políticas",
  },
  {
    color: "#FFD71C",
    text: "Medicina",
  },
  {
    color: "#936D47",
    text: "Ingeniería",
  },
  {
    color: "#C6C6C6",
    text: "Enfermería Fisioterapia",
  },
  {
    color: "#D3AE00",
    text: "Medicina Enfermería Fisioterapia",
  },
];
export default Ecosistems;
