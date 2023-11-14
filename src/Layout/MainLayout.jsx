import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-sans">
      <Navbar></Navbar>
      <div className="min-h-screen px-4 md:px-0">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
