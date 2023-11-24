import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaShoppingCart,
  FaAlignJustify,
  FaShoppingBag,
  FaUtensilSpoon,
  FaList,
  FaUsers,
} from "react-icons/fa";

const DashBoard = () => {
  const isAdmin = true;
  return (
    <div className="flex max-w-screen-xl mx-auto">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome size={20} /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon size={20} /> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList size={20} /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook size={20} /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers size={20} /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          {/* shared navlinks */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome size={20} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaAlignJustify size={20} /> Menu
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
      <div className="flex-1 bg-[#E8E8E8] flex flex-col items-center  p-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
