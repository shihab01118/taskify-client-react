import PropTypes from "prop-types";
import { formatDistance, format } from "date-fns";
import { BsCalendar4Event } from "react-icons/bs";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useGetAllTasks from "../../../hooks/useGetAllTasks";

const Task = ({ task }) => {
  const { refetch } = useGetAllTasks();
  const axiosSecure = useAxiosSecure();
  const { _id, title, description, dueDate, priority } = task || {};

  const date = format(new Date(dueDate), "MMM, dd");

  const remainingTime = formatDistance(new Date(dueDate), new Date(), {
    addSuffix: true,
  });

  let priorityBg = "";

  switch (priority) {
    case "high":
      priorityBg = "bg-[#FF3D00]";
      break;
    case "moderate":
      priorityBg = "bg-[#FFAB00]";
      break;
    case "low":
      priorityBg = "bg-primary";
      break;
  }

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tasks/${_id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="py-4 px-3 hover:shadow-lg hover:bg-gray-100 transition-all border-b border-gray-300 relative">
      <p
        className={`px-[6px] py-[2px] text-xs text-white w-fit rounded-full capitalize ${priorityBg}`}
      >
        {priority}
      </p>
      <h3 className="font-medium text-title mt-1">{title}</h3>
      <p className="text-sm mt-1 text-[#757575]">{description}</p>
      <div className="flex items-center gap-3 mt-2">
        <BsCalendar4Event className="text-sm" />
        <p className="text-[11px] px-[8px] py-[2px] bg-[#6D7C87] text-white rounded-full">
          Due Date {date}
        </p>
        <p className="text-xs font-medium text-[#757575]">{remainingTime}</p>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-600 absolute top-4 right-3"
      >
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
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
