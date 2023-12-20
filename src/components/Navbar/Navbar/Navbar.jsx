import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/planning.png";

const Navbar = () => {
    window.addEventListener("scroll", () => {
        const navbar = document.getElementById("NavBar");
        if (window.scrollY > 0) {
          navbar.classList.add("bg-gray-700");
          navbar.classList.remove("bg-transparent");
        } else {
          navbar.classList.remove("bg-gray-700");
          navbar.classList.add("bg-transparent");
        }
      });

  const navLinks = (
    <>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/feature">Feature</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );

  return (
    <div
      id="NavBar"
      className="w-full bg-transparent fixed top-0 left-0 z-50 py-4 transition-all bg-opacity-60"
    >
      <div className="max-w-6xl mx-5 md:mx-10 lg:mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h2 className="text-title font-semibold text-2xl md:text-3xl lg:text-4xl uppercase">
            Taskify
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-8 font-medium cursor-pointer">{navLinks}</ul>
        </div>
        <div className="md:hidden">{/* <Dropdown /> */}</div>
      </div>
    </div>
  );
};

export default Navbar;
