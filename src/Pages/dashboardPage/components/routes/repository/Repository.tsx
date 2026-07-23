import { GoRepo, GoStar } from "react-icons/go";
import Card from "../../Card";

const repositoryData = [
	{
		id: 1,
		starCount: 33,
		repoName: "GitViz",
		repoFullName: "iriamraj/GitViz",
		isPrivate: false,
		created_at: "2026-03-11T10:23:37Z",
		updated_at: "2026-03-12T10:25:40Z",
	},
	{
		id: 2,
		starCount: 33,
		repoName: "GitViz",
		repoFullName: "iriamraj/GitViz",
		isPrivate: false,
		created_at: "2026-03-11T10:23:37Z",
		updated_at: "2026-03-12T10:25:40Z",
	},
	{
		id: 3,
		starCount: 33,
		repoName: "GitViz",
		repoFullName: "iriamraj/GitViz",
		isPrivate: false,
		created_at: "2026-03-11T10:23:37Z",
		updated_at: "2026-03-12T10:25:40Z",
	},
	{
		id: 4,
		starCount: 33,
		repoName: "GitViz",
		repoFullName: "iriamraj/GitViz",
		isPrivate: false,
		created_at: "2026-03-11T10:23:37Z",
		updated_at: "2026-03-12T10:25:40Z",
	},
	{
		id: 5,
		starCount: 33,
		repoName: "GitViz",
		repoFullName: "iriamraj/GitViz",
		isPrivate: false,
		created_at: "2026-03-11T10:23:37Z",
		updated_at: "2026-03-12T10:25:40Z",
	},
	{
		id: 6,
		starCount: 33,
		repoName: "GitViz",
		repoFullName: "iriamraj/GitViz",
		isPrivate: false,
		created_at: "2026-03-11T10:23:37Z",
		updated_at: "2026-03-12T10:25:40Z",
	},
	{
		id: 7,
		starCount: 33,
		repoName: "GitViz",
		repoFullName: "iriamraj/GitViz",
		isPrivate: false,
		created_at: "2026-03-11T10:23:37Z",
		updated_at: "2026-03-12T10:25:40Z",
	},
];

const formatDate = (date: string) =>
	new Date(date).toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

export default function Repository() {
	return (
		<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{repositoryData.map((repo) => (
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
									title={repo.repoName}
								>
									{repo.repoName}
								</h3>
							</div>
							<p className="mt-1 truncate text-sm text-(--colorTextLight)">
								{repo.repoFullName}
							</p>
						</div>

						<div className="flex shrink-0 items-center gap-1 rounded-full bg-(--colorBackground) px-2 py-1 text-sm font-medium text-(--colorText)">
							<GoStar className="text-amber-500" aria-hidden="true" />
							{repo.starCount}
						</div>
					</div>

					<div className="mt-3 space-y-1 text-xs text-(--colorTextLight)">
						<p>Created: {formatDate(repo.created_at)}</p>
						<p>Updated: {formatDate(repo.updated_at)}</p>
					</div>

					<button
						type="button"
						className="absolute right-0 bottom-0 flex h-9 w-20 cursor-pointer items-center justify-center rounded-tl-xl bg-(--colorPurple) text-sm font-medium text-white transition-colors duration-200 hover:bg-(--colorPurpleLight)"
					>
						View
					</button>
				</Card>
			))}
		</div>
	);
}
