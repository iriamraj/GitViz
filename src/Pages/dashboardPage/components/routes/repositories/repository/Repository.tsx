import { useParams } from "react-router-dom";
import RoutesHeading from "../../../common/RoutesHeading";
import repoData from "../../../../../../dummyData/repoData";
import { LuFolderGit2 } from "react-icons/lu";
import Card from "../../../Card";
import { FiGitCommit } from "react-icons/fi";
import Commits from "./cards/Commits";
import CardIcon from "../../../common/CardIcon";
import Issues from "../../../common/Issues";
import Contributor from "./cards/Contributor";

export default function Repository() {
	const { repository_name } = useParams();
	const [repo] = repoData.filter((item) => item.name === repository_name);

	if (!repo) {
		return (
			<div className="px-4 sm:px-8 py-6 flex flex-col gap-3">
				<RoutesHeading>Repository</RoutesHeading>
				<p className="text-(--colorTextLight)">Repository not found.</p>
			</div>
		);
	}

	const shortData = [
		{ id: 1, name: "COMMITS", value: 1245, Icon: FiGitCommit },
		{ id: 2, name: "STARS", value: "12.4k", Icon: FiGitCommit },
		{ id: 3, name: "FORKS", value: "1.8k", Icon: FiGitCommit },
		{ id: 4, name: "WATCHERS", value: "1.8k", Icon: FiGitCommit },
		{ id: 5, name: "Open Issues", value: "1.8k", Icon: FiGitCommit },
		{ id: 6, name: "Pull Requests", value: "1.8k", Icon: FiGitCommit },
		{ id: 7, name: "Contributors", value: "1.8k", Icon: FiGitCommit },
		{ id: 8, name: "Releases", value: "1.8k", Icon: FiGitCommit },
	];

	return (
		<div className="px-4 sm:px-8 py-6 flex flex-col gap-3">
			<RoutesHeading>Repository</RoutesHeading>

			<div className="flex items-center gap-3">
				<div
					id="iconHolder"
					className="w-9 h-9 rounded-full bg-(--colorPurple)/30 flex items-center justify-center shrink-0 transition-colors duration-300"
				>
					<LuFolderGit2 className="w-5 h-5 text-(--colorPurple) transition-colors duration-300" />
				</div>
				<h2 className="text-2xl font-medium line-clamp-1">{repo.full_name}</h2>
				<p className="border-2 border-(--colorTextLight) rounded-full px-2 py-0.5 text-[11px] font-medium text-(--colorTextLight) leading-tight">
					ACTIVE
				</p>
			</div>
			<p className="line-clamp-2 text-[14px]">{repo.description}</p>

			<div className="w-full h-full flex gap-4 flex-wrap mt-4">
				{shortData.map(({ id, name, value, Icon }) => (
					<Card
						key={id}
						className="w-full md:min-w-36 md:w-fit p-3 pr-4 hover:[&>#iconHolder]:bg-(--colorPurple) hover:[&>#iconHolder>svg]:text-white flex items-center gap-4"
					>
						<CardIcon>
							<Icon className="w-5 h-5 text-(--colorPurple) transition-colors duration-300" />
						</CardIcon>
						<div className="flex flex-col">
							<p className="text-[14px] font-medium">{name}</p>
							<p className="text-3xl font-medium">{value}</p>
						</div>
					</Card>
				))}
			</div>

			<div className="w-full h-fit flex items-center flex-wrap gap-4 mt-4">
				<Commits />
				<Issues width="w-full xl:w-110" />
				<Contributor />
			</div>
		</div>
	);
}