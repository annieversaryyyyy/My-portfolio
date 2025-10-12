import React from "react";
import "./Skills.scss";
import { skillsData } from "../../projects-data";

const Skills = () => {
  return (
    <section className="skillsContent" id="skills">
        <h1 className="skillsTitle">Технические навыки и инструменты</h1>
        <div className="icon-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="icon-item">
              <i className={skill.icon}></i>
              <span>{skill.label}</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
