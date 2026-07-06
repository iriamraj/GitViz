import SearchBar from "../searchBar/SearchBar";

export default function Routes() {
	return (
		<div className="w-full">
			<div className="py-6 px-8 border-b border-b-(--colorDashBorder) w-full">
				<SearchBar />
			</div>
		</div>
	);
}
