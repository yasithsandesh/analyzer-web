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

const FifthViewChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["1"],
      datasets: [
        {
          label: "Rise",
          data: [181],
          borderColor: '#5D9C59',
          backgroundColor: '#5D9C59',
        },

        {
          label: "Equal",
          data: [444],
          borderColor:  '#e6f2ff',
          backgroundColor: '#e6f2ff',
        },

        {
            label: "Fall",
            data: [444],
            borderColor: '#DF2E38',
            backgroundColor: '#DF2E38',
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

export default FifthViewChart;
