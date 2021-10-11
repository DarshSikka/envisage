import React from "react";
import "../scss/components/pricing.scss";

const PricingCard = (props) => {
  return (
    <div className="pricingCard">
      <h3>{props.plan}</h3>
      <h4 style={{ fontSize: 30, textAlign: "center" }}>{props.price}</h4>
      <div className="features">
        {props.features.map((ele) => (
          <li className="feature">{ele}</li>
        ))}
      </div>
      <button className="buy">Buy now</button>
    </div>
  );
};

export default PricingCard;
