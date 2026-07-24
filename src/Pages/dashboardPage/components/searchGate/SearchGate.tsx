import { useShallow } from "zustand/shallow";
import useThemeStore from "../../../store/ThemeStore";
import SearchBar from "../topBar/SearchBar";
import ToggleTheme from "../topBar/ToggleTheme";
import GithubIcon from "../../../../assets/icons/GithubIcon";

export default function SearchGate() {
	const { theme } = useThemeStore(useShallow(({ isDark }) => ({ theme: isDark })));

	return (
		<div className="relative">
			<div className="searchGate absolute w-full h-full bg-transparent"></div>

			<div
				className={`w-full h-dvh flex flex-col items-center gap-6 font-poppins p-4 ${theme ? "bg-(--colorBackground)" : "bg-(--color-bg)"} transition-colors duration-300`}
			>
				<div className="w-full flex items-center justify-between">
					<div className="flex items-center gap-2.5 min-w-0">
						<div className="rounded-full shadow-md w-9 h-9 p-2 flex justify-center items-center shrink-0 bg-white">
							<GithubIcon fillColor="#6f60b5" />
						</div>
						<p
							className={`text-lg font-semibold transition-colors duration-300 truncate text-black
										`}
						>
							Git<span className="text-(--colorPurple) tracking-wide">Viz</span>
						</p>
					</div>
					<ToggleTheme />
				</div>
				<div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 mb-50">
					<h1
						className={`text-2xl sm:text-3xl font- text-center ${theme ? "text-(--colorTextLight)" : "text-(--colorTextLight)"}`}
					>
						Enter a GitHub URL or Username to get started.
					</h1>

					<SearchBar />
				</div>
			</div>
		</div>
	);
}
