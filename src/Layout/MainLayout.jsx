import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="font-sans">
      <div className="max-w-screen-xl mx-auto">
        {noHeaderFooter || <Navbar />}
        <div className="min-h-screen px-4 md:px-0">
          <Outlet />
        </div>
        {noHeaderFooter || <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;
