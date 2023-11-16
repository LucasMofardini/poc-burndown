import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import Data from "./Data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = [
  "23/04/2023",
  "23/07/2023",
  "23/10/2023",
  "24/1/2024",
  "24/4/2024",
  "24/10/2024",
  "24/1/2025",
  "24/4/2025",
  "24/10/2025",
  "26/1/2026",
  "26/4/2026",
  "26/4/2026",
  "26/10/2026",
  "27/1/2027",
  "27/4/2027"
];

export const data = {
  type: "line",
  labels,
  datasets: [
    {
      label: "Lastro",
      data: Data.LCASmall,
      borderColor: "rgb(0, 27, 121)",
      backgroundColor: "rgba(0, 27, 121, 0.5)",
      fill: true,
    },
    {
      label: "LCA",
      data: Data.LastroSmall,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: true,
    },
  ],
};

export const options = {
  responsive: true,
  type: "line",
  data: data,
  scales: {
    y: {},
    x: {},
  },
  animation: {
    duration: 750,
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "BurnDown",
    },
  },
};

const MainChart = () => {

  return (
    <>
      <section style={{ width: "80%" }}>
        <Line options={options} data={data} />
      </section>
    </>
  );
};

export default MainChart;
