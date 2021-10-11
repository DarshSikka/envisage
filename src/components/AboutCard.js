import React from "react";
const AboutCard = (props) => {
  return (
    <div className="aboutcard">
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="text">
        <div className="name">{props.name}</div>
        <div className="intro">{props.intro}</div>
      </div>
    </div>
  );
};

export default AboutCard;
