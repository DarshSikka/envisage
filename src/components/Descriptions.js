// Descriptions for home page
// component-function based
// Import react essentials
import React, { Fragment } from "react";

// import personal modules
import Des from "./Des";
// create function component
const Descriptions = (props) => {
  return (
    <Fragment>
      <Des
        dir="straight"
        description={`Hello World lorem ipsum dolor sit amet`}
        title={`Hi`}
        image={`https://picsum.photos/400/400`}
      />
      <Des
        dir="reverse"
        title={`Bye`}
        description={`Hello World lorem ipsum dolor sit amet`}
        image={`https://picsum.photos/400/400`}
      />
    </Fragment>
  );
};
export default Descriptions;
