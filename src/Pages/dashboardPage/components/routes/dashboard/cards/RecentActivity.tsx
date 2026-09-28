import { useParams, Link } from "react-router-dom";
import Card from "../../../Card";
import { useGithubRepos } from "../../../../../../hooks/useGithub";
import { GoRepo } from "react-icons/go";
import { FiStar } from "react-icons/fi";

export default function RecentActivity() {
	const { searchTerm } = useParams<{ searchTerm: string }>();
	const { data: repos = [], isLoading } = useGithubRepos(searchTerm);

	if (isLoading) {
		return (
			<Card className="p-4 w-full lg:w-80 animate-pulse h-64">
				<div className="h-6 w-1/2 bg-(--colorDashBorder) rounded mb-4" />
			</Card>
		);
	}

	const recentRepos = [...repos]
		.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
		.slice(0, 5);

	return (
		<Card className="p-4 w-full lg:w-80 flex flex-col gap-4">
			<h3 className="font-semibold text-(--colorText)">Recent Repositories</h3>
			<div className="flex flex-col gap-3">
				{recentRepos.map((repo: any) => (
					<Link
						key={repo.id}
						to={`/dashboard/${searchTerm}/repositories/${repo.name}`}
						className="flex items-center justify-between p-2 rounded-lg hover:bg-(--colorBackground) transition-colors border border-transparent hover:border-(--colorDashBorder)"
					>
						<div className="flex items-center gap-2 min-w-0 pr-2">
							<GoRepo className="text-sm text-(--colorPurple) shrink-0" />
							<span className="text-xs font-medium text-(--colorText) truncate">
								{repo.name}
							</span>
						</div>
						<div className="flex items-center gap-1 text-xs text-(--colorTextLight) shrink-0">
							<FiStar className="text-amber-500" />
							<span>{repo.stargazers_count}</span>
						</div>
					</Link>
				))}
			</div>
		</Card>
	);
}