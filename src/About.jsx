// import HeroSection from "./component/HeroSection";
// import { useProductContex } from "./contex/ProductContex";

// const About = () => {
//   const myName = useProductContex();
//   const data = {
//     name: " Vaishali Ecommerce",
//   };
//   return (
//     <>
//       {myName}
//       <HeroSection myData={data} />;
//     </>
//   );
// };

// export default About;

import HeroSection from "./component/HeroSection";
import { useProductContext } from "./contex/ProductContex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Vaishali Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
