import HeroSection from "./component/HeroSection";
import FeatureProduct from "./component/FeatureProduct";
import Services from "./component/Services";
import Trusted from "./component/Trusted";
const Home = () => {
  const data = {
    name: "Vaishali Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
