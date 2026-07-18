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
import useThemeStore from "../../../store/ThemeStore";

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

	const { theme } = useThemeStore(useShallow(({ isDark }) => ({ theme: isDark })));

	return (
		<aside className="px-4 sm:px-5 py-5 border-b border-b-(--colorDashBorder) md:border-r md:border-r-(--colorDashBorder) gap-8 flex flex-col items-center xl:w-64 md:shrink-0 md:w-fit">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-2 min-w-0">
					<div className="rounded-full shadow-[0_1px_3px_#00000060] w-9 h-9 p-2 flex justify-center items-center shrink-0 bg-(--colorForeground)">
						<GithubIcon fillColor="#6f60b5" />
					</div>
					<p
						className={`text-[18px] font-medium transition-colors duration-300 truncate ${theme ? "text-(--colorForeground)" : "text-(--colorBaseDark)"}`}
					>
						Git<span className="text-(--colorPurple) tracking-[0.45px]">Viz</span>
					</p>
				</div>

				<div onClick={() => setIsHamburgerExpanded((p) => !p)} className="shrink-0">
					{isHamburgerExpanded ? (
						<RxCross2 className="md:hidden h-5.5 w-5.5 stroke-[0.5]" />
					) : (
						<RxHamburgerMenu className="md:hidden h-5.5 w-5.5 stroke-[0.5]" />
					)}
				</div>
			</div>

			<div
				className={`h-full w-full md:flex flex-col ${isHamburgerExpanded ? "flex" : "hidden"} items-center text-center md:items-start`}
				onClick={() => setIsHamburgerExpanded((state) => !state)}
			>
				<div className="flex-1 text-[14px] font-medium gap-4 flex flex-col [&>div]:cursor-pointer w-fit md:w-full">
					{navigationItems.map(({ id, name, Icon }) => (
						<div
							key={id}
							className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-colors duration-200 ${
								currentRoute === name
									? "bg-(--colorPurple) text-[#ffffff]"
									: theme
										? "text-white"
										: "text-(--colorPurple)"
							} transition-colors duration-300 w-fit xl:w-full `}
							onClick={() => changeRoute(name)}
						>
							<Icon className="h-6 w-6 shrink-0" />
							<div className="md:hidden xl:block">{name}</div>
						</div>
					))}
				</div>

				<div className="flex items-center gap-3 px-3 py-2.5 text-[14px] font-medium text-(--colorPurple) cursor-pointer w-32.5">
					<LuDownload className="h-6 w-6 shrink-0" />
					<div>Export</div>
				</div>
			</div>
		</aside>
	);
}
