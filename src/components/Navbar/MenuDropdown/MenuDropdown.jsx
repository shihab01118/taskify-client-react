import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden pt-[3px]">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:max-w-[15vw] bg-white overflow-hidden right-5 top-12 text-sm border border-[#92a5b3]">
          <div className="flex flex-col cursor-pointer">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className="px-4 py-2 hover:bg-base-100 transition font-semibold"
            >
              Home
            </NavLink>
            <hr />
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/about"
              className="px-4 py-2 hover:bg-base-100 transition font-semibold"
            >
              About
            </NavLink>
            <hr />
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/features"
              className="px-4 py-2 hover:bg-base-100 transition font-semibold"
            >
              Features
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
export default MenuDropdown;
