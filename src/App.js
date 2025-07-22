import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import MyNavBar from "./components/MyNavBar/MyNavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills"
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <MyNavBar toggleTheme={toggleTheme}/>
        <AboutMe />
        <Education />
        <Skills/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
