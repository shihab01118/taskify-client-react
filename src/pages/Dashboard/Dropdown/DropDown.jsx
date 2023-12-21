import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then(navigate("/"));
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full cursor-pointer border-[1px] border-neutral-200 hover:shadow-lg transition"
      >
        <div>
          {/* Avatar */}
          <img
            className="rounded-full w-10 h-10 md:w-12 md:h-12"
            referrerPolicy="no-referrer"
            src={user && user.photoURL ? user.photoURL : avatarImg}
            alt="profile"
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[50vw] md:max-w-[30vw] lg:max-w-[15vw] bg-white overflow-hidden right-0 top-12 md:top-14 text-sm border border-[#92a5b3]">
          <div className="flex flex-col">
            <p className="px-4 py-2 hover:bg-base-100 transition font-semibold text-[#757575]">
              {user?.displayName}
            </p>
            <hr />
            <div className="px-4 py-2">
              <button
                onClick={handleLogOut}
                className="btn btn-primary btn-outline w-full font-medium py-2"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
