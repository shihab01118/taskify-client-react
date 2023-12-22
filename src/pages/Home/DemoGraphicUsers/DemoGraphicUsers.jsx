import Chart from "react-apexcharts";

const DemoGraphicUsers = () => {
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

  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-20">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Who Benefits from Our Platform?
      </h2>
      <div className="mb-8">
        {/* ApexCharts pie chart */}
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width="50%"
        />
      </div>
      {/* Demographic items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Developers</h3>
          <p>40% of our users are developers who benefit from...</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Project Managers</h3>
          <p>25% of our users are project managers who benefit from...</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Students</h3>
          <p>20% of our users are students who benefit from...</p>
        </div>
      </div>
    </div>
  );
};

export default DemoGraphicUsers;
