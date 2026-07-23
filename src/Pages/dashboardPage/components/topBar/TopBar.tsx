import SearchBar from "./SearchBar";
import ToggleTheme from "./ToggleTheme";

export default function TopBar() {
	return (
		<div className="px-4 sm:px-8 py-4 md:py-6 border-b border-b-(--colorDashBorder) w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 sm:justify-between">
			<SearchBar />
			<ToggleTheme />
		</div>
	);
}
