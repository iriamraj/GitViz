import { useShallow } from "zustand/shallow";
import useThemeStore from "../../../store/ThemeStore";

export default function ToggleTheme() {
	const { isDark, switchTheme } = useThemeStore(
		useShallow(({ isDark, switchTheme }) => ({ isDark, switchTheme })),
	);

	return (
		<button
			type="button"
			onClick={switchTheme}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			className="group relative flex h-10 w-28 cursor-pointer items-center rounded-full border-2 px-1.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
		>
			<span className="sr-only">
				{isDark ? "Switch to light mode" : "Switch to dark mode"}
			</span>

			<span
				className={`absolute left-3 text-sm font-semibold transition-opacity duration-300 ${
					isDark ? "opacity-100" : "opacity-0"
				}`}
			>
				Dark
			</span>
			<span
				className={`absolute right-3 text-sm font-semibold transition-opacity duration-300 ${
					isDark ? "opacity-0" : "opacity-100"
				}`}
			>
				Light
			</span>

			<div
				className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-transform duration-300 ${
					isDark
						? "translate-x-17 border-white/80 bg-white"
						: "translate-x-0 border-black/80 bg-black"
				}`}
			>
				<div className={`h-2.5 w-2.5 rounded-full ${isDark ? "bg-black" : "bg-white"}`} />
			</div>
		</button>
	);
}
