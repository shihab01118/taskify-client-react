import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Taskify - Home</title>
      </Helmet>
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
