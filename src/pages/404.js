// 404 page

// Import react essentials
import React, { Fragment } from "react";
import UpdateTheme from "../components/UpdateTheme";
// Setup 404 function
const NoMatch = () => {
  return (
    <Fragment>
      <UpdateTheme />
      <h1 className="nomatch">404 | Page not Found</h1>
    </Fragment>
  );
};
export default NoMatch;
