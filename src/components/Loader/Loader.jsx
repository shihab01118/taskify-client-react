import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <ScaleLoader color="#0952CC" size={100} />
    </div>
  );
};

export default Loader;
