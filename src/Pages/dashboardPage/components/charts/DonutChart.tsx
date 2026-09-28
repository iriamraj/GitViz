import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useShallow } from "zustand/shallow";
import useThemeStore from "../../../store/ThemeStore";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
	labels: string[];
	dataValues: number[];
	colors: string[];
}

export default function DonutChart({ labels, dataValues, colors }: DonutChartProps) {
	const { isDark } = useThemeStore(useShallow(({ isDark }) => ({ isDark })));

	const data = {
		labels: labels,
		datasets: [
			{
				data: dataValues,
				backgroundColor: colors,
				borderColor: isDark ? "#1c1c24" : "#ffffff",
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
				display: true,
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

	return <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />;
}