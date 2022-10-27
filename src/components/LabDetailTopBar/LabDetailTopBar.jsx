import React from "react";

function LabDetailTopBar({ getName, color ,info}) {
  console.log(info)
  return (
    <div className="LabDetail__topBar" style={{backgroundColor:color}}>
      <p className="LabDetail__topItemTitle">{getName()}</p>
      {/* <div className="LabDetail__topItem">
        <p>
          Todos <span>205</span>
        </p>
      </div> */}
      <div className="LabDetail__topItem">
        <p>
          Laboratorios <span>{info.cantidad }</span>
        </p>
      </div>
      {/* <div className="LabDetail__topItem">
        <p>
          Aulas <span>205</span>
        </p>
      </div> */}
    </div>
  );
}
export default LabDetailTopBar;
