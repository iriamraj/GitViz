import { Nav } from "./Nav";
import GithubIcon from "../../../../assets/icons/GithubIcon";
import ExportIcon from "../../../../assets/icons/ExportIcon";

export default function Sidebar() {
	return (
		<aside className="flex overflow-clip flex-col items-center gap-12 self-stretch py-7.75 px-7.5 relative border-r border-r-solid border-r-(--colorDashBorder)">
			<div
				id="floating"
				className="w-92.5 h-107.25 absolute -left-51.5 top-74.25 rounded-full filter-[blur(100px)] bg-[#FFAE421F]"
			/>
			<div
				id="logo"
				className="flex overflow-clip items-start gap-2.5 justify-center relative"
			>
				<div className="flex overflow-clip items-center">
					<GithubIcon fillColor="#6f60b5" />
				</div>
				<div className="font-['Poppins',system-ui,sans-serif] font-medium text-black text-2xl/7.5">
					GitViz
				</div>
			</div>

			<div className="flex overflow-clip flex-col items-start gap-8.25 self-stretch flex-1 justify-between relative">
				<Nav />
				<div className="flex overflow-clip items-center gap-3.5 px-5 self-stretch">
					<div className="flex overflow-clip items-center relative w-6.5 h-7.5">
						<ExportIcon fillColor="#6f60b5" />
					</div>
					<div className="content-center font-['Poppins',system-ui,sans-serif] text-[#6F60B5] text-base/5">
						Export
					</div>
				</div>
			</div>
		</aside>
	);
}
