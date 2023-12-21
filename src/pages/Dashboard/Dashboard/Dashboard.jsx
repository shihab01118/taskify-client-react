import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Lists from "../Lists/Lists";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axiosSecure(`/tasks/${user?.email}`).then((res) => setTasks(res?.data));
  }, [axiosSecure, user]);

  return (
    <>
      <Helmet>
        <title>Taskify - Dashboard</title>
      </Helmet>
      <Header />
      <Lists tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default Dashboard;
