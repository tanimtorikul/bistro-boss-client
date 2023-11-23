import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";

const DashBoard = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#da9021]">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart size={20} /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome size={20} /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar size={20} /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd size={20} /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaBook size={20} /> My bookings
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
