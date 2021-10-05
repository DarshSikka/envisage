import React from "react";
import TypingEffect from "./TypingEffect";
const Hero = ({ title }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <TypingEffect words={["abc", "bcd"]} />
      </div>
    </div>
  );
};
export default Hero;
