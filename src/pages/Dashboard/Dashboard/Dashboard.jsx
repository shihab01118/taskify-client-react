import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Lists from "../Lists/Lists";
import useGetAllTasks from "../../../hooks/useGetAllTasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Dashboard = () => {
  const { tasks } = useGetAllTasks();

  return (
    <>
      <Helmet>
        <title>Taskify - Dashboard</title>
      </Helmet>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Lists tasks={tasks} />
      </DndProvider>
    </>
  );
};

export default Dashboard;
