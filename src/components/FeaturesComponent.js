import React from "react";
import FeaturesCard from "./FeaturesCard";
import Feature1 from "../assets/home/feature1.svg";
import Tractor from "../assets/home/Tractor.png";
import Irrigation from "../assets/home/Irrigation.png";
export default function FeaturesComponent(props) {
  return (
    <>
      <div className="cards">
        <FeaturesCard
          title="Soil testing for water"
          description="Our product tests the field for water and irrigates it automatically, with no need for the farmer to even come!"
          image={Feature1}
        />
        <FeaturesCard
          title="Fertillizer Optimisation"
          description="The field automatically gains nutrients, while you can sit back and relax! It is not going to over-fertilize because of the advanced Deep Learning that has been put into it"
          image={Tractor}
        />
        <FeaturesCard
          title="No Water Wastage"
          description="Our sprinkler system is very conservative regarding water. It gives only the water needed while doing realtime deep learning analysis"
          image={Irrigation}
        />
      </div>
    </>
  );
}
