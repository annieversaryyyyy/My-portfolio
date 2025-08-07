import React from "react";
import { aboutMeData } from "../../data";
import "./AboutMe.scss";
import avatar from "../../assets/01img.jpg";

const AboutMe = () => {
  return (
    <section className="aboutMeContainer" id="about">
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="introContent">
        <h1 className="introTitle">{aboutMeData.title}</h1>
        <p className="introSubtitle">{aboutMeData.subtitle}</p>
        <p className="introDescription">{aboutMeData.description}</p>
      </div>
    </section>
  );
};

export default AboutMe;
