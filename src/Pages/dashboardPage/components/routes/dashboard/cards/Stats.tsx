import { FaRegStar } from "react-icons/fa";
import Card from "../../../Card";
import { LuFolderGit2 } from "react-icons/lu";
import { LuGitFork } from "react-icons/lu";
import { FiGitCommit } from "react-icons/fi";
import { MdOutlinePushPin } from "react-icons/md";

const StatsData = [
	{
		id: 1,
		Icon: FaRegStar,
		heading: "16k",
		para: "Total Stars",
	},
	{
		id: 2,
		Icon: LuFolderGit2,
		heading: "328",
		para: "Total Repos",
	},
	{
		id: 3,
		Icon: LuGitFork,
		heading: "50",
		para: "Total Forks",
	},
	{
		id: 4,
		Icon: FiGitCommit,
		heading: "20k",
		para: "Total Commits",
	},
	{
		id: 5,
		Icon: MdOutlinePushPin,
		heading: "08",
		para: "Pinned Repos",
	},
];

export default function Stats() {
	return (
		<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-4">
			{StatsData.map(({ id, Icon, heading, para }) => (
				<Card
					className="w-full md:w-36 p-3 hover:[&>#iconHolder]:bg-(--colorPurple) hover:[&>#iconHolder>svg]:text-white"
					key={id}
				>
					<div
						id="iconHolder"
						className="w-10 h-10 rounded-full bg-(--colorPurple)/20 flex items-center justify-center shrink-0 mb-4 transition-colors duration-300"
					>
						<Icon className="w-5 h-5 text-(--colorPurple) transition-colors duration-300" />
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-3xl font-medium">{heading}</p>
						<p className="text-[14px] font-medium">{para}</p>
					</div>
				</Card>
			))}
		</div>
	);
}
