import About from "../About/About";
import Carousel from "./Carousel";
import Contact from "./Contact";
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
    </div>
  );
};

export default Home;
