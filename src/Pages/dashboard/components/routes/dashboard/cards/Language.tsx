import DonutChart from "../../../charts/DonutChart";
import CardContainer from "../../../common/CardContainer";
import CardHeading from "../../../common/CardHeading";

export default function Language() {
	const chartData = [
		{ name: "JavaScript", value: 40, color: "#f7df1e" },
		{ name: "TypeScript", value: 30, color: "#3178c6" },
		{ name: "C++", value: 20, color: "#f34b7d" },
		{ name: "Python", value: 10, color: "#3572A5" },
		{ name: "Java", value: 10, color: "#5642A5" },
		{ name: "Lua", value: 10, color: "#806582" },
		{ name: "C++", value: 5, color: "#f34b7d" },
		{ name: "TypeScript", value: 12, color: "#3178c6" },
	];

	const dummyData = Array.from({ length: 10 }).fill("1");

	const labels = chartData.map((item) => item.name);
	const dataValues = chartData.map((item) => item.value);
	const colors = chartData.map((item) => item.color);
	return (
		<CardContainer className="gap-2.5 p-3.5 w-129.5 h-fill">
			<CardHeading>Top Language</CardHeading>
			<div className="flex flex-col items-center gap-3 md:h-43 md:flex-row">
				<div className="h-35 w-35 shrink-0 md:h-35 md:w-35">
					<DonutChart labels={labels} dataValues={dataValues} colors={colors} />
				</div>

				<div className="flex h-full w-fit scrollbar-none flex-row flex-wrap justify-center gap-3 overflow-y-scroll md:flex-col md:flex-nowrap md:pt-13 text-[12px] shrink-0 ">
					{chartData.map((item, index) => (
						<div key={index} className="flex shrink-0 items-center gap-2">
							<span
								className="h-2.5 w-2.5 shrink-0 rounded-full"
								style={{ backgroundColor: item.color }}
							/>
							<span className="text-xs font-medium text-gray-700 dark:text-gray-800">
								{item.name}
							</span>
						</div>
					))}
				</div>
				<div className="flex h-full w-full flex-col items-start gap-2 md:flex-row md:gap-0 text-[12px]">
					<div className="h-0.5 w-full bg-gray-400 md:h-full md:w-0.5 shrink-0"></div>
					<div className="flex h-30 w-full scrollbar-none flex-col items-center gap-2.5 overflow-y-scroll md:h-full md:items-start">
						{dummyData.map(() => (
							<div className="flex items-center gap-2 pl-2">
								<div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
								<p>
									<span>Portfolio-website</span>
									<span className="ml-1 inline-block rounded-[3px] bg-gray-400 p-px px-1">
										{" "}
										93% Javascript
									</span>
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</CardContainer>
	);
}
