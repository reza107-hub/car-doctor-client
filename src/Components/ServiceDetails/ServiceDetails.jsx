import { useLoaderData } from "react-router-dom";
import DynamicBanner from "../Shared/DynamicBanner";
import Facilities from "./Facilities";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <DynamicBanner>Service Details</DynamicBanner>
      <div className="mt-32 grid lg:grid-cols-[3fr,1fr] gap-6">
        <div>
          <img className="w-full" src={data.img} alt="" />
          <p className="mt-12 mb-7 text-3xl font-bold">{data.title}</p>
          <p className="text-neutral mb-7">{data.description}</p>
          <div className="grid lg:grid-cols-2 gap-6">
            {data.facility.map((facility) => (
              <Facilities key={facility.name} facility={facility}></Facilities>
            ))}
          </div>
        </div>
        <div>
          <p className="text-3xl font-bold mb-7">Price: ${data.price}</p>
          <Link to={`/checkOut/${data._id}`}>
            <button className="btn btn-primary normal-case w-full">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
