import SearchBar from "../topBar/SearchBar";
import ToggleTheme from "../topBar/ToggleTheme";
import Dashboard from "./dashboard/Dashboard";

export default function Routes() {
	return (
		<div className="w-full min-w-0 overflow-y-scroll scrollbar-none">
			<div className="px-4 sm:px-8 py-4 md:py-6 border-b border-b-(--colorDashBorder) w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 sm:justify-between">
				<SearchBar />
				<ToggleTheme />
			</div>
			<Dashboard />
		</div>
	);
}