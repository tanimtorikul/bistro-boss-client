import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <ul className="flex items-center space-x-4">
      <li>
        <NavLink
          exact
          to="/"
          className="text-white px-4 py-2"
          activeClassName="font-bold text-red-500"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="text-white px-4 py-2"
          activeClassName="font-bold text-red-500"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className="text-white px-4 py-2"
          activeClassName="font-bold text-red-500"
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className="text-white hover:text-blue-700 px-4 py-2"
          activeClassName="font-bold text-red-500"
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="text-white px-4 py-2"
          activeClassName="font-bold text-red-500"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <Link to="/dashboard/cart" className="flex items-center">
          <button className="btn">
            <FaShoppingCart size={20} />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
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
      <div className="navbar-center hidden lg:flex">{navLinks}</div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="mr-2">{user?.displayName}</span>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
