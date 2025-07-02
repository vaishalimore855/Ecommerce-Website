import HeroSection from "./component/HeroSection";
import { useProductContex } from "./contex/ProductContex";

const About = () => {
  const myName = useProductContex();
  const data = {
    name: " Vaishali Ecommerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />;
    </>
  );
};

export default About;
