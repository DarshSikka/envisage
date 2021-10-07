import "../scss/App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "../pages/404";
import Themer from "../theme";
import Home from "../pages/Home";
import About from "../pages/About";
function App() {
  const [currentTheme, setCurrentTheme] = useState(true);
  useEffect(() => {
    Themer.on("themechange", (theme) => {
      console.log(theme);
      setCurrentTheme(theme);
    });
  }, []);
  return (
    <Router>
      <div className={currentTheme ? "light" : "dark"}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
