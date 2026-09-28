// src/Pages/dashboardPage/components/routes/repositories/repository/cards/FileTree.tsx
import { FiFolder, FiFileText, FiCode } from "react-icons/fi";
import Card from "../../../../Card";
import HeadingCard from "../../../dashboard/cards/HeadingCard";
import { LuFolderGit2 } from "react-icons/lu";

const mockFiles = [
	{ name: "src", type: "folder", lastCommit: "feat: add analytics chart components", time: "2 days ago" },
	{ name: "public", type: "folder", lastCommit: "assets: update SVG icons", time: "1 week ago" },
	{ name: "package.json", type: "file", lastCommit: "chore: upgrade dependencies", time: "3 days ago" },
	{ name: "tsconfig.json", type: "file", lastCommit: "fix: strict type mismatch", time: "5 days ago" },
	{ name: "README.md", type: "file", lastCommit: "docs: update installation guide", time: "2 weeks ago" },
];

export default function FileTree() {
	return (
		<Card className="w-full p-4 flex flex-col gap-4">
			<HeadingCard Icon={LuFolderGit2}>File Structure</HeadingCard>

			<div className="flex flex-col border border-(--colorDashBorder) rounded-2xl overflow-hidden divide-y divide-(--colorDashBorder)">
				{mockFiles.map((file, idx) => (
					<div
						key={idx}
						className="flex items-center justify-between px-4 py-2.5 text-xs hover:bg-(--colorBackground)/50 transition-colors"
					>
						<div className="flex items-center gap-2.5 min-w-0">
							{file.type === "folder" ? (
								<FiFolder className="w-4 h-4 text-(--colorPurple) shrink-0" />
							) : file.name.endsWith(".json") ? (
								<FiCode className="w-4 h-4 text-amber-500 shrink-0" />
							) : (
								<FiFileText className="w-4 h-4 text-(--colorTextLight) shrink-0" />
							)}
							<span className="font-medium text-(--colorText) truncate">{file.name}</span>
						</div>

						<div className="flex items-center gap-4 text-(--colorTextLight) shrink-0">
							<span className="hidden sm:inline truncate max-w-50">{file.lastCommit}</span>
							<span className="text-[11px]">{file.time}</span>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
}