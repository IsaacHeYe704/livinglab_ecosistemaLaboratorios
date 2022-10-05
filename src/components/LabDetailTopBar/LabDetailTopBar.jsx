import React from "react";

function LabDetailTopBar({ getName, color}) {
  return (
    <div className="LabDetail__topBar" style={{backgroundColor:color}}>
      <p className="LabDetail__topItemTitle">{getName()}</p>
      <div className="LabDetail__topItem">
        <p>
          Todos <span>205</span>
        </p>
      </div>
      <div className="LabDetail__topItem">
        <p>
          Laboratorios <span>205</span>
        </p>
      </div>
      <div className="LabDetail__topItem">
        <p>
          Aulas <span>205</span>
        </p>
      </div>
    </div>
  );
}
export default LabDetailTopBar;
