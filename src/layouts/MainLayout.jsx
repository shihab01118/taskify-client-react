import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="font-poppins">
      {location.pathname !== "/dashboard" && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
