import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";

const App = () => {
  return (
    <div className="lg:w-[80%] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
