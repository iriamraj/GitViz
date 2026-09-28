import { useParams, Link } from "react-router-dom";
import RoutesHeading from "../../../common/RoutesHeading";
import { useGithubRepoDetails } from "../../../../../../hooks/useGithub";
import { LuFolderGit2, LuArrowLeft, LuExternalLink } from "react-icons/lu";
import Card from "../../../Card";
import { FiStar, FiGitBranch, FiEye, FiAlertCircle } from "react-icons/fi";
import Commits from "./cards/Commits";
import CardIcon from "../../../common/CardIcon";
import Issues from "../../../common/Issues";
import Contributor from "./cards/Contributor";
import LanguageBar from "./cards/LanguageBar";

export default function Repository() {
	const { repository_name, searchTerm } = useParams();
	const { data: repo, isLoading, error } = useGithubRepoDetails(searchTerm, repository_name);

	if (isLoading) {
		return <div className="p-8 text-center text-(--colorTextLight)">Loading repository...</div>;
	}

	if (error || !repo || repo.error) {
		return (
			<div className="px-4 sm:px-8 py-6 flex flex-col gap-4 min-w-0">
				<Link
					to={`/dashboard/${searchTerm}/repositories`}
					className="flex items-center gap-2 text-sm text-(--colorPurple) hover:underline w-fit"
				>
					<LuArrowLeft className="w-4 h-4" /> Back to Repositories
				</Link>
				<RoutesHeading>Repository</RoutesHeading>
				<Card className="p-8 text-center text-(--colorTextLight)">
					<p className="text-lg font-medium">Repository "{repository_name}" not found.</p>
				</Card>
			</div>
		);
	}

	const shortData = [
		{ id: 1, name: "STARS", value: repo.stargazers_count?.toLocaleString() || "0", Icon: FiStar },
		{ id: 2, name: "FORKS", value: repo.forks_count?.toLocaleString() || "0", Icon: FiGitBranch },
		{ id: 3, name: "WATCHERS", value: repo.watchers_count?.toLocaleString() || "0", Icon: FiEye },
		{ id: 4, name: "OPEN ISSUES", value: repo.open_issues_count?.toLocaleString() || "0", Icon: FiAlertCircle },
	];

	return (
		<div className="px-4 sm:px-8 py-6 flex flex-col gap-6 min-w-0">
			<div className="flex flex-col gap-3">
				<Link
					to={`/dashboard/${searchTerm}/repositories`}
					className="flex items-center gap-2 text-sm font-medium text-(--colorPurple) hover:underline w-fit"
				>
					<LuArrowLeft className="w-4 h-4" /> Back to Repositories
				</Link>

				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex items-center gap-3 min-w-0">
						<div className="w-10 h-10 rounded-2xl bg-(--colorPurple)/20 flex items-center justify-center shrink-0">
							<LuFolderGit2 className="w-5 h-5 text-(--colorPurple)" />
						</div>
						<div className="min-w-0">
							<div className="flex items-center gap-2.5 flex-wrap">
								<h1 className="text-xl sm:text-2xl font-bold text-(--colorText) truncate">
									{repo.name}
								</h1>
								<span className="border border-(--colorPurple)/40 bg-(--colorPurple)/10 rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-(--colorPurple) uppercase tracking-wide">
									{repo.visibility}
								</span>
							</div>
							<p className="text-xs sm:text-sm text-(--colorTextLight) truncate">
								{repo.full_name}
							</p>
						</div>
					</div>

					<a
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-4 py-2 rounded-xl bg-(--colorPurple) text-white text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
					>
						<span>GitHub</span>
						<LuExternalLink className="w-4 h-4" />
					</a>
				</div>

				{repo.description && (
					<p className="text-sm text-(--colorTextLight) leading-relaxed mt-1">
						{repo.description}
					</p>
				)}
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
				{shortData.map(({ id, name, value, Icon }) => (
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

			<LanguageBar repoName={repo.name} username={searchTerm} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
				<div className="lg:col-span-2 flex flex-col gap-6">
					<Commits repoName={repo.name} username={searchTerm} />
					<Issues />
				</div>
				<div className="lg:col-span-1">
					<Contributor repoName={repo.name} username={searchTerm} />
				</div>
			</div>
		</div>
	);
}