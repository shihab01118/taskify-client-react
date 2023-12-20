import Lottie from "lottie-react";
import bannerAnimation from "../../../assets/banner-animation.json";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-[#027970b3] to-[#68cc82b3] ">
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto flex flex-col lg:flex-row pt-[130px] text-center lg:text-left lg:pt-0 justify-between items-center">
        <div className="space-y-5 max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-title">
            Gear Your Wheel
          </h2>
          <p className="text-gray-700 font-medium">
            Streamlining Tasks Effortlessly - Empowering Productivity with
            Intuitive Task Management
          </p>
          <div>
            <Link to="/login">
              <button className="btn btn-primary">
                Let{"'"}s Explore <FaArrowTrendUp size={18} />
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-3/5 lg:w-2/5">
          <Lottie animationData={bannerAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
