import PropTypes from "prop-types";
import { formatDistance, format } from "date-fns";
import { BsCalendar4Event } from "react-icons/bs";

const Task = ({ task, tasks, setTasks }) => {
  const {
    _id,
    requester_email,
    title,
    description,
    dueDate,
    priority,
    status,
  } = task || {};

  const date = format(new Date(dueDate), "MMM, dd");
  console.log(date);

  const remainingTime = formatDistance(new Date(dueDate), new Date(), {
    addSuffix: true,
  });
  console.log(remainingTime);

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

  return (
    <div className="py-4 px-3 hover:shadow-lg hover:bg-gray-100 transition-all border-b border-gray-300">
      <p
        className={`px-[6px] py-[2px] text-xs text-white w-fit rounded-full capitalize ${priorityBg}`}
      >
        {priority}
      </p>
      <h3 className="font-medium text-title mt-1">{title}</h3>
      <p className="text-sm mt-1 text-[#757575]">{description}</p>
      <div className="flex items-center gap-3 mt-2">
        <BsCalendar4Event className="text-sm" />
        <p className="text-[11px] px-[8px] py-[2px] bg-[#6D7C87] text-white rounded-full">Due Date {date}</p>
        <p className="text-xs font-medium text-[#757575]">{remainingTime}</p>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};

export default Task;
