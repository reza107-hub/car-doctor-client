import { useEffect, useRef, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [sorting, setSorting] = useState("asc");
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const handleSortingChange = (event) => {
    setSorting(event.target.value);
    console.log(sorting);
  };
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  useEffect(() => {
    fetch(
      `https://car-doctor-server-two-silk.vercel.app/services?search=${search}&sort=${sorting}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [search, sorting]);
  return (
    <div id="services">
      <p className="text-primary font-bold text-center mb-5">Service</p>
      <p className="text-4xl font-bold text-center mb-5">Our Service Area</p>
      <p className="text-neutral text-center mb-5 mx-auto lg:w-[50%]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>
      <div className="flex justify-between">
        <div>
          <label htmlFor="sorting">Pick category</label>
          <br />
          <select
            className="select select-bordered"
            value={sorting}
            onChange={handleSortingChange}
          >
            <option value="asc">Price high to low</option>
            <option value="desc">Price low to high</option>
          </select>
        </div>
        <div>
          <div className="form-control">
            <div className="input-group">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square" onClick={handleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
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
