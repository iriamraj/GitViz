import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
	return (
		<div className="bg-(--colorForeground) max-w-120 h-10 shadow-[0_1px_3px_0_#00000030] rounded-full flex items-center text-[16px]">
			<FiSearch className="w-6 h-6 mx-3 " />
			<input
				type="text"
				className="h-full w-full outline-none truncate	"
				placeholder="Enter a GitHub username or URL..."
			/>
			<div className="bg-(--colorPurple) w-fit h-full px-5 text-white flex items-center justify-center rounded-tr-full rounded-br-full">
				Search
			</div>
		</div>
	);
}
