import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-two-silk.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services">
      <p className="text-primary font-bold text-center mb-5">Service</p>
      <p className="text-4xl font-bold text-center mb-5">Our Service Area</p>
      <p className="text-neutral text-center mb-5 mx-auto lg:w-[50%]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-primary mt-7">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
