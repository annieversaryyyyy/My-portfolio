import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import MyNavBar from "./components/MyNavBar/MyNavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
      </header>
    </div>
  );
}

export default App;
