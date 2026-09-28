import { useShallow } from "zustand/shallow";
import useThemeStore from "../../../store/ThemeStore";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function ToggleTheme() {
	const { isDark, switchTheme } = useThemeStore(
		useShallow(({ isDark, switchTheme }) => ({ isDark, switchTheme })),
	);

	return (
		<button
			type="button"
			onClick={switchTheme}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			className="group relative flex h-10 w-28 shrink-0 cursor-pointer items-center rounded-full border-2 border-(--colorDashBorder) bg-(--colorForeground) px-1.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--colorPurple)"
		>
			<span className="sr-only">
				{isDark ? "Switch to light mode" : "Switch to dark mode"}
			</span>

			<span
				className={`absolute left-3 text-sm font-semibold text-(--colorText) transition-opacity duration-300 ${
					isDark ? "opacity-100" : "opacity-0"
				}`}
			>
				Dark
			</span>
			<span
				className={`absolute right-3 text-sm font-semibold text-(--colorText) transition-opacity duration-300 ${
					isDark ? "opacity-0" : "opacity-100"
				}`}
			>
				Light
			</span>

			<div
				className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-transform duration-300 ${
					isDark
						? "translate-x-18 border-white/80 bg-white"
						: "translate-x-0 border-black/80 bg-black"
				}`}
			>
				{isDark ? (
					<BsFillMoonStarsFill className="h-3.5 w-3.5 text-black" />
				) : (
					<MdLightMode className="h-5 w-5 text-white" />
				)}
			</div>
		</button>
	);
}
