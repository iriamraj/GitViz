import SearchBar from "../searchBar/SearchBar";
import Dashboard from "./dashboard/Dashboard";

export default function Routes() {
	return (
		<div className="w-full overflow-y-scroll">
			<div className="px-8 py-4 md::py-6 md:px-8 border-b border-b-(--colorDashBorder) w-full">
				<SearchBar />
			</div>
			<Dashboard />
		</div>
	);
}
