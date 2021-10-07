// Component for updating theme
// component - function based

// import react essentials

import React, { Fragment, useState } from "react";
import "../scss/App.scss";
// Import theme manager
import Themer from "../theme";
// create functional component
const UpdateTheme = () => {
  const [checked, setChecked] = useState("light");
  const handleChecked = (e) => {
    setChecked(e.target.value === "true" ? "light" : "dark");
    Themer.emit("themechange", e.target.value === "true" ? true : false);
  };
  return (
    <Fragment>
      <div className="themechanger">
        <label>Light</label>
        <input
          type="radio"
          name="theme"
          value="true"
          onChange={handleChecked}
          checked={checked === "light" ? true : false}
        />
        <label>Dark</label>
        <input
          type="radio"
          name="theme"
          value="false"
          onChange={handleChecked}
          checked={checked === "dark" ? true : false}
        />
      </div>
    </Fragment>
  );
};
export default UpdateTheme;
