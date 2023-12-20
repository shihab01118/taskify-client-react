import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { BiSolidUserAccount } from "react-icons/bi";
import signup_image from "../../assets/images/signup.jpg";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // password validation
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)
    ) {
      toast.error(
        "Password must contain 6 characters, one capital letter and a special character."
      );
      return;
    }

    // create user
    const result = await createUser(email, password);

    // update user profile
    await updateUserProfile(name, imgURL);

    // navigate user after signup
    if (result?.user) {
      navigate("/dashboard");
      toast.success("Registration Successful!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Taskify - Sign Up</title>
      </Helmet>
      <div className="flex min-h-screen items-center">
        <div className="max-w-4xl w-full mx-8 md:mx-16 lg:mx-auto bg-base-100 rounded-xl shadow-xl p-10 md:p-16 flex flex-col-reverse lg:flex-row md:gap-8 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-title">
              Sign up
            </h2>
            <form onSubmit={handleSignUp}>
              <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-5">
                <FaUser className="text-sm" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none text-sm md:text-base w-full"
                  onBlur={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-5">
                <TbMailFilled className="text-sm" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="outline-none text-sm md:text-base w-full"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-5">
                <FaLock className="text-sm" />
                <input
                  type="password"
                  placeholder="Your Password"
                  className="outline-none text-sm md:text-base w-full"
                  onBlur={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-7">
                <BiSolidUserAccount className="text-sm" />
                <input
                  type="url"
                  placeholder="Your Image URL"
                  className="outline-none text-sm md:text-base w-full"
                  onBlur={(e) => setImgURL(e.target.value)}
                  required
                />
              </div>
              <div>
                <button className="btn btn-primary">Sign Up</button>
                <Link to="/login">
                  <p className="font-medium mt-5 text-gray-500 hover:text-primary hover:underline text-center lg:hidden">
                    Already have an account?
                  </p>
                </Link>
              </div>
            </form>
          </div>
          <div>
            <img src={signup_image} alt="sign up" className="w-fit mx-auto" />
            <Link to="/login">
              <p className="font-medium text-center pt-3 text-gray-500 hover:text-primary hover:underline hidden lg:block">
                Already have an account?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
