import React from "react";
import { aboutMeData } from "../../data";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="aboutMeContainer">
    <img className="avatar" src="/01img.jpg" alt="avatar" />
    <div className="textContent">
      <h1 className="title">{aboutMeData.title}</h1>
      <p>{aboutMeData.subtitle}</p>
      <p>{aboutMeData.description}</p>
    </div>
  </section>
  
  );
};

export default AboutMe;
