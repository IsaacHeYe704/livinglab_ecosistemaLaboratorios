import React from "react";
import Stats from "../Stats/Stats";
import "./LabCompleteDetail.css";
const LabCompleteDetail = ({ color, setshowDetails, info }) => {
    const colorB = {borderColor: color}
  return (
    <div className="LabCompleteDetail">
      <div className="LabCompleteDetail__Header">
        <div LabCompleteDetail__titleContainer>
          <h3 className="LabDetail__name">{info.nombre}</h3>
          <div
            className="LabDetail__icon"
            style={{ backgroundColor: color }}
          ></div>
        </div>

        <Stats column={true} info={info} />
        <button onClick={() => setshowDetails(false)}>c</button>
      </div>
      <div className="LabCompleteDetail__details">
        <p className="LabCompleteDetail_lab">Laboratorio</p>
        <p className="LabCompleteDetail_description"> 
          El almacén de Programa de Gastronomía es un espacio donde se centra la
          recepción, almacenamiento y alistamiento de materias primas para las
          clases Artes Culinarias, Ciencia de alimentos y Proyectos de
          investigación.
        </p>
        <table className="LabCompleteDetail__dataTable">
            <tr><td style={colorB}>Clasificación de Bioseguridad</td><td style={colorB}>{clasificacionBioseguridad[info.id_clasificacion_bioseguridad]}</td></tr>
            <tr><td style={colorB}>Responsable</td><td style={colorB}>Claudia Casallas - SENA</td></tr>
            <tr><td style={colorB}>Clasificación General</td> <td style={colorB}>I-HUMEDO</td></tr>
            <tr><td style={colorB}>Tratamiento de sustancias químicas</td><td style={colorB}>{info.tratamiento_sustancias_quimicas ? "si":"no"}</td></tr>
            <tr><td style={colorB}>Grupos de Investigación</td> <td style={colorB}>Ninguno</td></tr>
            <tr><td style={colorB}>Funciones Sustantivas</td><td style={colorB}>Soporte</td></tr>
            <tr><td style={colorB}>Extensión</td><td style={colorB}>NO</td></tr>
            <tr><td style={colorB}>Profesor Responsable</td> <td style={colorB}>Angélica Castiblanco</td></tr>
            <tr><td style={colorB}>Número de Asignaturas</td><td style={colorB}>11</td></tr>
        </table>
      </div>
    </div>
  );
};
const clasificacionBioseguridad = {
  "1":"BSF 1",
  "2":"BSF 2",
  "3":"BSF 3",
  "4":"BSF 1 Q3",
  "5":"BSF 2 Q3",
  "6":"BSF 3 Q2",
  "7":"BSF 3 Q3",
  "8":"BSL 1",
  "9":"BSL 2",
  "10":"M1",
  "11":"M2",
  "12":"Pendiente por SST",
  "13":"Q3",
  "14":"Q3 M1",
  "15":"BSF 1",
  "16":"BSF 2",
  "17":"BSF 3",
  "18":"BSF 1 Q3",
  "19":"BSF 2 Q3",
  "20":"BSF 3 Q2",
  "21":"BSF 3 Q3",
  "22":"BSL 1",
  "23":"BSL 2",
  "24":"M1",
  "25":"M2",
  "26":"Pendiente por SST",
  "27":"Q3",
  "28":"Q3 M1",
  "29":"Dato en Construcción"
  
}
export default LabCompleteDetail;
