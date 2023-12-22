import logo from "../../../assets/images/planning.png";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto py-20">
        <div className="flex flex-col md:flex-row justify-center gap-6 md:justify-between">
          <div
            data-aos="fade-in"
            className="flex items-center gap-3 w-fit mx-auto md:mx-0"
          >
            <img src={logo} alt="logo" className="w-8 h-8" />
            <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl uppercase">
              Taskify
            </h2>
          </div>
          <div data-aos="fade-in">
            <p className="font-medium text-center md:text-left">
              Connect with us:
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                className="text-primary underline"
                href="https://www.facebook.com"
              >
                Facebook
              </a>
              <a
                className="text-primary underline"
                href="https://www.twitter.com"
              >
                Twitter
              </a>
              <a
                className="text-primary underline"
                href="https://www.linkedin.com"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-10 text-sm">
            Copyright © {new Date().getFullYear()}{" "}
            <a
              href="https://taskify-6b7f9.web.app"
              className="text-primary underline"
            >
              Taskify
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
