import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          exact
          to="/"
          className="text-white px-4 py-2"
          activeclassname="font-bold text-red-500"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="text-whitepx-4 py-2"
          activeclassname="font-bold text-red-500"
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className="text-white px-4 py-2"
          activeclassname="font-bold text-red-500"
        >
          Our Menu
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/order/salad"
          className="text-white hover:text-blue-700 px-4 py-2"
          activeclassname="font-bold text-red-500"
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="text-white px-4 py-2"
          activeclassname="font-bold text-red-500"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white  max-w-screen-xl mx-auto">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-white text-sm md:text-xl">
          BistroBoss <br /> Restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
