import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Taskify - Dashboard</title>
      </Helmet>
      <Header />
    </>
  );
};

export default Dashboard;
