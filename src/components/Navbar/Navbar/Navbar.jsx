import logo from "../../../assets/planning.png";

const Navbar = () => {
  const navLinks = <></>;

  return (
    <div
      id="NavBar"
      className="w-full bg-transparent fixed top-0 left-0 z-50 py-4 transition-all"
    >
      <div className="max-w-6xl mx-5 md:mx-10 lg:mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h2 className="text-secondary font-semibold text-2xl md:text-3xl lg:text-4xl uppercase">
            Taskify
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 font-medium cursor-pointer">{navLinks}</ul>
        </div>
        <div className="md:hidden">{/* <Dropdown /> */}</div>
      </div>
    </div>
  );
};

export default Navbar;
