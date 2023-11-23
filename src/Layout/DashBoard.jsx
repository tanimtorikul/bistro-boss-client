import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaShoppingCart,
  FaAlignJustify,
  FaShoppingBag
} from "react-icons/fa";

const DashBoard = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
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
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome size={20} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaAlignJustify  size={20} /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag size={20} /> Order
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 bg-[#E8E8E8] flex flex-col items-center justify-center p-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
