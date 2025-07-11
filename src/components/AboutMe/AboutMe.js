import React from "react";
import { aboutMeData } from "../../data";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="aboutMeContainer">
      <img className="avatar" src="/01img.jpg" alt="avatar" />
      <div className="introContent">
        <h1 className="introTitle">{aboutMeData.title}</h1>
        <p className="introSubtitle">{aboutMeData.subtitle}</p>
        <p className="introDescription">{aboutMeData.description}</p>
      </div>
    </section>
  );
};

export default AboutMe;
