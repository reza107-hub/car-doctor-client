import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const option = (
    <>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF3811" : "#444444",
            backgroundColor: "white",
          })}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <HashLink
          smooth={true} // Add the smooth prop
          className="text-[#444444]"
          to="#about"
        >
          About
        </HashLink>
      </li>
      <li>
      <HashLink
          smooth={true} // Add the smooth prop
          className="text-[#444444]"
          to="#services"
        >
          Services
        </HashLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF3811" : "#444444",
            backgroundColor: "white",
          })}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
      <HashLink
          smooth={true} // Add the smooth prop
          className="text-[#444444]"
          to="#contact"
        >
          Contacts
        </HashLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold  block md:hidden`}
          >
            {option}
            <li>
              <img
                className="md:h-[19.5px] w-12"
                src="https://i.ibb.co/gJXhCfS/Untitled-3.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="md:h-[19.5px] w-12"
                src="https://i.ibb.co/qMLFJDZ/Untitled.png"
                alt=""
              />
            </li>
          </ul>
        </div>
        <Link className="hover-bordered">
          <img className="h-14" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{option}</ul>
      </div>
      <div className="navbar-end">
        <>
          <img
            className="h-[19.5px] mr-5 hidden md:block"
            src="https://i.ibb.co/gJXhCfS/Untitled-3.png"
            alt=""
          />
          <img
            className="h-[19.5px] mr-5 hidden md:block"
            src="https://i.ibb.co/qMLFJDZ/Untitled.png"
            alt=""
          />
          <a className="btn btn-outline btn-primary normal-case">Appointment</a>
        </>
      </div>
    </div>
  );
};

export default Navbar;
