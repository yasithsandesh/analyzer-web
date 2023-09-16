import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FourthViewChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["1"],
      datasets: [
        {
          label: "Odd",
          data: [181],
          borderColor: "#007FFF",
          backgroundColor: "#007FFF",
        },

        {
          label: "Even",
          data: [444],
          borderColor: "#80bfff",
          backgroundColor: "#80bfff",
        },
        
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: false,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4  rounded-lg barChart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default FourthViewChart;
