import { FiEdit, FiPlus } from "react-icons/fi";
import Modal from "react-modal";
import DropDown from "../Dropdown/DropDown";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "550px",
    width: "100%",
  },
};

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="border-gray-300 border-b shadow-md py-4 bg-base-200">
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto flex justify-between items-center">
        <h2 className="text-title text-lg md:text-xl lg:text-2xl font-medium flex items-center gap-2">
          <FiEdit className="text-primary" /> Manage Your Tasks
        </h2>
        <div className="flex items-center gap-8">
          <button
            onClick={openModal}
            className="btn btn-primary rounded-full font-medium"
          >
            <FiPlus size={22} /> New Task
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-title text-lg md:text-xl lg:text-2xl font-medium flex items-center gap-2">
                <FiEdit className="text-primary" /> New Task
              </h2>
              <button className="font-medium text-lg" onClick={closeModal}>
                X
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="mb-2" htmlFor="title">
                  <span className="font-medium">*Task Title</span>
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Type here..."
                  className="p-2 focus:outline-none border hover:border hover:border-primary focus:border focus:border-primary rounded"
                />
              </div>
              <div className="form-control mt-4">
                <label className="mb-2" htmlFor="description">
                  <span className="font-medium">*Task Description</span>
                </label>
                <textarea
                  id="description"
                  type="text"
                  placeholder="Type here..."
                  className="p-2 focus:outline-none border hover:border hover:border-primary focus:border focus:border-primary rounded"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="flex flex-col">
                  <label className="mb-2">
                    <span className="font-medium">*Due Date</span>
                  </label>
                  <DatePicker
                    className="focus:outline-none border focus:border-primary hover:border-primary rounded p-2 cursor-pointer"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="w-[150px]">
                  <label>
                    <span className="font-medium">*Priority</span>
                  </label>
                  <select className="p-2 border hover:border-primary focus:border-primary w-full mt-2 rounded focus:outline-none">
                    <option value="high">High</option>
                    <option value="moderate">Moderate</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 w-fit mx-auto">
                <button className="btn px-10 py-1 btn-primary font-medium text-base">
                  Add Task
                </button>
              </div>
            </form>
          </Modal>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
