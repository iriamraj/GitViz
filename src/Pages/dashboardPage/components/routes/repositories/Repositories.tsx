import { useParams, useNavigate } from "react-router-dom";
import { GoRepo, GoStar } from "react-icons/go";
import Card from "../../Card";
import SkeletonRepository from "./SkeletonRepository";
import RoutesHeading from "../../common/RoutesHeading";
import { useGithubRepos } from "../../../../../hooks/useGithub";

const formatDate = (date: string) =>
	new Date(date).toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

export default function Repositories() {
	const { searchTerm } = useParams<{ searchTerm: string }>();
	const navigate = useNavigate();
	const { data: repos = [], isLoading } = useGithubRepos(searchTerm);

	if (isLoading) return <SkeletonRepository />;

	if (!repos.length) {
		return (
			<div className="px-4 sm:px-8 py-6 flex flex-col gap-5 min-w-0">
				<RoutesHeading>Repositories</RoutesHeading>
				<p className="text-(--colorTextLight)">No public repositories found.</p>
			</div>
		);
	}

	return (
		<div className="px-4 sm:px-8 py-6 flex flex-col gap-5 min-w-0">
			<RoutesHeading>Repositories</RoutesHeading>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{repos.map((repo: any) => (
					<Card
						key={repo.id}
						className="group relative flex h-full min-h-36 flex-col justify-between overflow-hidden p-4"
					>
						<div className="flex items-start justify-between gap-3 pr-2">
							<div className="min-w-0 flex-1">
								<div className="flex items-center gap-2">
									<GoRepo
										className="shrink-0 text-lg text-(--colorPurple)"
										aria-hidden="true"
									/>
									<h3
										className="truncate text-(--colorText) font-semibold"
										title={repo.name}
									>
										{repo.name}
									</h3>
								</div>
								<p className="mt-1 truncate text-sm text-(--colorTextLight)">
									{repo.full_name}
								</p>
							</div>

							<div className="flex shrink-0 items-center gap-1 rounded-full bg-(--colorBackground) px-2 py-1 text-sm font-medium text-(--colorText)">
								<GoStar className="text-amber-500" aria-hidden="true" />
								{repo.stargazers_count}
							</div>
						</div>

						<div className="mt-3 space-y-1 text-xs text-(--colorTextLight)">
							<p>Created: {formatDate(repo.created_at)}</p>
							<p>Updated: {formatDate(repo.updated_at)}</p>
						</div>

						<button
							type="button"
							className="absolute right-0 bottom-0 flex h-9 w-20 cursor-pointer items-center justify-center rounded-tl-xl bg-(--colorPurple) text-sm font-medium text-white transition-colors duration-200 hover:bg-(--colorPurpleLight)"
							onClick={() => navigate(`${repo.name}`)}
						>
							View
						</button>
					</Card>
				))}
			</div>
		</div>
	);
}