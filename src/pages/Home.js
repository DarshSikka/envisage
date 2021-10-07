// Homepage, made of components only
import React, { useEffect, useState } from "react";
import ChangeTheme from "../components/UpdateTheme";
import Hero from "../components/Hero";
import Descriptions from "../components/Descriptions";
import Navbar from "../components/Navbar";
const Home = () => {
  // Navbar scroll animation
  const [navFixed, setNavFixed] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      console.log(e);
      if (document.documentElement.scrollTop > 400) {
        console.log("gt100");
        setNavFixed(true);
      } else if (document.documentElement.scrollTop < 400) {
        setNavFixed(false);
      }
    });
  }, [navFixed]);
  // render static components
  return (
    <>
      <ChangeTheme />
      <Hero title={"Gardenizer"} />
      <Navbar fixed={navFixed} />
      <Descriptions />
    </>
  );
};
export default Home;
