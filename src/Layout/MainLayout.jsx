import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-sans">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <div className="min-h-screen px-4 md:px-0">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
