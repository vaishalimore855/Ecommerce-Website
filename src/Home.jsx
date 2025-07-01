import React from "react";

import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Trusted from "./component/Trusted";
const Home = () => {
  const data = {
    name: "Vaishali Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services></Services>
      <Trusted></Trusted>
    </>
  );
};

export default Home;
