import About from "../About/About";
import Carousel from "./Carousel";

const Home = () => {
    return (
        <div>
            <div className="mt-5 h-[500px]">
                <Carousel></Carousel>
            </div>
            <About></About>
        </div>
    );
};

export default Home;