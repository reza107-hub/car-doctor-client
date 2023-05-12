import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Service = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card p-6 rounded-md border border-solid border-[#E8E8E8]">
      <figure>
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body mt-5 p-0">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="flex justify-between items-center">
        <p className="text-primary font-bold">Price: ${price}</p>
        <Link className="text-primary text-3xl font-bold">→</Link>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
