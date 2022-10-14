import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LabDetailTopBar from "../../components/LabDetailTopBar/LabDetailTopBar";
import "./LabDetail.css";
import getFaculty from "../../helpers/facultyHelper";
import LabDetailCard from "../../components/LabDetailCard/LabDetailCard.jsx";
import Lab from "../../components/Lab/Lab";
const LabDetail = ({ faculties }) => {
  const [labs, setlabs] = useState([]);
  let { labName } = useParams();
  useEffect(() => {
    let name = faculties.find((x) => x.nombre === labName);
    fetch(
      "https://laboratorios.livinglabsabana.com/api/labs/laboratorios-facultad/" +
        name.id
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setlabs(data);
      });
  }, [labName, faculties]);
  const [color, setcolor] = useState("");
  const getName = () => {
    let silabs = labName.split(" ");
    if (silabs.length > 2) {
      return silabs
        .map((silab) => {
          if (silab != "de") return silab[0];
        })
        .join("")
        .toUpperCase();
    }
    return labName;
  };
  useEffect(() => {
    setcolor(getFaculty(labName));
  }, [labName]);
  getName();
  return (
    <div className="LabDetail__container">
      <h2 className="LabDetail__title">
        CAPACIDAD INSTALADA DEL ECOSISTEMA DEL LABORATORIO
      </h2>
      <LabDetailTopBar getName={getName} color={color} />
      <div className="LabDetail_scroll">
        {labs.map((lab) => (
          <Lab info={lab} color={color} />
        ))}
      </div>
    </div>
  );
};
export default LabDetail;
