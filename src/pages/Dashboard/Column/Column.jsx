import PropTypes from "prop-types";
import { FaList, FaArrowTrendUp } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import Task from "../Task/Task";
import "./Column.css";

const Column = ({ status, todos, inProgress, completed }) => {
  let title = "";
  let titleColor = "";
  let borderColor = "";
  let Icon = "";
  let tasksToMap = todos;

  // Determine the property based on the status
  switch (status) {
    case "todo":
      title = "Todo";
      titleColor = "text-[#AD1FF4]";
      borderColor = "border-t-[#A200F2]";
      Icon = <FaList />;
      tasksToMap = todos;
      break;
    case "inProgress":
      title = "In Progress";
      titleColor = "text-[#FF7C17]";
      borderColor = "border-t-[#FF6F00]";
      Icon = <FaArrowTrendUp />;
      tasksToMap = inProgress;
      break;
    case "completed":
      title = "Completed";
      titleColor = "text-[#83E445]";
      borderColor = "border-t-[#64DD17]";
      Icon = <BiTask />;
      tasksToMap = completed;
      break;
  }

  return (
    <div>
      <h2
        className={`capitalize font-medium px-3 py-2 border border-t-4 border-gray-300 rounded-md flex items-center gap-[6px] mb-3 ${titleColor} ${borderColor}`}
      >
        {Icon}
        {title}
        <span>({tasksToMap.length})</span>
      </h2>
      <div className="border border-gray-300 rounded-md h-[65vh] overflow-y-auto">
        {tasksToMap.length > 0 ? (
          tasksToMap.map((task) => <Task key={task?._id} task={task} />)
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-[#757575] font-medium">Empty List!</p>
          </div>
        )}
      </div>
    </div>
  );
};

Column.propTypes = {
  status: PropTypes.string,
  todos: PropTypes.array,
  inProgress: PropTypes.array,
  completed: PropTypes.array,
};

export default Column;
