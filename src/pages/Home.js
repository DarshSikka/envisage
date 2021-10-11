// Homepage, made of components only
import React, { useEffect, useState } from "react";
import ChangeTheme from "../components/UpdateTheme";
import Hero from "../components/Hero";
import Descriptions from "../components/Descriptions";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import feature1 from "../assets/home/feature1.svg";
import FeaturesComponent from "../components/FeaturesComponent";
import customer0 from "../assets/home/customers/customer-0.jpg";
import customer1 from "../assets/home/customers/customer-1.jpg";
import customer2 from "../assets/home/customers/customer-2.jpg";
import customer3 from "../assets/home/customers/customer-3.jpg";
import customer4 from "../assets/home/customers/customer-4.jpg";

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
      <Hero title={"Gardenizer"} />
      <Navbar fixed={navFixed} />
      <Descriptions />
      <FeaturesComponent />
      <Features
        features={[
          {
            name: "Gohn",
            description: "Gorrem gipsum gim gimmet",
            image: customer0,
          },
          {
            name: "Bobby",
            description: "Bobby Fischer sit amet sit amet sit amet",
            image: customer1,
          },
          {
            name: "Jog",
            description:
              "Lorem ipsum dolor sit amet amet sit amet dolor bobbet gorrem",
            image: customer2,
          },
          {
            name: "Bob",
            description: "Lorem ipsum bob dolor sir bobbet",
            image: customer3,
          },
        ]}
      />
    </>
  );
};
export default Home;
