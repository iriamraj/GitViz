import { useShallow } from "zustand/shallow";
import useThemeStore from "../../../store/ThemeStore";

export default function ToggleTheme() {
	const { theme, switchTheme } = useThemeStore(
		useShallow(({ isDark, switchTheme }) => ({ theme: isDark, switchTheme: switchTheme })),
	);

	return (
		<>
			<div
				className="border-2 rounded-full w-26 h-fit flex itm justify-center px-2 cursor-pointer transition-all duration-300 gap-4 items-center py-1"
				onClick={switchTheme}
			>
				<p className={`${theme ? "order-1" : "order-2"}`}>{theme ? "Light" : "Dark"}</p>
				<div
					className={`w-8 h-8 border-2 rounded-full ${theme ? "order-2" : "order-1"}`}
				></div>
			</div>
		</>
	);
}