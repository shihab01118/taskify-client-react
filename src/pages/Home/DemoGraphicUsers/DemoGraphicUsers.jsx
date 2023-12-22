import Chart from "react-apexcharts";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

const DemoGraphicUsers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  // chart data
  const chartData = {
    series: [40, 25, 20, 15], // Sample percentage breakdown
    options: {
      labels: ["Developers", "Project Managers", "Students", "Freelancers"],
      colors: ["#FF4560", "#008FFB", "#00E396", "#775DD0"], // Sample colors
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 768, // Tablet breakpoint
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 480, // Mobile breakpoint
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  //   demographic data
  const demographicItems = [
    {
      title: "Developers",
      description: "40% of our users are developers who benefit from Taskify!",
    },
    {
      title: "Project Managers",
      description:
        "25% of our users are project managers who benefit from Taskify!",
    },
    {
      title: "Students",
      description: "20% of our users are students who benefit from Taskify!",
    },
    {
      title: "Freelancers",
      description: "15% of our users are freelancers who benefit from Taskify!",
    },
  ];

  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-20">
      <h2
        data-aos="fade-up"
        className="text-2xl md:text-3xl font-semibold mb-6 text-center"
      >
        Who Benefits from Our Platform?
      </h2>
      <div
        data-aos="fade-in"
        className="mb-8 w-full md:w-1/2 mx-auto"
      >
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width="100%"
        />
      </div>
      <div data-aos="fade-up" className="swiper-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2, // Show 2 items on tablets
            },
            480: {
              slidesPerView: 1, // Show 1 item on mobile
            },
          }}
        >
          {demographicItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 bg-gray-200 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[#757575] text-sm font-medium">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DemoGraphicUsers;
