import React from "react";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import ChangeTheme from "../components/UpdateTheme";
const features1 = ["Garden Support", "Irrigation"];
const features2 = ["Garden Support", "Irrigation", "Fertillizer"];
const features3 = [
  "Garden Support",
  "Irrigation",
  "Fertillizer",
  "Soil preparation equipment",
];
const features4 = [
  "Garden Support",
  "Irrigation",
  "Fertillizer",
  "Soil preparation equipment",
  "Sprinkler System",
];
const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="pricing">
        <PricingCard features={features1} plan={"Gardener"} price={"$40"} />
        <PricingCard
          features={features2}
          plan={"Gold Gardener"}
          price={"$80"}
        />
        <PricingCard
          features={features3}
          plan={"Silver Farmer"}
          price={"$160"}
        />
        <PricingCard features={features4} plan={"Gold Farmer"} price={"$120"} />
      </div>
    </>
  );
};

export default Pricing;
