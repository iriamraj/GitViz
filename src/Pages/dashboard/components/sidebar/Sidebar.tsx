import { LuLayoutDashboard } from "react-icons/lu";
import { LuFolderGit2 } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { RoutesStore } from "../../store/RoutesStore";
import { useShallow } from "zustand/shallow";
import GithubIcon from "../../../../assets/icons/GithubIcon";
import type { NAvigationItemsType } from "../../types/NavigationItemsType";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const navigationItems: NAvigationItemsType = [
	{
		id: 1,
		name: "Dashboard",
		Icon: LuLayoutDashboard,
	},
	{
		id: 2,
		name: "Repository",
		Icon: LuFolderGit2,
	},
	{
		id: 3,
		name: "Account",
		Icon: LuUserRound,
	},
];

export default function Sidebar() {
	const [isHamburgerExpanded, setIsHamburgerExpanded] = useState(false);

	const { currentRoute, changeRoute } = RoutesStore(
		useShallow(({ currentRoute, changeRoute }) => ({
			currentRoute,
			changeRoute,
		})),
	);

	function handelRoutes(route: string) {
		changeRoute(route);
	}

	function handelHamburger() {
		setIsHamburgerExpanded((prev) => !prev);
	}

	return (
		<aside className="px-5 py-5 bg-(--colorForeground) border-b border-b-(--colorDashBorder) sm:border-r sm:border-r-(--colorDashBorder) gap-8 flex flex-col items-center">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-2 w-57.5">
					<div className="rounded-full shadow-[0_1px_3px_#00000060] w-9 h-9 p-2 flex justify-center">
						<GithubIcon fillColor="#6f60b5" className="w-6 h-6" />
					</div>
					<p className="text-[18px] font-medium">
						Git<span className="text-(--colorPurple) tracking-[0.45px]">Viz</span>
					</p>
				</div>

				<div onClick={handelHamburger}>
					{isHamburgerExpanded ? (
						<RxCross2 className="sm:hidden h-5.5 w-5.5 stroke-[0.5]" />
					) : (
						<RxHamburgerMenu className="sm:hidden h-5.5 w-5.5 stroke-[0.5]" />
					)}
				</div>
			</div>

			<div
				className={`h-full w-full sm:flex flex-col ${isHamburgerExpanded ? "flex" : "hidden"}`}
				onClick={handelHamburger}
			>
				<div className="flex-1 text-[14px] font-medium gap-1 flex flex-col [&>div]:cursor-pointer">
					{navigationItems.map(({ id, name, Icon }) => {
						return (
							<div
								key={id}
								className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-colors duration-200 ${currentRoute === name ? "bg-(--colorPurple) text-[#ffffff]" : "text-(--colorPurple)"}`}
								onClick={() => handelRoutes(name)}
							>
								<Icon className="h-6 w-6" />
								<div>{name}</div>
							</div>
						);
					})}
				</div>

				<div className="flex items-center gap-3 px-3 py-2.5 text-[14px] font-medium text-(--colorPurple) cursor-pointer">
					<LuDownload className="h-6 w-6" />
					<div>Export</div>
				</div>
			</div>
		</aside>
	);
}
