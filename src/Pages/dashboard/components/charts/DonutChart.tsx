import { Doughnut } from "react-chartjs-2"; 
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  labels: string[];
  dataValues: number[];
  colors: string[];
}

export default function DonutChart({ labels, dataValues, colors }: DonutChartProps) {
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: colors,
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "55%",
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true, // This configuration will now only apply here
        color: "#ffffff",
        font: {
          weight: "bold" as const,
          size: 11,
        },
        formatter: (value: number) => {
          return `${value}%`;
        },
      },
    },
  };

  // 2. Pass the plugin locally via the plugins array prop 
  return <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />;
}