import React from "react";
import "./Skills.scss";
import { skillsData } from "../../data";

const Skills = () => {
  return (
    <div>
      <div className="skillsContent">
        <h1 className="skillsTitle">Технические навыки и инструменты:</h1>
        <div className="icon-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="icon-item">
              <i className={skill.icon}></i>
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
