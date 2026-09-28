import { FiGitCommit } from "react-icons/fi";
import Card from "../../../../Card";
import HeadingCard from "../../../dashboard/cards/HeadingCard";
import LineChart from "../../../../charts/LineChart";
import { repoCommitsMap } from "../../../../../../../dummyData/commitsData";

export default function Commits({ repoName }: { repoName?: string }) {
	const commits = repoName ? repoCommitsMap[repoName] || [] : [];

	const XAxisLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
	const chartLines = [
		{
			label: "Commits",
			data: commits.length > 0 ? [12, 19, 8, 25, 32, 18, 40] : [5, 10, 15, 8, 20, 25, 30],
			color: "#6f60b5",
		},
	];

	return (
		<Card className="w-full p-4 flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<HeadingCard Icon={FiGitCommit}>Recent Commits</HeadingCard>
				<span className="text-xs text-(--colorTextLight) font-medium">Last 7 Months</span>
			</div>

			<div className="w-full h-56 sm:h-64">
				<LineChart lines={chartLines} XAxisLabel={XAxisLabel} />
			</div>

			{commits.length > 0 && (
				<div className="flex flex-col gap-2 mt-2 border-t border-(--colorDashBorder) pt-3">
					<p className="text-xs font-semibold text-(--colorTextLight) uppercase">
						Latest Push
					</p>
					<div className="flex items-center justify-between text-xs sm:text-sm">
						<span className="font-mono text-(--colorPurple) truncate max-w-50">
							{commits[0].sha.substring(0, 7)}
						</span>
						<span className="text-(--colorText) truncate max-w-62.5 font-medium">
							{commits[0].commit.message}
						</span>
					</div>
				</div>
			)}
		</Card>
	);
}
