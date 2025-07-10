import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import MyNavBar from "./components/NavBar/NavBar";
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
      </header>
    </div>
  );
}

export default App;
