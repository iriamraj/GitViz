import Card from "../../../Card";
import { LuCodeXml } from "react-icons/lu";
import SmallCard from "./SmallCard";
import DonutChart from "../../../charts/DonutChart";
import HeadingCard from "./HeadingCard";

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

export default function TopLanguage() {
	const dummyData = Array.from({ length: 10 }).fill("1");

	const labels = chartData.map((item) => item.name);
	const dataValues = chartData.map((item) => item.value);
	const colors = chartData.map((item) => item.color);

	return (
		<Card className="hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 w-full xl:w-110 overflow-hidden">
			<HeadingCard Icon={LuCodeXml}>Top Language</HeadingCard>

			<div className="flex flex-col sm:flex-row h-auto sm:h-45 items-center gap-3 mt-2">
				<div className="h-45 w-44 shrink-0 p-4">
					<DonutChart labels={labels} dataValues={dataValues} colors={colors} />
				</div>

				<div className="flex h-full w-full scrollbar-none justify-start sm:justify-center gap-3 overflow-y-scroll flex-wrap content-center">
					{chartData.map((item, index) => (
						<div key={index} className="flex shrink-0 items-center gap-2 h-fit">
							<span
								className="h-2.5 w-2.5 shrink-0 rounded-full"
								style={{ backgroundColor: item.color }}
							/>
							<span className="text-xs font-medium text-(--colorText)">
								{item.name}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className="flex h-full items-start">
				<div className="flex h-41 w-full scrollbar-none justify-center gap-5 overflow-y-scroll flex-wrap pt-2">
					{dummyData.map((_, index) => (
						<SmallCard className="w-fit pr-5" key={index}>
							<div className="flex items-center gap-2 pl-2">
								<div className="h-2.5 w-2.5 rounded-full bg-green-400 shrink-0"></div>
								<p className="flex flex-col text-(--colorText)">
									<span>Portfolio-website</span>
									<span className="inline-block rounded-[3px] p-px px-1 text-[12px]">
										93% Javascript
									</span>
								</p>
							</div>
						</SmallCard>
					))}
				</div>
			</div>
		</Card>
	);
}