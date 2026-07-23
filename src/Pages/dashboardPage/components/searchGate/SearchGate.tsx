import { useShallow } from "zustand/shallow";
import useThemeStore from "../../../store/ThemeStore";
import SearchBar from "../topBar/SearchBar";
import ToggleTheme from "../topBar/ToggleTheme";

export default function SearchGate() {
	const { theme } = useThemeStore(useShallow(({ isDark }) => ({ theme: isDark })));

	return (
		<div
			className={`relative w-full h-screen flex flex-col items-center justify-center gap-6 font-poppins px-4 ${theme ? "bg-(--colorBackground)" : "bg-(--color-bg)"} transition-colors duration-300`}
		>
			<div className="absolute top-4 right-4">
				<ToggleTheme />
			</div>
			<h1
				className={`text-2xl sm:text-3xl font-semibold text-center ${theme ? "text-black" : "text-white"}`}
			>
				Search a GitHub profile to get started...
			</h1>
			<SearchBar />
		</div>
	);
}
