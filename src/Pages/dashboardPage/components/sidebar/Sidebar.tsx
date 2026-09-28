import { LuLayoutDashboard, LuFolderGit2, LuUserRound, LuDownload } from "react-icons/lu";
import { NavLink, useParams } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import GithubIcon from "../../../../assets/icons/GithubIcon";
import type { NAvigationItemsType } from "../../types/NavigationItemsType";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import useThemeStore from "../../../store/ThemeStore";

const navigationItems: NAvigationItemsType = [
	{ id: 1, name: "Dashboard", Icon: LuLayoutDashboard, path: "" },
	{ id: 2, name: "Repositories", Icon: LuFolderGit2, path: "repositories" },
	{ id: 3, name: "Account", Icon: LuUserRound, path: "account" },
];

export default function Sidebar() {
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const { searchTerm } = useParams<{ searchTerm: string }>();
	const { isDark } = useThemeStore(useShallow(({ isDark }) => ({ isDark })));

	const inactiveItemClass = isDark
		? "text-white/80 hover:bg-white/10 hover:text-(--colorPurple)"
		: "text-(--colorText)/80 hover:bg-(--colorPurple)/10 hover:text-(--colorPurple)";

	return (
		<aside className="shrink-0 h-auto md:h-full flex flex-col px-4 sm:px-5 py-5 border-b border-b-(--colorDashBorder) md:w-20 xl:w-64 md:border-r md:border-r-(--colorDashBorder)">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-2.5 min-w-0">
					<div className="rounded-full shadow-md w-9 h-9 p-2 flex justify-center items-center shrink-0 bg-white">
						<GithubIcon fillColor="#6f60b5" />
					</div>
					<p className="text-lg font-semibold transition-colors duration-300 truncate text-(--colorText)">
						Git<span className="text-(--colorPurple) tracking-wide">Viz</span>
					</p>
				</div>

				<button
					type="button"
					aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
					onClick={() => setIsMobileOpen((prev) => !prev)}
					className={`md:hidden p-1.5 rounded-lg transition-colors duration-200 shrink-0 ${
						isDark
							? "text-white hover:bg-white/10"
							: "text-(--colorBaseDark) hover:bg-black/5"
					}`}
				>
					{isMobileOpen ? (
						<RxCross2 className="h-5 w-5 stroke-[0.5]" />
					) : (
						<RxHamburgerMenu className="h-5 w-5 stroke-[0.5]" />
					)}
				</button>
			</div>

			<nav
				className={`flex-1 flex-col justify-between ${
					isMobileOpen ? "flex" : "hidden"
				} md:flex mt-6 md:mt-8 gap-2 items-center md:items-start`}
			>
				<div className="flex flex-col gap-1 w-full">
					{navigationItems.map(({ id, name, Icon, path }) => (
						<NavLink
							key={id}
							to={`/dashboard/${searchTerm}${path ? `/${path}` : ""}`}
							end={path === ""}
							onClick={() => setIsMobileOpen(false)}
							className={({ isActive }) =>
								`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 w-fit xl:w-full ${
									isActive
										? "bg-(--colorPurple) text-white shadow-md"
										: inactiveItemClass
								}`
							}
						>
							<Icon className="h-5 w-5 shrink-0 transition-transform duration-200 group-active:scale-95" />
							<span className="md:hidden xl:block">{name}</span>
						</NavLink>
					))}
				</div>

				<button
					type="button"
					className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 w-fit xl:w-full ${inactiveItemClass}`}
				>
					<LuDownload className="h-5 w-5 shrink-0 transition-transform duration-200 group-active:scale-95" />
					<span className="md:hidden xl:block">Export</span>
				</button>
			</nav>
		</aside>
	);
}