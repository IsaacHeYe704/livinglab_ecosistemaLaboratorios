import React from "react";
import Stats from "../Stats/Stats";
import "./LabCompleteDetail.css";
const LabCompleteDetail = ({ color, setshowDetails }) => {
    const colorB = {borderColor: color}
  return (
    <div className="LabCompleteDetail">
      <div className="LabCompleteDetail__Header">
        <div LabCompleteDetail__titleContainer>
          <h3 className="LabDetail__name">Bloomberg</h3>
          <div
            className="LabDetail__icon"
            style={{ backgroundColor: color }}
          ></div>
        </div>

        <Stats column={true} />
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
            <tr><td style={colorB}>Clasificación de Bioseguridad</td><td style={colorB}>BSL 1</td></tr>
            <tr><td style={colorB}>Responsable</td><td style={colorB}>Claudia Casallas - SENA</td></tr>
            <tr><td style={colorB}>Clasificación General</td> <td style={colorB}>I-HUMEDO</td></tr>
            <tr><td style={colorB}>Tratamiento de sustancias químicas</td><td style={colorB}>SI</td></tr>
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

export default LabCompleteDetail;
