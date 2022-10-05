import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LabDetailTopBar from "../../components/LabDetailTopBar/LabDetailTopBar";
import "./LabDetail.css"
import getFaculty from "../../helpers/facultyHelper"
import LabDetailCard from "../../components/LabDetailCard/LabDetailCard.jsx"
const LabDetail = () => {
  let { labName } = useParams();
  const [color, setcolor] = useState("");
  const getName = ()=>{
    let silabs = labName.split(" ")
    if(silabs.length > 2){
      return silabs.map((silab)=> {if(silab != "de") return silab[0]}).join('').toUpperCase()
    }
    return labName
  }
  useEffect(() => {
    setcolor(getFaculty(labName))
  }, [labName]);
  getName()
  return (
    <div className="LabDetail__container" >
      <h2 className="LabDetail__title">
        CAPACIDAD INSTALADA DEL ECOSISTEMA DEL LABORATORIO
      </h2>
      <LabDetailTopBar  getName={getName} color={color}  />
      <div className="LabDetail_scroll">
        <LabDetailCard   color={color}  />
        <LabDetailCard   color={color}  />

        <LabDetailCard   color={color}  />

        <LabDetailCard   color={color}  />

        <LabDetailCard   color={color}  />

      </div>
    </div>
  );
};

export default LabDetail;
