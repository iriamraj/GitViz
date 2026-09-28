import { useParams } from "react-router-dom";
import Card from "../../../Card";
import CardIcon from "../../../common/CardIcon";
import { useGithubRepos, useGithubUser } from "../../../../../../hooks/useGithub";
import { FiStar, FiGitBranch, FiFolder, FiUsers } from "react-icons/fi";

export default function Stats() {
	const { searchTerm } = useParams<{ searchTerm: string }>();
	const { data: user, isLoading: loadingUser } = useGithubUser(searchTerm);
	const { data: repos = [], isLoading: loadingRepos } = useGithubRepos(searchTerm);

	if (loadingUser || loadingRepos) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
			{[1, 2, 3, 4].map((i) => (
				<Card key={i} className="h-20 bg-(--colorDashBorder)/20">
					<div className="w-full h-full" />
				</Card>
			))}
		</div>
	);
}

	const totalStars = repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
	const totalForks = repos.reduce((acc: number, repo: any) => acc + (repo.forks_count || 0), 0);

	const statsData = [
		{ id: 1, name: "TOTAL REPOS", value: user?.public_repos ?? repos.length, Icon: FiFolder },
		{ id: 2, name: "TOTAL STARS", value: totalStars.toLocaleString(), Icon: FiStar },
		{ id: 3, name: "TOTAL FORKS", value: totalForks.toLocaleString(), Icon: FiGitBranch },
		{ id: 4, name: "FOLLOWERS", value: (user?.followers ?? 0).toLocaleString(), Icon: FiUsers },
	];

	return (
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
			{statsData.map(({ id, name, value, Icon }) => (
				<Card
					key={id}
					className="p-4 flex items-center gap-3.5 hover:[&>#iconHolder]:bg-(--colorPurple) hover:[&>#iconHolder>svg]:text-white transition-all"
				>
					<CardIcon>
						<Icon className="w-5 h-5 text-(--colorPurple) transition-colors duration-300" />
					</CardIcon>
					<div className="min-w-0">
						<p className="text-[11px] font-semibold text-(--colorTextLight) tracking-wider truncate">
							{name}
						</p>
						<p className="text-lg sm:text-2xl font-bold text-(--colorText) truncate">
							{value}
						</p>
					</div>
				</Card>
			))}
		</div>
	);
}