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
        description={`Covid saw the decrease in vehicles, and people coming outside. As a result we saw the environment at its best, with rare animals coming out, and the air fresh to breathe. But the irony was, we couldn’t be out to witness this beauty. Thus, we are making this startup, to recover the world as it was, by increasing productivity in farmers, and encouraging more people to garden.`}
        title={`The need`}
        image={`https://picsum.photos/400/400`}
      />
      <Des
        dir="reverse"
        title={`The Aim`}
        description={`By helping with the farms and gardens, we aim to decrease air pollution, avoid accessive use of fertilizers and reduce water wastage. We want to help this world recover from the bad times of the pandemic`}
        image={`https://picsum.photos/400/400`}
      />
    </Fragment>
  );
};
export default Descriptions;
