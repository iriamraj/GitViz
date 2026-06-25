import { Line } from "react-chartjs-2";
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

import type { LineChartType } from "../../types/LineChartType";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function LineChart({ lines, XAxisLabel }: LineChartType) {
  const dataSets = lines.map((line) => ({
    label: line.label,
    data: line.data,
    borderColor: line.color,
    fill: true,
    tension: 0.3,
    borderWidth: 2,

    pointBackgroundColor: "#6f60b5",
    pointBorderColor: "#d1d5dc",
    pointBorderWidth: 2,
    pointRadius: 5,

    pointHoverBackgroundColor: "#6f60b5",
    pointHoverBorderColor: "#d1d5dc",
    pointHoverBorderWidth: 3,
    pointHoverRadius: 8,

    backgroundColor: (context: any) => {
      const chart = context.chart;
      const { ctx, chartArea } = chart;

      if (!chartArea) return null;

      const gradient = ctx.createLinearGradient(
        1,
        chartArea.top,
        0,
        chartArea.bottom,
      );
      gradient.addColorStop(0, "rgba(111, 96, 181, 0.4)");
      gradient.addColorStop(1, "rgba(111, 96, 181, 0.0)");

      return gradient;
    },
  }));

  const data = {
    labels: XAxisLabel,
    datasets: dataSets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          padding: 0,
          font: { size: 10 },
        },
      },
      y: {
        // grid: { display: false },
        ticks: { font: { size: 10 } },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}
