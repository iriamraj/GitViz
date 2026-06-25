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
import type { BarChartType } from "../../types/BarChartType";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function BarChart({ bars, XAxisLabel }: BarChartType) {
  const dataSets = bars.map((bar) => {
    const borderRadius = {
      topLeft: 3,
      topRight: 3,
      bottomLeft: 0,
      bottomRight: 0,
    };

    return {
      label: bar.label,
      data: bar.data,
      backgroundColor: bar.color,
      borderColor: bar.color,
      borderWidth: 1,
      barThickness: 20,
      categoryPercentage: 0.4,
      borderRadius: bar.borderRadius ? borderRadius : {},
    };
  });

  const data = {
    labels: XAxisLabel,
    datasets: dataSets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          padding: 0,
          font: {
            size: 10,
          },
        },
      },
      y: {
        stacked: true,
        ticks: {
          font: {
            size: 10,
          },
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
