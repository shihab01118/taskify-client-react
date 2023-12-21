import { FiEdit, FiPlus } from "react-icons/fi";
import DropDown from "../Dropdown/DropDown";

const Header = () => {
  return (
    <div className="border-gray-300 border-b shadow-md py-4 bg-base-200">
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto flex justify-between items-center">
        <h2 className="text-title text-lg md:text-xl lg:text-2xl font-medium flex items-center gap-2">
          <FiEdit className="text-[#FFC99F]" /> Manage Your Tasks
        </h2>
        <div className="flex items-center gap-8">
          <button className="btn btn-primary rounded-full font-medium">
            <FiPlus size={22} /> New Task
          </button>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
