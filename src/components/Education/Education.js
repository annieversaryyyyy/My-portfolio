import React from "react";
import { educationInfoData, workExpData } from "../../data";
import "./Education.scss";

const Education = () => {
  return (
    <div>
      <div className="educationContainer">
        <div className="info">
          <h1 className="eduTitle">Мое образование :</h1>
          <div className="logoContent">
            <img className="logo" src="/logoAtr.png" alt="logo" width="250px" />
          </div>
          <p>{educationInfoData.description}</p>
          <img
            className="certificate"
            src="/certificate.jpg"
            alt="certificate"
            width="400px"
          />
        </div>
      </div>

      <div className="workExp">
        <div className="workContent">
          <h1 className="workTitle">Опыт работы</h1>
          <h3 className="workSubtitle">{workExpData.title}</h3>
          <p>{workExpData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
