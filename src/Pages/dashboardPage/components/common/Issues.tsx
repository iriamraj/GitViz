import { FaRegDotCircle } from "react-icons/fa";
import Card from "../Card";
import HeadingCard from "../routes/dashboard/cards/HeadingCard";

const issuesData = [
	{ id: 1, title: "TypeScript strict type mismatch on JSON import", tag: "bug", priority: "High" },
	{ id: 2, title: "Add analytics chart components for commit frequency", tag: "feature", priority: "Medium" },
	{ id: 3, title: "Backdrop filter opacity bug on dark mode toggle", tag: "ui", priority: "Low" },
];

export default function Issues({ width }: { width?: string }) {
	return (
		<Card
			className={`hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-4 flex flex-col gap-4 ${
				width || "w-full"
			}`}
		>
			<div className="flex items-center justify-between">
				<HeadingCard Icon={FaRegDotCircle}>Open Issues</HeadingCard>
				<span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500">
					{issuesData.length} Active
				</span>
			</div>

			<div className="flex flex-col gap-2.5">
				{issuesData.map((issue) => (
					<div
						key={issue.id}
						className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-(--colorDashBorder) bg-(--colorBackground)/30"
					>
						<div className="flex items-center gap-3 min-w-0">
							<FaRegDotCircle className="w-4 h-4 text-amber-500 shrink-0" />
							<p className="text-xs sm:text-sm font-medium text-(--colorText) truncate">
								{issue.title}
							</p>
						</div>

						<span
							className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md shrink-0 ${
								issue.priority === "High"
									? "bg-red-500/10 text-red-500"
									: issue.priority === "Medium"
									? "bg-amber-500/10 text-amber-500"
									: "bg-blue-500/10 text-blue-500"
							}`}
						>
							{issue.priority}
						</span>
					</div>
				))}
			</div>
		</Card>
	);
}