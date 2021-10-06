// Component for single description in Descriptions.js

//import react essentials
import React from "react";
const Des = ({ description, title, image, dir }) => {
  return (
    <div className="description" dir={dir}>
      <div className="description-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={image} />
    </div>
  );
};
export default Des;
