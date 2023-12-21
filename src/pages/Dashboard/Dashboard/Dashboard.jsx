import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Lists from "../Lists/Lists";
import useGetAllTasks from "../../../hooks/useGetAllTasks";

const Dashboard = () => {
  const { tasks } = useGetAllTasks();

  return (
    <>
      <Helmet>
        <title>Taskify - Dashboard</title>
      </Helmet>
      <Header />
      <Lists tasks={tasks} />
    </>
  );
};

export default Dashboard;
