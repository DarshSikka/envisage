// Component for updating theme
// component - function based

// import react essentials

import React, { Fragment } from "react";
import "../scss/App.scss";
// Import theme manager
import Themer from "../theme";
// create functional component
const UpdateTheme = () => {
  const handleChecked = (e) => {
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
        />
        <label>Dark</label>
        <input
          type="radio"
          name="theme"
          value="false"
          onChange={handleChecked}
        />
      </div>
    </Fragment>
  );
};
export default UpdateTheme;
