import "../scss/App.scss";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ChangeTheme from "../components/UpdateTheme";
import Themer from "../theme";
import Hero from "../components/Hero";
import Descriptions from "../components/Descriptions";
function App() {
  const [currentTheme, setCurrentTheme] = useState(true);
  useEffect(() => {
    Themer.on("themechange", (theme) => {
      console.log(theme);
      setCurrentTheme(theme);
    });
  }, []);
  return (
    <div className={currentTheme ? "light" : "dark"}>
      <ChangeTheme />
      <Hero title={"Gardenizer"} />
      <Descriptions />
    </div>
  );
}

export default App;
