import React from "react";
import "./RightHomeContent.css";
const RightHomeContent = () => {
  return (
    <div className="RightHomeContent">
      <div className="RightHomeContent_left">
        <p className="RightHeader_numberTitle"> 182 </p>
        <p className="RightHeader_numberText">Espacios de laboratorios</p>
      </div>
      <div className="RightHomeContent_right">
        <div className="RightHomeContent_right_listContainer">
          <div>
            <div className="bullet">
              <div></div>
            </div>
            <p className="RightHeader_numberSubtitle"> 79 </p>
            <p className="RightHeader_text">Dedicados a la docencia</p>
          </div>
          <div>
            <div className="bullet">
              <div></div>
            </div>
            <p className="RightHeader_numberSubtitle"> 31 </p>
            <p className="RightHeader_text">Dedicados a la investigación</p>
          </div>
          <div>
            <div className="bullet">
              <div></div>
            </div>
            <p className="RightHeader_numberSubtitle"> 35 </p>
            <p className="RightHeader_text">Mixtos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHomeContent;
