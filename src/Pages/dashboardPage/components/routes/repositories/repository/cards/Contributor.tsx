import { FiUsers } from "react-icons/fi";
import Card from "../../../../Card";
import HeadingCard from "../../../dashboard/cards/HeadingCard";
import { repoCommitsMap } from "../../../../../../../dummyData/commitsData";

export default function Contributor({ repoName }: { repoName?: string }) {
	const commits = repoName ? repoCommitsMap[repoName] || [] : [];

	const contributors = [
		{
			id: 1,
			name: commits[0]?.commit.author.name || "The Octocat",
			role: "Maintainer",
			avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
			commits: 142,
		},
		{
			id: 2,
			name: "Alex Rivera",
			role: "Contributor",
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			commits: 38,
		},
		{
			id: 3,
			name: "Sarah Chen",
			role: "Contributor",
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
			commits: 19,
		},
	];

	return (
		<Card className="w-full h-full p-4 flex flex-col gap-4">
			<HeadingCard Icon={FiUsers}>Top Contributors</HeadingCard>

			<div className="flex flex-col gap-3">
				{contributors.map((user) => (
					<div
						key={user.id}
						className="flex items-center justify-between p-2.5 rounded-2xl border border-(--colorDashBorder) bg-(--colorBackground)/50"
					>
						<div className="flex items-center gap-3 min-w-0">
							<img
								src={user.avatar}
								alt={user.name}
								className="w-9 h-9 rounded-full object-cover shrink-0 border border-(--colorDashBorder)"
							/>
							<div className="min-w-0">
								<p className="text-sm font-medium text-(--colorText) truncate">
									{user.name}
								</p>
								<p className="text-xs text-(--colorTextLight)">{user.role}</p>
							</div>
						</div>

						<span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-(--colorPurple)/10 text-(--colorPurple) shrink-0">
							{user.commits} commits
						</span>
					</div>
				))}
			</div>
		</Card>
	);
}