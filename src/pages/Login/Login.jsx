import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TbMailFilled } from "react-icons/tb";
import login_image from "../../assets/images/signin.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sign in user
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn(email, password);

      // navigate user after successfull sign in
      if (result.user) {
        navigate(from, { replace: true });
        toast.success("Login Successful!");
      }
    } catch (error) {
      toast.error("Invalid Email/Password!");
    }
  };

  // user registration with google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      // navigate user after successfull sign in
      if (result.user) {
        navigate(from, { replace: true });
        toast.success("Login Successful!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Taskify - Sign In</title>
      </Helmet>
      <div className="flex items-center min-h-screen">
        <div className="max-w-4xl w-full mx-8 md:mx-16 lg:mx-auto bg-base-100 rounded-xl shadow-xl p-10 md:p-16 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-20">
          <div>
            <img src={login_image} alt="sign up" className="w-fit mx-auto" />
            <p className="mt-5 text-center text-gray-500 hidden lg:block">
              <Link
                className="font-medium  hover:text-primary hover:underline"
                to="/register"
              >
                Create an account
              </Link>
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-title">
              Sign In
            </h2>
            <form onSubmit={handleSignIn}>
              <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-5">
                <TbMailFilled className="text-sm" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="outline-none text-sm md:text-base"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-5">
                <FaLock className="text-sm" />
                <input
                  type="password"
                  placeholder="Your Password"
                  className="outline-none text-sm md:text-base"
                  onBlur={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="pt-6">
                <button className="btn btn-primary" type="submit">
                  Sign In
                </button>
                <p className="mt-5 text-center text-gray-500 lg:hidden">
                  <Link
                    className="font-medium hover:text-primary hover:underline"
                    to="/register"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
            <div className="flex gap-5 mt-6 md:mt-10 items-center w-fit mx-auto lg:mx-0">
              <p>Or login with</p>
              <div className="flex gap-3">
                <button onClick={handleGoogleSignIn} className="text-3xl">
                  <FcGoogle />
                </button>
                <button className="btn text-white bg-[#3B5998] rounded-lg btn-square btn-sm">
                  <FaFacebookF />
                </button>
                <button className="btn text-white bg-[#1DA0F2] rounded-lg btn-square btn-sm">
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
