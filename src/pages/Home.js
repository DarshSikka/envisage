// Homepage, made of components only
import React from "react";
import ChangeTheme from "../components/UpdateTheme";
import Hero from "../components/Hero";
import Descriptions from "../components/Descriptions";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <ChangeTheme />
      <Hero title={"Gardenizer"} />
      <Navbar />
      <Descriptions />
    </>
  );
};
export default Home;
