import About from "../About/About";
import Carousel from "./Carousel";
import Contact from "./Contact";
import CoreFeatures from "./CoreFeatures";
import OurTeam from "./OurTeam";
import Products from "./Products";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="mt-5 h-[500px]">
        <Carousel></Carousel>
      </div>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
      <OurTeam></OurTeam>
      <CoreFeatures></CoreFeatures>
    </div>
  );
};

export default Home;
