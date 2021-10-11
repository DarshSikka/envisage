import React from "react";
export default function FeaturesCard({ title, image, description }) {
  return (
    <div className="card">
      <img src={image} />
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
