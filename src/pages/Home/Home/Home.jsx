import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import DemoGraphicUsers from "../DemoGraphicUsers/DemoGraphicUsers";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Taskify - Home</title>
      </Helmet>
      <Banner />
      <DemoGraphicUsers />
      <Footer />
    </>
  );
};

export default Home;
