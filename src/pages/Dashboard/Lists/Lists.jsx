import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Column from "../Column/Column";

const Lists = ({ tasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fTodos = tasks?.filter((task) => task?.status === "todo");
    const fInProgress = tasks?.filter((task) => task?.status === "inProgress");
    const fCompleted = tasks?.filter((task) => task?.status === "completed");

    setTodos(fTodos);
    setInProgress(fInProgress);
    setCompleted(fCompleted);
  }, [tasks]);

  const statuses = ["todo", "inProgress", "completed"];

  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 grid grid-cols-3 gap-10 justify-between">
      {statuses?.map((status, index) => (
        <Column
          key={index}
          status={status}
          tasks={tasks}
          todos={todos}
          inProgress={inProgress}
          completed={completed}
        />
      ))}
    </div>
  );
};

Lists.propTypes = {
  tasks: PropTypes.array,
};

export default Lists;
